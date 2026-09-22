import { env } from '$env/dynamic/private';
import { appendFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import nodemailer from 'nodemailer';
import type { Locale } from '$lib/i18n';

/**
 * Lead capture.
 *
 * Ordering is the whole design: the submission is appended to a file on disk
 * before any notification is attempted, and notification failures are
 * swallowed. Email and webhooks fail for reasons outside our control — an
 * expired SMTP password, a rate limit, a provider outage — and a quote request
 * that reached the server must not be lost to any of them. The file is the
 * record of truth; notifications are a convenience on top.
 */

export interface Lead {
	receivedAt: string;
	locale: Locale;
	name: string;
	phone: string;
	email: string;
	buildingType: string;
	area: string;
	message: string;
	userAgent: string;
}

/** Append-only log of every submission. Survives restarts and redeploys. */
const leadsFile = resolve(env.LEADS_FILE || 'data/leads.jsonl');

export async function persistLead(lead: Lead): Promise<void> {
	await mkdir(dirname(leadsFile), { recursive: true });
	await appendFile(leadsFile, JSON.stringify(lead) + '\n', 'utf8');
}

function buildTransport() {
	const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = env;
	if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

	const port = Number(SMTP_PORT || 587);
	return nodemailer.createTransport({
		host: SMTP_HOST,
		port,
		// 465 is implicit TLS; 587 upgrades via STARTTLS.
		secure: port === 465,
		auth: { user: SMTP_USER, pass: SMTP_PASS }
	});
}

function formatLead(lead: Lead): string {
	return [
		`Nouvelle demande de soumission (${lead.locale.toUpperCase()})`,
		'',
		`Nom              : ${lead.name}`,
		`Téléphone        : ${lead.phone || '—'}`,
		`Courriel         : ${lead.email || '—'}`,
		`Type de bâtiment : ${lead.buildingType || '—'}`,
		`Secteur          : ${lead.area || '—'}`,
		'',
		'Message :',
		lead.message || '—',
		'',
		`Reçue le ${lead.receivedAt}`
	].join('\n');
}

async function notifyByEmail(lead: Lead): Promise<void> {
	const transport = buildTransport();
	const to = env.LEAD_NOTIFY_TO;
	if (!transport || !to) return;

	await transport.sendMail({
		from: env.SMTP_FROM || env.SMTP_USER,
		to,
		// Replying from the inbox goes straight back to the prospect.
		replyTo: lead.email || undefined,
		subject: `Soumission — ${lead.name}${lead.buildingType ? ` (${lead.buildingType})` : ''}`,
		text: formatLead(lead)
	});
}

async function notifyByWebhook(lead: Lead): Promise<void> {
	const url = env.LEAD_WEBHOOK_URL;
	if (!url) return;

	await fetch(url, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		// `content` is what Discord and Slack render; the rest is for anything
		// structured reading the same payload.
		body: JSON.stringify({ content: formatLead(lead), lead })
	});
}

/**
 * Persist, then notify. Throws only if persistence fails — that is the one
 * failure the visitor needs to know about, because it means we do not have
 * their request.
 */
export async function recordLead(lead: Lead): Promise<void> {
	await persistLead(lead);

	const results = await Promise.allSettled([notifyByEmail(lead), notifyByWebhook(lead)]);
	for (const result of results) {
		if (result.status === 'rejected') {
			console.error('[leads] notification failed (lead is safely on disk):', result.reason);
		}
	}
}

/** True when at least one notification channel is configured. */
export function notificationsConfigured(): boolean {
	return Boolean((env.SMTP_HOST && env.LEAD_NOTIFY_TO) || env.LEAD_WEBHOOK_URL);
}
