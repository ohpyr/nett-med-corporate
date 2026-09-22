import { SITE_URL } from '$lib/config';
import { services } from '$lib/content';
import { routes, servicePath, type Locale, type RouteKey } from '$lib/i18n';
import { jobs } from '$lib/content/work';
import { posts } from '$lib/content/posts';

export const prerender = true;

/** A page and its equivalent in the other locale. */
interface Entry {
	fr: string;
	en: string;
	priority: string;
	/** Only the gallery carries images worth declaring for image search. */
	images?: boolean;
}

function buildEntries(): Entry[] {
	const staticKeys: { key: RouteKey; priority: string }[] = [
		{ key: 'home', priority: '1.0' },
		{ key: 'services', priority: '0.9' },
		{ key: 'quote', priority: '0.8' },
		{ key: 'contact', priority: '0.7' },
		{ key: 'blog', priority: '0.7' },
		{ key: 'work', priority: '0.6' },
		{ key: 'about', priority: '0.6' }
	];

	const staticEntries = staticKeys.map(({ key, priority }) => ({
		fr: routes[key].fr,
		en: routes[key].en,
		priority,
		images: key === 'work'
	}));

	const serviceEntries = services.map((service) => ({
		fr: servicePath('fr', service.fr.slug),
		en: servicePath('en', service.en.slug),
		// Tier drives priority: the pages the site is built to win rank highest.
		priority: service.tier === 1 ? '0.9' : service.tier === 2 ? '0.8' : '0.6'
	}));

	// Articles carry real ranking weight for the uncontested queries, so they
	// sit above the lower-tier service pages rather than at the bottom.
	const postEntries = posts.map((post) => ({
		fr: `${routes.blog.fr}/${post.fr.slug}`,
		en: `${routes.blog.en}/${post.en.slug}`,
		priority: '0.7'
	}));

	return [...staticEntries, ...serviceEntries, ...postEntries];
}

function abs(path: string): string {
	return `${SITE_URL}${path === '/' ? '' : path}`;
}

/**
 * Each URL carries the full set of hreflang alternates, including a
 * self-reference. Google treats non-reciprocal annotations as unverified and
 * ignores them, so both the FR and EN entries list both languages.
 */
const escapeXml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

/**
 * Image entries for the gallery.
 *
 * Google discovers images it can already crawl, but declaring them with their
 * captions is how the job photos get a chance in image search for terms like
 * "nettoyage immeuble Montréal". The URL is the hashed build artifact, read
 * off the enhanced-img object so it can never drift from what is served.
 */
function imageNodes(locale: Locale): string {
	return jobs
		.filter((job) => job.image)
		.map(
			(job) => `
		<image:image>
			<image:loc>${SITE_URL}${job.image!.img.src}</image:loc>
			<image:caption>${escapeXml(job.alt[locale])}</image:caption>
			<image:title>${escapeXml(job.title[locale])}</image:title>
		</image:image>`
		)
		.join('');
}

function urlNode(entry: Entry, locale: Locale, lastmod: string): string {
	const self = abs(locale === 'fr' ? entry.fr : entry.en);
	return `	<url>
		<loc>${self}</loc>
		<xhtml:link rel="alternate" hreflang="fr-CA" href="${abs(entry.fr)}"/>
		<xhtml:link rel="alternate" hreflang="en-CA" href="${abs(entry.en)}"/>
		<xhtml:link rel="alternate" hreflang="x-default" href="${abs(entry.fr)}"/>
		<lastmod>${lastmod}</lastmod>
		<priority>${entry.priority}</priority>${entry.images ? imageNodes(locale) : ''}
	</url>`;
}

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);
	const entries = buildEntries();

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map((e) => urlNode(e, 'fr', lastmod)).join('\n')}
${entries.map((e) => urlNode(e, 'en', lastmod)).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}
