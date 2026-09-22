import type { Locale } from '$lib/i18n';

/**
 * Copy for the non-service pages.
 *
 * Positioning rule, applied throughout: state what the business does, for
 * whom, where — in the first sentence. Every competitor in this market opens
 * with "professional, reliable, X years of experience", which is invisible
 * precisely because everyone writes it.
 */

interface HomeCopy {
	metaTitle: string;
	metaDescription: string;
	h1: string;
	lede: string;
	/** Hard facts under the hero. Concrete claims only — no adjectives. */
	facts: { value: string; label: string }[];
	commercialHeading: string;
	commercialIntro: string;
	residentialHeading: string;
	residentialIntro: string;
	angle: { heading: string; body: string[] };
	testimonialsHeading: string;
	areaHeading: string;
	areaBody: string;
}

export const home: Record<Locale, HomeCopy> = {
	fr: {
		metaTitle: 'Entretien ménager à Montréal | Entretien Nett-Med',
		metaDescription:
			'Entretien ménager commercial et résidentiel à Montréal, Rive-Sud et Rive-Nord. Immeubles, bureaux, cliniques, garderies, résidences. Soumission gratuite.',
		h1: 'Entretien ménager commercial et résidentiel à Montréal, Rive-Sud et Rive-Nord.',
		lede: "Nous entretenons des immeubles, des bureaux, des cliniques, des garderies, des commerces et des résidences. Sur contrat ou à la demande, avec la même équipe affectée à votre bâtiment d’une visite à l’autre.",
		facts: [
			{ value: '7 ans', label: "d’activité à Montréal" },
			{ value: 'Assurés', label: 'employés couverts par la CNESST' },
			{ value: 'Sans frais', label: 'visite et soumission écrite' },
			{ value: 'Soir et nuit', label: 'hors de vos heures d’ouverture' }
		],
		commercialHeading: 'Services commerciaux',
		commercialIntro:
			"C’est le cœur de notre activité. Contrats d’entretien pour immeubles, bureaux et locaux professionnels.",
		residentialHeading: 'Services résidentiels',
		residentialIntro:
			'Maisons, condos et appartements, en service récurrent ou ponctuel.',
		angle: {
			heading: 'Ce que vous achetez réellement, c’est un contrat qui tient.',
			body: [
				"La plupart des contrats d’entretien ne se perdent pas sur la qualité d’un lavage de plancher. Ils se perdent parce que l’équipe change tous les mois, que personne ne répond quand il y a un problème, et que ce qui était convenu au départ n’a jamais été écrit.",
				"Nous procédons autrement : une équipe stable affectée à votre bâtiment, un devis écrit qui précise ce qui est nettoyé et à quelle fréquence, un seul interlocuteur joignable directement, et un correctif appliqué le jour ouvrable suivant si quelque chose est manqué."
			]
		},
		testimonialsHeading: 'Ce que disent nos clients',
		areaHeading: 'Territoire desservi',
		areaBody:
			'Montréal et sa périphérie immédiate. Si votre adresse ne figure pas dans cette liste, appelez-nous : nous nous déplaçons régulièrement au-delà.'
	},
	en: {
		metaTitle: 'Cleaning Services in Montreal | Entretien Nett-Med',
		metaDescription:
			'Commercial and residential cleaning in Montreal, the South Shore and North Shore. Buildings, offices, clinics, daycares, homes. Free quote.',
		h1: 'Commercial and residential cleaning in Montreal, the South Shore and the North Shore.',
		lede: 'We maintain buildings, offices, clinics, daycares, retail spaces and homes. On contract or on demand, with the same crew assigned to your building from one visit to the next.',
		facts: [
			{ value: '7 years', label: 'operating in Montreal' },
			{ value: 'Insured', label: 'employees covered under CNESST' },
			{ value: 'Free', label: 'site visit and written quote' },
			{ value: 'Evenings', label: 'and overnight, outside your hours' }
		],
		commercialHeading: 'Commercial services',
		commercialIntro:
			'This is the core of what we do. Maintenance contracts for buildings, offices and professional spaces.',
		residentialHeading: 'Residential services',
		residentialIntro: 'Houses, condos and apartments, recurring or one-time.',
		angle: {
			heading: 'What you are actually buying is a contract that holds.',
			body: [
				'Most cleaning contracts are not lost over the quality of a floor wash. They are lost because the crew changes every month, nobody answers when there is a problem, and what was agreed at the start was never written down.',
				'We work the other way: a stable crew assigned to your building, a written scope stating what is cleaned and how often, one contact who answers directly, and anything missed corrected the next business day.'
			]
		},
		testimonialsHeading: 'What our clients say',
		areaHeading: 'Service area',
		areaBody:
			'Montreal and the immediate surrounding area. If your address is not on this list, call us — we regularly travel beyond it.'
	}
};

