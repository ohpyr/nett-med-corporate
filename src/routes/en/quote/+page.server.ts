import { createQuoteAction } from '$lib/server/quote-action';

export const prerender = false;

export const actions = createQuoteAction('en');
