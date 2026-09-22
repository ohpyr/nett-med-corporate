import { fail, type Actions, type RequestEvent } from '@sveltejs/kit';
import type { Locale } from '$lib/i18n';
import type { FieldError, QuoteValues } from '$lib/quote-form';
import { recordLead, type Lead } from './leads';

/**
 * The quote form handler, shared by /soumission and /en/quote.
 *
 * Validation lives here rather than only in the browser: the endpoint is
 * reachable directly, and client-side checks are a convenience for the visitor,
 * not a guarantee for us.
 */

const MAX = { name: 100, phone: 40, email: 160, type: 120, area: 200, message: 5000 };

/**
 * In-memory, per-IP throttle. Resets on restart, which is fine — it exists to
 * blunt a script hammering the endpoint, not to be an audit trail.
 */
const recent = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
	const now = Date.now();
	const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
	hits.push(now);
	recent.set(ip, hits);

	// Keep the map from growing without bound on a long-running server.
	if (recent.size > 5000) {
		for (const [key, times] of recent) {
			if (times.every((t) => now - t >= WINDOW_MS)) recent.delete(key);
		}
	}
	return hits.length > MAX_PER_WINDOW;
}

const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
const digitCount = (value: string) => (value.match(/\d/g) ?? []).length;

function clean(value: FormDataEntryValue | null, max: number): string {
	return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

/**
 * Typed rejection helper.
 *
 * Writing `fail(400, { error: 'name', ... })` inline widens `error` to
 * `string`, which breaks the ActionData type the component consumes. Passing
 * it through a parameter typed as FieldError keeps the union intact.
 */
function invalid(status: number, error: FieldError, values: QuoteValues) {
	return fail(status, { error, values });
}

export function createQuoteAction(locale: Locale) {
	return {
		default: async (event: RequestEvent) => {
			const data = await event.request.formData();

			// Honeypot: a real visitor never sees this field, so anything in it
			// is a bot. Answer 200 with a success shape so the bot has no signal
			// to adapt to, but record nothing.
			if (clean(data.get('website'), 200) !== '') {
				return { success: true };
			}

			const name = clean(data.get('name'), MAX.name);
			const phone = clean(data.get('phone'), MAX.phone);
			const email = clean(data.get('email'), MAX.email);
			const buildingType = clean(data.get('type'), MAX.type);
			const area = clean(data.get('area'), MAX.area);
			const message = clean(data.get('message'), MAX.message);

			const values = { name, phone, email, type: buildingType, area, message };

			if (rateLimited(event.getClientAddress())) {
				return invalid(429, 'rate', values);
			}
			if (name.length < 2) {
				return invalid(400, 'name', values);
			}
			if (!phone && !email) {
				return invalid(400, 'contact', values);
			}
			if (phone && digitCount(phone) < 10) {
				return invalid(400, 'phone', values);
			}
			if (email && !looksLikeEmail(email)) {
				return invalid(400, 'email', values);
			}

			const lead: Lead = {
				receivedAt: new Date().toISOString(),
				locale,
				name,
				phone,
				email,
				buildingType,
				area,
				message,
				userAgent: event.request.headers.get('user-agent') ?? ''
			};

			try {
				await recordLead(lead);
			} catch (err) {
				// Persistence failed, so we genuinely do not have their request.
				// Say so and point at the phone rather than pretending it landed.
				console.error('[quote] could not persist lead:', err);
				return invalid(500, 'generic', values);
			}

			return { success: true };
		}
	} satisfies Actions;
}