interface SimplePage {
	metaTitle: string;
	metaDescription: string;
	h1: string;
	lede: string;
}

export const servicesIndex: Record<Locale, SimplePage> = {
	fr: {
		metaTitle: "Nos services d’entretien ménager | Nett-Med",
		metaDescription:
			"Tous les services d’entretien ménager de Nett-Med à Montréal : commercial, résidentiel et spécialisé. Immeubles, bureaux, garages, tapis, planchers.",
		h1: 'Nos services',
		lede: "Chaque service a sa propre page, avec ce qui est inclus, les fréquences possibles et ce qui détermine le prix. Si vous ne trouvez pas ce que vous cherchez, appelez-nous : nous prenons aussi des mandats hors liste."
	},
	en: {
		metaTitle: 'Our Cleaning Services | Nett-Med',
		metaDescription:
			'All of Nett-Med’s cleaning services in Montreal: commercial, residential and specialized. Buildings, offices, garages, carpets, floors, windows.',
		h1: 'Our services',
		lede: 'Every service has its own page covering what is included, the available frequencies, and what determines the price. If you do not see what you need, call us — we take work outside this list too.'
	}
};

export const about: Record<
	Locale,
	SimplePage & { sections: { heading: string; body: string[] }[] }
> = {
	fr: {
		metaTitle: 'À propos | Entretien Nett-Med, Montréal',
		metaDescription:
			"Nett-Med est une entreprise d’entretien ménager de Montréal, en activité depuis 2019. Équipe stable, employés assurés et couverts par la CNESST.",
		h1: 'À propos de Nett-Med',
		lede: "Nett-Med est une entreprise d’entretien ménager établie à Montréal, rue Jarry, en activité depuis 2019. Nous entretenons des immeubles, des bureaux et des résidences à Montréal, sur la Rive-Sud et sur la Rive-Nord.",
		sections: [
			{
				heading: 'Comment nous travaillons',
				body: [
					"Nous affectons une équipe fixe à chaque bâtiment. C’est la décision qui a le plus d’effet sur la qualité d’un contrat d’entretien : une équipe qui revient connaît les accès, les planchers qui marquent et les particularités du lieu, et elle n’a pas à réapprendre le bâtiment chaque semaine.",
					"Le devis est écrit avant le premier passage. Il précise les tâches, leur fréquence et ce qui n’est pas inclus. Cela évite la situation la plus courante en entretien ménager : deux parties qui n’avaient pas la même idée de ce qui était convenu."
				]
			},
			{
				heading: 'Assurances et conformité',
				// TODO(client): add a second paragraph here with the actual policy
				// number and CNESST attestation once confirmed. Kept out of the
				// array on purpose — an unfinished note must never render to a
				// visitor.
				body: [
					"Nous détenons une assurance responsabilité civile et nos employés sont couverts par la CNESST. Les attestations sont fournies sur demande, avant la signature — c’est habituellement la première vérification d’un gestionnaire immobilier ou d’un syndicat, et elle est légitime."
				]
			},
			{
				heading: 'Ce que nous ne faisons pas',
				body: [
					"Nous ne faisons pas le nettoyage de hottes et de conduits de ventilation, qui exige une certification distincte. Nous ne faisons pas de travaux en hauteur sur façade. Nous ne manipulons pas les déchets biomédicaux. Dans ces cas, nous vous orientons vers une entreprise spécialisée plutôt que d’accepter le mandat."
				]
			}
		]
	},
	en: {
		metaTitle: 'About | Entretien Nett-Med, Montreal',
		metaDescription:
			'Nett-Med is a Montreal cleaning company operating since 2019. Stable crews, insured employees covered under CNESST.',
		h1: 'About Nett-Med',
		lede: 'Nett-Med is a cleaning company based on rue Jarry in Montreal, operating since 2019. We maintain buildings, offices and homes across Montreal, the South Shore and the North Shore.',
		sections: [
			{
				heading: 'How we work',
				body: [
					'We assign a fixed crew to each building. It is the single decision that most affects the quality of a maintenance contract: a returning crew knows the access points, which floors mark, and the quirks of the space, and does not have to relearn the building every week.',
					'The scope is written before the first visit. It states the tasks, their frequency, and what is not included. That avoids the most common failure in this trade — two parties who did not have the same idea of what was agreed.'
				]
			},
			{
				heading: 'Insurance and compliance',
				// TODO(client): mirror of the French note above — add the policy
				// number and CNESST attestation once confirmed.
				body: [
					'We carry liability insurance and our employees are covered under CNESST. Certificates are provided on request, before signing — it is usually the first thing a property manager or syndicate checks, and reasonably so.'
				]
			},
			{
				heading: 'What we do not do',
				body: [
					'We do not clean kitchen hoods or ventilation ducts, which require separate certification. We do not do suspended facade work. We do not handle biomedical waste. In those cases we point you to a specialist rather than take the job.'
				]
			}
		]
	}
};

