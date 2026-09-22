import { getRawBySlug } from './content';
import { getRawPostBySlug } from './content/posts';
import { routes, servicePath, type Locale, type RouteKey } from './i18n';

/** Derive the active locale from a pathname. English is the prefixed locale. */
export function localeFromPath(pathname: string): Locale {
	return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

/**
 * Map a pathname to the equivalent page in the other locale.
 *
 * Because slugs are written in the language of the page, this cannot be a
 * prefix swap — `/services/lavage-de-garage` has to resolve to
 * `/en/services/parking-garage-cleaning`. Anything unrecognised falls back to
 * the other locale’s home page rather than 404ing, so hreflang always has a
 * valid reciprocal target.
 */
export function resolveAltPath(pathname: string): string {
	const normalized =
		pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
	const locale = localeFromPath(normalized);
	const other: Locale = locale === 'fr' ? 'en' : 'fr';

	for (const key of Object.keys(routes) as RouteKey[]) {
		if (routes[key][locale] === normalized) return routes[key][other];
	}

	const servicePrefix = `${routes.services[locale]}/`;
	if (normalized.startsWith(servicePrefix)) {
		const slug = normalized.slice(servicePrefix.length);
		const service = getRawBySlug(slug, locale);
		if (service) return servicePath(other, service[other].slug);
	}

	const blogPrefix = `${routes.blog[locale]}/`;
	if (normalized.startsWith(blogPrefix)) {
		const slug = normalized.slice(blogPrefix.length);
		const post = getRawPostBySlug(slug, locale);
		if (post) return `${routes.blog[other]}/${post[other].slug}`;
	}

	return routes.home[other];
}
