/**
 * Single source of truth for business facts.
 *
 * NAP (name / address / phone) must stay byte-identical here, in the footer,
 * in JSON-LD, and on the Google Business Profile. Inconsistent NAP is one of
 * the most common causes of weak local ranking, so nothing below should be
 * retyped anywhere else in the codebase — import it.
 */

export const SITE_URL = 'https://nett-med.ca';

export const business = {
	/** Legal/brand name as it appears in the logo. */
	name: 'Entretien Nett-Med',
	shortName: 'Nett-Med',

	phone: '+1 (514) 218-7341',
	/** E.164, for tel: links and schema. */
	phoneHref: '+15142187341',

	/**
	 * The address in active use. `emailLive` gates whether it appears in the UI
	 * and in JSON-LD at all, so a mailbox that is not yet accepting mail never
	 * gets published.
	 *
	 * Worth revisiting: a free webmail address reads as less established to the
	 * property managers and syndicates this site targets, and some procurement
	 * processes screen on it. Moving to info@nett-med.ca is a one-line change
	 * here once the mailbox exists.
	 */
	email: 'nett-med@hotmail.com',
	emailLive: true,

	address: {
		street: '4175 rue Jarry',
		locality: 'Montréal',
		region: 'QC',
		postalCode: 'H1Z 2H5',
		country: 'CA'
	},

	/**
	 * TODO(client): verify exact rooftop coordinates before publishing geo in
	 * schema. Wrong coordinates are worse than none — they can place the
	 * business in the wrong borough in Maps. Left null on purpose; the schema
	 * builder omits the geo property while this is null.
	 */
	geo: null as { lat: number; lng: number } | null,

	/**
	 * Google’s June 2025 service-area guidelines disallow whole provinces.
	 * These must stay as municipalities.
	 */
	areaServed: [
		'Montréal',
		'Laval',
		'Longueuil',
		'Brossard',
		'Saint-Léonard',
		'Anjou',
		'Terrebonne',
		'Repentigny',
		'Boucherville'
	],

	foundedYear: 2019,
	openingHours: 'Mo-Sa 07:00-19:00'
} as const;

/*
 * `formEndpoint` used to live here, pointing at a third-party form service,
 * because a fully static build had no server to receive a POST. The site now
 * runs on Node and the quote form posts to its own SvelteKit action, so no
 * external service is involved and nothing needs configuring for the form to
 * work. See src/lib/server/leads.ts for where submissions go.
 */

/** Years in business, computed so the copy never goes stale. */
export const yearsInBusiness = new Date().getFullYear() - business.foundedYear;

/**
 * Testimonials are the three well-written positive reviews.
 *
 * There is deliberately no aggregate rating anywhere on this site: the profile
 * currently holds three positive and two negative reviews, which marks up to
 * roughly 3.4 stars. Rendering that in a search result suppresses clicks more
 * than showing no stars at all. Revisit once the profile clears 4.3 with 20+
 * reviews — see docs/seo/SEO-STRATEGY.md.
 *
 * All three were written in French. `sourceLocale` drives a "translated from"
 * line on the English page — presenting a translation as the customer's own
 * English words would misattribute them.
 *
 * The French text is verbatim, including the grammatical slips in the second
 * one. Tidying a real review would misquote the person who wrote it.
 */
export const testimonials = [
	{
		id: 'testimonial-1',
		sourceLocale: 'fr',
		quote: {
			fr: 'Nous avons essayé d’autres services d’entretien ménager pour notre résidence, et rien n’a égalé celui-ci en terme d’efficacité, de minutie et de courtoisie! Leur service a dû être interrompu pendant quelques mois, et nous sommes ravis de leur retour.',
			en: 'We tried other housekeeping services for our residence, and nothing matched this one in terms of efficiency, thoroughness, and courtesy! Their service had to be interrupted for a few months, and we are delighted to have it back.'
		},
		author: 'Evelyne Côté',
		role: { fr: 'Client résidentiel, Montréal', en: 'Residential Client, Montreal' }
	},
	{
		id: 'testimonial-2',
		sourceLocale: 'fr',
		quote: {
			fr: 'Excellent service à clientèle et il on faite une le travaille comme j’ai demander et plus. Je recommande cette compagnie à tous les bureau où commerces.',
			en: 'Excellent customer service; they did the work exactly as I requested and more. I recommend this company to all offices and businesses.'
		},
		author: 'Daniel D’Angelo',
		role: { fr: 'Bureau, Montréal', en: 'Office, Montreal' }
	},
	{
		id: 'testimonial-3',
		sourceLocale: 'fr',
		quote: {
			fr: 'Excellente service, des professionnels et équipe de confiance.',
			en: 'Excellent service, professional and trustworthy team.'
		},
		author: 'Mondher Souiai',
		role: { fr: 'Client résidentiel, Rive-Sud', en: 'Residential client, South Shore' }
	}
] as const;
