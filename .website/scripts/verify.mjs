/**
 * Whole-site integrity check against the built output in build/.
 *
 * Exists because `npm run build` and `svelte-check` both pass on a site that
 * is broken in a browser: prerendering runs SSR only and never hydrates, and
 * neither tool looks at NAP consistency, hreflang reciprocity, placeholder
 * text, or whether a referenced asset actually exists.
 *
 * Run with: node scripts/verify.mjs
 * Exits non-zero if any check fails, so it can gate a deploy.
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

// adapter-node splits the output: prerendered HTML in one tree, static files
// and hashed assets in another. Asset URLs referenced by a page resolve
// against CLIENT, not against the page's own directory.
const ROOT = 'build/prerendered';
const CLIENT = 'build/client';
const SITE = 'https://nett-med.ca';

/**
 * Routes that are deliberately server-rendered rather than prerendered, so
 * they have no HTML file to inspect. Both host the quote form, which cannot
 * be prerendered because a page with form actions is dynamic by definition.
 * They are covered by the end-to-end form test instead.
 */
const DYNAMIC_ROUTES = new Set(['/soumission', '/en/quote']);

// Kept in sync with src/lib/config.ts by the NAP check below.
const PHONE_DISPLAY = '+1 (514) 218-7341';
const PHONE_E164 = '+15142187341';
const EMAIL = 'nett-med@hotmail.com';
const STREET = '4175 rue Jarry';
const POSTAL = 'H1Z 2H5';

const problems = [];
const notes = [];
const fail = (area, msg) => problems.push({ area, msg });
const note = (area, msg) => notes.push({ area, msg });

function walk(dir, out = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(full);
	}
	return out;
}

const allFiles = walk(ROOT);
const pages = allFiles
	.filter((f) => f.endsWith('.html') && !f.includes('_app'))
	.sort();
const pageSet = new Set(pages.map((p) => relative(ROOT, p).replaceAll('\\', '/')));

const read = (f) => readFileSync(f, 'utf8');
const rel = (f) => '/' + relative(ROOT, f).replaceAll('\\', '/').replace(/\.html$/, '').replace(/^index$/, '');

// ---------------------------------------------------------------- structure
if (pages.length !== 52) fail('structure', `expected 52 prerendered pages, found ${pages.length}`);