export const contact: Record<Locale, SimplePage> = {
	fr: {
		metaTitle: 'Contact | Entretien Nett-Med, Montréal',
		metaDescription:
			'Joignez Nett-Med au (514) 218-7341 pour un contrat d’entretien ménager à Montréal, Rive-Sud ou Rive-Nord. Visite et soumission gratuites.',
		h1: 'Nous joindre',
		lede: "Le plus rapide reste le téléphone : nous répondons pendant les heures d’ouverture et nous pouvons souvent fixer une visite dans la même semaine."
	},
	en: {
		metaTitle: 'Contact | Entretien Nett-Med, Montreal',
		metaDescription:
			'Reach Nett-Med at (514) 218-7341 for a cleaning contract in Montreal, the South Shore or North Shore. Free site visit and quote.',
		h1: 'Contact us',
		lede: 'The phone is fastest: we answer during business hours and can usually book a site visit the same week.'
	}
};

export const quote: Record<Locale, SimplePage> = {
	fr: {
		metaTitle: 'Demander une soumission | Nett-Med',
		metaDescription:
			"Demandez une soumission gratuite pour l’entretien de votre immeuble, bureau ou résidence à Montréal. Visite sur place et prix ferme par écrit.",
		h1: 'Demander une soumission',
		lede: "Nous visitons les lieux, nous mesurons et nous vous remettons un prix ferme par écrit. La visite est gratuite et sans engagement. Décrivez-nous votre besoin et nous vous rappelons pour fixer un rendez-vous."
	},
	en: {
		metaTitle: 'Request a Quote | Nett-Med',
		metaDescription:
			'Request a free quote for cleaning your building, office or home in Montreal. On-site visit and a firm written price.',
		h1: 'Request a quote',
		lede: 'We visit the site, take measurements, and give you a firm price in writing. The visit is free and carries no obligation. Tell us what you need and we will call to book a time.'
	}
};

export const work: Record<Locale, SimplePage> = {
	fr: {
		metaTitle: 'Réalisations | Entretien Nett-Med',
		metaDescription:
			'Photos de chantiers réalisés par Nett-Med à Montréal : immeubles, bureaux, garages et nettoyages après construction.',
		h1: 'Réalisations',
		lede: 'Quelques chantiers récents, photographiés sur place. Nous ajoutons de nouveaux projets à mesure que les mandats se terminent.'
	},
	en: {
		metaTitle: 'Our Work | Entretien Nett-Med',
		metaDescription:
			'Photos of jobs completed by Nett-Med in Montreal: buildings, offices, garages and post-construction cleaning.',
		h1: 'Our work',
		lede: 'A few recent jobs, photographed on site. We add new projects as contracts wrap up.'
	}
};

export const blogIndex: Record<Locale, SimplePage> = {
	fr: {
		metaTitle: 'Conseils en entretien ménager commercial | Nett-Med',
		metaDescription:
			'Articles pratiques pour les syndicats de copropriété et les gestionnaires immobiliers : obligations d’entretien et prix des contrats à Montréal.',
		h1: 'Conseils',
		lede: 'Des réponses aux questions que se posent les syndicats de copropriété et les gestionnaires immobiliers avant de signer un contrat d’entretien. Pas de billets de blogue pour meubler — uniquement ce qui sert à décider.'
	},
	en: {
		metaTitle: 'Commercial Cleaning Advice | Nett-Med',
		metaDescription:
			'Practical articles for condominium syndicates and property managers: maintenance obligations, contract pricing, scheduling work.',
		h1: 'Advice',
		lede: 'Answers to the questions condominium syndicates and property managers ask before signing a maintenance contract. No filler posts — only what helps you decide.'
	}
};
