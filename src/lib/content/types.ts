import type { Locale } from '$lib/i18n';

export interface FAQ {
	q: string;
	a: string;
}

/**
 * One line of the "what’s included" list.
 *
 * Split into label + detail so the page can render an editorial two-column
 * list instead of bare bullets. The detail column is where specificity lives —
 * naming the actual surface, product, or frequency — which is what separates
 * these pages from competitors writing "professional and meticulous".
 */
export interface IncludedItem {
	label: string;
	detail: string;
}

export interface ServiceCopy {
	/** URL slug, in the language of this copy. */
	slug: string;
	h1: string;
	/** ≤60 characters. */
	metaTitle: string;
	/** ≤155 characters. */
	metaDescription: string;
	/** Short label for navigation and related-service lists. */
	navLabel: string;
	/** Two or three sentences stating scope concretely. Renders as the lede. */
	lede: string;
	/** Optional second paragraph: context, differentiation, or buyer motive. */
	body?: string;
	included: IncludedItem[];
	/** Paragraph framing ongoing contract vs. one-time work. */
	contract: string;
	frequencies: string[];
	/** Paragraph on cost. No fixed prices — honest drivers only. */
	pricing: string;
	priceDrivers: string[];
	faqs: FAQ[];
}

export type Pillar = 'commercial' | 'residential' | 'specialized';

export interface Service {
	/** Locale-independent identifier, used for cross-references. */
	id: string;
	/** Build and publish order. See docs/seo/SITE-STRUCTURE.md. */
	tier: 1 | 2 | 3 | 4;
	pillar: Pillar;
	/**
	 * Hub page for its pillar. Pillar pages list every child service in the
	 * pillar, so link equity flows down from one page rather than from a
	 * flat menu of nineteen.
	 */
	isPillar?: boolean;
	/** ids of two or three genuinely related services. Not a link dump. */
	related: string[];
	fr: ServiceCopy;
	en: ServiceCopy;
}

export type LocalizedService = ServiceCopy & {
	id: string;
	tier: Service['tier'];
	pillar: Pillar;
	isPillar: boolean;
	related: string[];
	locale: Locale;
};