function resolves(href) {
	const clean = (href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/').replace(/^\//, '');
	if (clean === '') return pageSet.has('index.html');
	if (DYNAMIC_ROUTES.has('/' + clean)) return true;
	return (
		pageSet.has(`${clean}.html`) ||
		pageSet.has(`${clean}/index.html`) ||
		existsSync(join(ROOT, clean)) ||
		existsSync(join(CLIENT, clean))
	);
}

// ------------------------------------------------------------------- checks
const titles = new Map();
const descs = new Map();
let linkCount = 0;
let imgCount = 0;

for (const file of pages) {
	const html = read(file);
	const path = rel(file);
	const isEn = path === '/en' || path.startsWith('/en/');

	// --- lang
	const lang = html.match(/<html lang="([^"]*)"/)?.[1];
	const wantLang = isEn ? 'en-CA' : 'fr-CA';
	if (lang !== wantLang) fail('lang', `${path}: lang="${lang}" expected "${wantLang}"`);
	if (html.includes('%lang%')) fail('lang', `${path}: %lang% placeholder was not replaced`);

	// --- title / description
	const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
	const desc = html.match(/<meta name="description" content="(.*?)"/s)?.[1];
	if (!title) fail('meta', `${path}: no <title>`);
	if (!desc) fail('meta', `${path}: no meta description`);
	if (title) {
		if (title.length > 60) fail('meta', `${path}: title ${title.length} chars (>60)`);
		if (titles.has(title)) fail('meta', `${path}: duplicate title, also on ${titles.get(title)}`);
		else titles.set(title, path);
	}
	if (desc) {
		if (desc.length > 155) fail('meta', `${path}: description ${desc.length} chars (>155)`);
		if (descs.has(desc)) fail('meta', `${path}: duplicate description, also on ${descs.get(desc)}`);
		else descs.set(desc, path);
	}

	// --- headings
	const h1s = html.match(/<h1[\s>]/g) ?? [];
	if (h1s.length !== 1) fail('headings', `${path}: ${h1s.length} <h1> elements, expected 1`);

	// --- canonical
	const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
	const expected = `${SITE}${path === '/' ? '' : path}`;
	if (canonical !== expected) fail('canonical', `${path}: canonical is "${canonical}" expected "${expected}"`);

	// --- hreflang reciprocity
	const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
	const langs = new Set(alts.map((m) => m[1]));
	for (const want of ['fr-CA', 'en-CA', 'x-default']) {
		if (!langs.has(want)) fail('hreflang', `${path}: missing hreflang="${want}"`);
	}
	const selfTag = isEn ? 'en-CA' : 'fr-CA';
	const selfHref = alts.find((m) => m[1] === selfTag)?.[2];
	if (selfHref !== expected) fail('hreflang', `${path}: self-reference is "${selfHref}" expected "${expected}"`);
	const xDefault = alts.find((m) => m[1] === 'x-default')?.[2];
	const frHref = alts.find((m) => m[1] === 'fr-CA')?.[2];
	if (xDefault !== frHref) fail('hreflang', `${path}: x-default should point at the French URL`);

	// --- internal links resolve
	for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
		const href = m[1];
		if (href.startsWith('/_app') || href.startsWith('//')) continue;
		linkCount++;
		if (!resolves(href)) fail('links', `${path}: broken link -> ${href}`);
	}

	// --- images: asset exists + alt present
	for (const m of html.matchAll(/<img\b[^>]*>/g)) {
		const tag = m[0];
		imgCount++;
		if (!/\balt="/.test(tag)) fail('a11y', `${path}: <img> without alt -> ${tag.slice(0, 70)}`);
		const src = tag.match(/src="([^"]+)"/)?.[1];
		if (src?.startsWith('/') && !existsSync(join(CLIENT, src.slice(1)))) {
			fail('assets', `${path}: missing image file -> ${src}`);
		}
	}
	for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
		for (const cand of m[1].split(',')) {
			const url = cand.trim().split(/\s+/)[0];
			if (url.startsWith('/') && !existsSync(join(CLIENT, url.slice(1)))) {
				fail('assets', `${path}: missing srcset file -> ${url}`);
			}
		}
	}

	// --- NAP consistency
	for (const m of html.matchAll(/href="tel:([^"]+)"/g)) {
		if (m[1] !== PHONE_E164) fail('nap', `${path}: tel: link is "${m[1]}" expected "${PHONE_E164}"`);
	}
	for (const m of html.matchAll(/href="mailto:([^"]+)"/g)) {
		if (m[1] !== EMAIL) fail('nap', `${path}: mailto: is "${m[1]}" expected "${EMAIL}"`);
	}
	// Any phone-shaped string that is not the real number
	for (const m of html.matchAll(/\(?\b514\)?[\s.-]?\d{3}[\s.-]?\d{4}/g)) {
		const normalized = '+1' + m[0].replace(/\D/g, '');
		if (normalized !== PHONE_E164) fail('nap', `${path}: stray phone number "${m[0]}"`);
	}
	// Stale address that was never the real one
	if (/info@nett-med\.ca/.test(html)) fail('nap', `${path}: stale placeholder email info@nett-med.ca`);

	// --- JSON-LD
	for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
		let data;
		try {
			data = JSON.parse(m[1]);
		} catch (e) {
			fail('schema', `${path}: invalid JSON-LD (${e.message})`);
			continue;
		}
		const json = JSON.stringify(data);
		if (json.includes('aggregateRating') || json.includes('AggregateRating')) {
			fail('schema', `${path}: AggregateRating present — profile is 3 positive / 2 negative`);
		}
		if (data['@type'] === 'LocalBusiness') {
			if (data.telephone !== PHONE_E164) fail('schema', `${path}: LocalBusiness telephone "${data.telephone}"`);
			if (data.email && data.email !== EMAIL) fail('schema', `${path}: LocalBusiness email "${data.email}"`);
			if (data.address?.streetAddress !== STREET) fail('schema', `${path}: street "${data.address?.streetAddress}"`);
			if (data.address?.postalCode !== POSTAL) fail('schema', `${path}: postal "${data.address?.postalCode}"`);
			if (Array.isArray(data.areaServed)) {
				for (const a of data.areaServed) {
					if (/^(Quebec|Québec|Canada)$/i.test(a.name)) {
						fail('schema', `${path}: areaServed "${a.name}" — province/country not allowed since June 2025`);
					}
				}
			}
		}
	}

	// --- placeholder / TODO leakage into rendered text
	const text = html
		.replace(/<script[\s\S]*?<\/script>/g, '')
		.replace(/<style[\s\S]*?<\/style>/g, '')
		.replace(/<[^>]+>/g, ' ');
	for (const word of ['TODO', 'Placeholder', 'placeholder', 'Lorem ipsum', 'FIXME', 'XXX']) {
		if (text.includes(word)) {
			note('placeholders', `${path}: visible "${word}" in page text`);
			break;
		}
	}

	// --- obvious locale leakage in the visible copy
	if (!isEn && /\b(What['’]s included|Frequently asked questions|Request a quote)\b/.test(text)) {
		fail('i18n', `${path}: English UI string on a French page`);
	}
	if (isEn && /\b(Ce qui est inclus|Questions fréquentes|Demander une soumission)\b/.test(text)) {
		fail('i18n', `${path}: French UI string on an English page`);
	}
}

// ------------------------------------------------------------------ sitemap
const sitemapPath = join(ROOT, 'sitemap.xml');
if (!existsSync(sitemapPath)) fail('sitemap', 'sitemap.xml missing');
else {
	const xml = read(sitemapPath);
	const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
	const sitemapPaths = new Set(locs.map((l) => l.replace(SITE, '') || '/'));
	const pagePaths = new Set([...pages.map(rel), ...DYNAMIC_ROUTES]);

	for (const p of pagePaths) {
		if (!sitemapPaths.has(p)) fail('sitemap', `page not in sitemap: ${p}`);
	}
	for (const p of sitemapPaths) {
		if (!pagePaths.has(p)) fail('sitemap', `sitemap lists a page that does not exist: ${p}`);
	}
	if (new Set(locs).size !== locs.length) fail('sitemap', 'duplicate <loc> entries');
	for (const l of locs) {
		if (!l.startsWith(SITE)) fail('sitemap', `loc not absolute on ${SITE}: ${l}`);
		if (l.endsWith('.html')) fail('sitemap', `loc exposes .html: ${l}`);
	}
}

// ------------------------------------------------------------------- robots
const robotsPath = join(CLIENT, 'robots.txt');
if (!existsSync(robotsPath)) fail('robots', 'robots.txt missing');
else {
	const robots = read(robotsPath);
	if (!robots.includes(`${SITE}/sitemap.xml`)) fail('robots', 'robots.txt does not point at the sitemap');
	if (/^\s*Disallow:\s*\/\s*$/m.test(robots)) fail('robots', 'robots.txt disallows the whole site');
}

// ------------------------------------------------------------ discovery files
if (!existsSync(join(ROOT, 'llms.txt'))) fail('discovery', 'llms.txt missing');

for (const og of ['og-fr.png', 'og-en.png']) {
	if (!existsSync(join(CLIENT, og))) fail('discovery', `share image missing: ${og}`);
}

// -------------------------------------------------------------------- icons
for (const icon of ['favicon-32.png', 'icon-192.png', 'apple-touch-icon.png']) {
	if (!existsSync(join(CLIENT, icon))) fail('icons', `missing ${icon}`);
}

// ------------------------------------------------------------------- report
const byArea = {};
for (const p of problems) (byArea[p.area] ??= []).push(p.msg);

console.log(`\nChecked ${pages.length} prerendered pages (+${DYNAMIC_ROUTES.size} dynamic), ${linkCount} internal links, ${imgCount} images.\n`);

if (problems.length === 0) {
	console.log('PASS — no integrity problems found.');
} else {
	console.log(`FAIL — ${problems.length} problem(s):\n`);
	for (const [area, msgs] of Object.entries(byArea)) {
		console.log(`  [${area}] ${msgs.length}`);
		for (const m of msgs.slice(0, 12)) console.log(`     - ${m}`);
		if (msgs.length > 12) console.log(`     ... and ${msgs.length - 12} more`);
	}
}

if (notes.length) {
	console.log(`\n${notes.length} note(s) — not failures, but worth seeing:\n`);
	const noteAreas = {};
	for (const n of notes) (noteAreas[n.area] ??= []).push(n.msg);
	for (const [area, msgs] of Object.entries(noteAreas)) {
		console.log(`  [${area}] ${msgs.length}`);
		for (const m of msgs.slice(0, 10)) console.log(`     - ${m}`);
		if (msgs.length > 10) console.log(`     ... and ${msgs.length - 10} more`);
	}
}

process.exit(problems.length ? 1 : 0);
