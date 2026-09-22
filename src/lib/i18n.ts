/**
 * Bilingual routing and UI strings.
 *
 * French is the default locale and lives at the root; English is prefixed with
 * /en. Slugs are written in the language of the page rather than shared across
 * locales, because the slug itself carries ranking weight — an English page on
 * a French URL competes for the wrong terms. That means every route needs an
 * explicit pair here rather than a single key with a runtime prefix.
 */

export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

/** BCP 47 tags for <html lang>, hreflang, and Open Graph. */
export const htmlLang: Record<Locale, string> = {
	fr: 'fr-CA',
	en: 'en-CA'
};

export type RouteKey = 'home' | 'services' | 'about' | 'work' | 'blog' | 'contact' | 'quote';

export const routes: Record<RouteKey, Record<Locale, string>> = {
	home: { fr: '/', en: '/en' },
	services: { fr: '/services', en: '/en/services' },
	about: { fr: '/a-propos', en: '/en/about' },
	work: { fr: '/realisations', en: '/en/our-work' },
	blog: { fr: '/blogue', en: '/en/blog' },
	contact: { fr: '/contact', en: '/en/contact' },
	quote: { fr: '/soumission', en: '/en/quote' }
};

/** Base path for a locale’s service pages, used to build service URLs. */
export function servicePath(locale: Locale, slug: string): string {
	return `${routes.services[locale]}/${slug}`;
}

export const t = {
	fr: {
		skipToContent: 'Aller au contenu principal',
		nav: {
			services: 'Services',
			commercial: 'Commercial',
			residential: 'Résidentiel',
			about: 'À propos',
			work: 'Réalisations',
			blog: 'Conseils',
			contact: 'Contact',
			menu: 'Menu',
			close: 'Fermer'
		},
		cta: {
			quote: 'Demander une soumission',
			quoteShort: 'Soumission gratuite',
			call: 'Appeler',
			callUs: 'Appelez-nous',
			viewService: 'Voir le service',
			allServices: 'Tous les services'
		},
		sections: {
			whatWeDo: 'Ce que nous faisons',
			included: 'Ce qui est inclus',
			contract: 'Contrat régulier ou intervention ponctuelle',
			pricing: 'Ce qui détermine le prix',
			faq: 'Questions fréquentes',
			related: 'Services liés',
			commercialServices: 'Services commerciaux',
			residentialServices: 'Services résidentiels',
			specializedServices: 'Services spécialisés'
		},
		form: {
			required: 'obligatoire',
			optional: 'facultatif',
			sending: 'Envoi en cours…',
			submit: 'Envoyer la demande',
			successTitle: 'Demande reçue.',
			successBody:
				'Nous vous rappelons au cours du prochain jour ouvrable pour fixer la visite. Si c’est urgent, appelez-nous directement.',
			errors: {
				name: 'Veuillez indiquer votre nom.',
				contact:
					'Laissez au moins un numéro de téléphone ou un courriel, sinon nous ne pourrons pas vous répondre.',
				phone: 'Ce numéro de téléphone semble incomplet.',
				email: 'Cette adresse courriel semble invalide.',
				rate: 'Trop de demandes envoyées coup sur coup. Patientez quelques minutes, ou appelez-nous.',
				generic:
					'La demande n’a pas pu être enregistrée. Appelez-nous et nous la prendrons par téléphone.'
			}
		},
		labels: {
			serviceArea: 'Territoire desservi',
			phone: 'Téléphone',
			email: 'Courriel',
			translatedFrom: 'Traduit de l’anglais',
			address: 'Adresse',
			hours: 'Heures',
			hoursValue: 'Lun–Sam, 7 h à 19 h',
			langSwitch: 'English',
			langSwitchLabel: 'Passer à la version anglaise',
			breadcrumbHome: 'Accueil',
			readTime: 'min de lecture',
			published: 'Publié le',
			backToBlog: 'Tous les conseils',
			relatedServices: 'Services liés'
		},
		footer: {
			tagline: 'Entretien ménager commercial et résidentiel à Montréal, Rive-Sud et Rive-Nord.',
			rights: 'Tous droits réservés.'
		}
	},
	en: {
		skipToContent: 'Skip to main content',
		nav: {
			services: 'Services',
			commercial: 'Commercial',
			residential: 'Residential',
			about: 'About',
			work: 'Our work',
			blog: 'Advice',
			contact: 'Contact',
			menu: 'Menu',
			close: 'Close'
		},
		cta: {
			quote: 'Request a quote',
			quoteShort: 'Free quote',
			call: 'Call',
			callUs: 'Call us',
			viewService: 'View service',
			allServices: 'All services'
		},
		sections: {
			whatWeDo: 'What we do',
			included: "What’s included",
			contract: 'Ongoing contract or one-time service',
			pricing: 'What determines the price',
			faq: 'Frequently asked questions',
			related: 'Related services',
			commercialServices: 'Commercial services',
			residentialServices: 'Residential services',
			specializedServices: 'Specialized services'
		},
		form: {
			required: 'required',
			optional: 'optional',
			sending: 'Sending…',
			submit: 'Send request',
			successTitle: 'Request received.',
			successBody:
				'We will call you back within one business day to book the visit. If it is urgent, call us directly.',
			errors: {
				name: 'Please tell us your name.',
				contact: 'Leave at least a phone number or an email, otherwise we cannot reply.',
				phone: 'That phone number looks incomplete.',
				email: 'That email address looks invalid.',
				rate: 'Too many requests sent in a row. Wait a few minutes, or call us.',
				generic: 'We could not save your request. Call us and we will take it over the phone.'
			}
		},
		labels: {
			serviceArea: 'Service area',
			phone: 'Phone',
			email: 'Email',
			translatedFrom: 'Translated from French',
			address: 'Address',
			hours: 'Hours',
			hoursValue: 'Mon–Sat, 7 a.m. to 7 p.m.',
			langSwitch: 'Français',
			langSwitchLabel: 'Switch to the French version',
			breadcrumbHome: 'Home',
			readTime: 'min read',
			published: 'Published',
			backToBlog: 'All advice',
			relatedServices: 'Related services'
		},
		footer: {
			tagline: 'Commercial and residential cleaning in Montreal, the South Shore and the North Shore.',
			rights: 'All rights reserved.'
		}
	}
} as const;

/** Narrow a string to a Locale, falling back to French. */
export function toLocale(value: string | undefined): Locale {
	return value === 'en' ? 'en' : 'fr';
}

/** The other locale — for the language switcher. */
export function otherLocale(locale: Locale): Locale {
	return locale === 'fr' ? 'en' : 'fr';
}
