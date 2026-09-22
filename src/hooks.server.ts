import { htmlLang } from '$lib/i18n';
import { localeFromPath } from '$lib/routing';
import type { Handle } from '@sveltejs/kit';

/**
 * Fill the %lang% placeholder in app.html.
 *
 * <html lang> has to be correct per page, not per site: a French page served
 * as lang="en" gets read by screen readers with the wrong pronunciation rules
 * and muddies the language signal for search engines on a bilingual domain.
 */
export const handle: Handle = async ({ event, resolve }) => {
	const lang = htmlLang[localeFromPath(event.url.pathname)];

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
