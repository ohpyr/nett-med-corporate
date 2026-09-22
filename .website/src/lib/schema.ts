import { business, SITE_URL } from './config';
import type { LocalizedService } from './content';
import { htmlLang, type Locale } from './i18n';

/**
 * JSON-LD builders.
 *
 * Deliberately absent: AggregateRating. The review profile is three positive
 * and two negative, which marks up to roughly 3.4 stars — rendering that in a
 * SERP costs more clicks than showing no stars at all. See
 * docs/seo/SEO-STRATEGY.md before adding it back.
 */

const BUSINESS_ID = `${SITE_URL}/#business`;

export function localBusinessSchema(locale: Locale) {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': BUSINESS_ID,
		// schema.org has no CleaningService type; this is the conventional way
		// to state the specialization without inventing a type.
		additionalType: 'http://www.productontology.org/id/Commercial_cleaning',
		name: business.name,
		alternateName: business.shortName,
		url: locale === 'fr' ? SITE_URL : `${SITE_URL}/en`,
		telephone: business.phoneHref,
		...(business.emailLive ? { email: business.email } : {}),
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.address.street,
			addressLocality: business.address.locality,
			addressRegion: business.address.region,
			postalCode: business.address.postalCode,
			addressCountry: business.address.country
		},
		// Omitted while coordinates are unverified — wrong geo places the
		// business in the wrong borough in Maps, which is worse than none.
		...(business.geo
			? {
					geo: {
						'@type': 'GeoCoordinates',
						latitude: business.geo.lat,
						longitude: business.geo.lng
					}
				}
			: {}),
		// Municipalities, not a province: Google’s June 2025 SAB guidelines
		// disallow whole provinces as a service area.
		areaServed: business.areaServed.map((name) => ({ '@type': 'City', name })),
		openingHours: business.openingHours,
		// Structured form as well: Google reads this one, and "open at time of
		// search" is now a top-5 local ranking factor.
		openingHoursSpecification: business.hours.map((block) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: block.days,
			opens: block.opens,
			closes: block.closes
		})),
		// A listing with an image attached is far more likely to be shown with
		// one in local results.
		image: `${SITE_URL}/og-${locale}.png`,
		logo: `${SITE_URL}/icon-192.png`,
		// Only emitted once real URLs exist — a broken sameAs is worse than none.
		...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
		...(business.mapUrl ? { hasMap: business.mapUrl } : {}),
		currenciesAccepted: 'CAD',
		paymentAccepted: 'Cash, Cheque, Interac, Credit Card',
		priceRange: '$$',
		inLanguage: htmlLang[locale]
	};
}

export function webSiteSchema(locale: Locale) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		url: SITE_URL,
		name: business.name,
		inLanguage: htmlLang[locale],
		publisher: { '@id': BUSINESS_ID }
	};
}

export function serviceSchema(service: LocalizedService, canonical: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: service.h1,
		description: service.metaDescription,
		serviceType: service.navLabel,
		url: canonical,
		provider: { '@id': BUSINESS_ID },
		areaServed: business.areaServed.map((name) => ({ '@type': 'City', name })),
		// The included list is a genuine offer catalogue, so it belongs here
		// rather than being flattened into the description.
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: service.h1,
			itemListElement: service.included.map((item) => ({
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: item.label, description: item.detail }
			}))
		}
	};
}

export function faqSchema(faqs: { q: string; a: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: { '@type': 'Answer', text: faq.a }
		}))
	};
}

/**
 * Article markup.
 *
 * `author` and `publisher` both point at the business rather than a named
 * person: these are company guidance, not bylined journalism, and inventing an
 * author would be a false E-E-A-T signal. Give them a real named author with
 * credentials when there is one.
 */
export function articleSchema(
	post: { title: string; metaDescription: string; published: string },
	canonical: string,
	locale: Locale
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		description: post.metaDescription,
		datePublished: post.published,
		dateModified: post.published,
		inLanguage: htmlLang[locale],
		mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
		image: `${SITE_URL}/og-${locale}.png`,
		author: { '@id': BUSINESS_ID },
		publisher: { '@id': BUSINESS_ID }
	};
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: `${SITE_URL}${item.url}`
		}))
	};
}
