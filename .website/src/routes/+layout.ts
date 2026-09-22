import { localeFromPath, resolveAltPath } from '$lib/routing';
import type { LayoutLoad } from './$types';

/* Static marketing site: prerender everything so pages ship as HTML with no
   runtime work, which is what keeps LCP low on mobile. */
export const prerender = true;
export const trailingSlash = 'never';

export const load: LayoutLoad = ({ url }) => {
	return {
		locale: localeFromPath(url.pathname),
		path: url.pathname,
		altPath: resolveAltPath(url.pathname)
	};
};
