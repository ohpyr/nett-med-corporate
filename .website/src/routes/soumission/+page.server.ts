import { createQuoteAction } from '$lib/server/quote-action';

/* A page with actions cannot be prerendered. Everything else on the site
   still is; these two routes are server-rendered so the form has somewhere
   to POST. */
export const prerender = false;

export const actions = createQuoteAction('fr');
