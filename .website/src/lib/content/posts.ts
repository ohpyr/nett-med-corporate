import type { Locale } from '$lib/i18n';

/**
 * Articles.
 *
 * Written for the buyer of a building contract — a syndicate director or a
 * property manager — not for a search engine. Each one answers a question that
 * buyer genuinely asks before signing, which is also why they are worth
 * ranking for.
 *
 * Content is a typed block list rather than markdown: it keeps a markdown
 * dependency out of the bundle, and it means a post cannot introduce markup
 * the editorial styles do not already handle.
 */

export type Block =
	| { type: 'p'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'list'; items: string[] }
	| { type: 'quote'; text: string; cite: string }
	| { type: 'note'; text: string };

export interface PostCopy {
	slug: string;
	title: string;
	metaTitle: string;
	metaDescription: string;
	/** One or two sentences for the index and for the article lede. */
	excerpt: string;
	blocks: Block[];
}

export interface Post {
	id: string;
	/** ISO date. Drives ordering and `datePublished`. */
	published: string;
	/** Rough read time in minutes, shown on the index. */
	minutes: number;
	/** Service pages this article should funnel toward. */
	related: string[];
	fr: PostCopy;
	en: PostCopy;
}

export const posts: Post[] = [
	{
		id: 'obligations-syndicat',
		published: '2026-09-22',
		minutes: 5,
		related: ['immeubles', 'garage', 'commercial'],
		fr: {
			slug: 'obligations-syndicat-entretien-parties-communes',
			title: 'Entretien des parties communes : ce que la loi demande au syndicat',
			metaTitle: 'Obligations du syndicat : parties communes | Nett-Med',
			metaDescription:
				'Ce que le Code civil du Québec impose au syndicat de copropriété pour l’entretien des parties communes, et comment un contrat documenté y répond.',
			excerpt:
				'L’entretien des parties communes n’est pas une dépense discrétionnaire que le syndicat peut reporter à volonté : c’est l’objet même pour lequel il existe.',
			blocks: [
				{
					type: 'h2',
					text: 'Ce que dit le Code civil'
				},
				{
					type: 'p',
					text: 'La question revient à chaque assemblée : peut-on réduire ou suspendre le contrat d’entretien pour équilibrer le budget ? La réponse commence par l’article 1039 du Code civil du Québec, qui définit la raison d’être du syndicat.'
				},
				{
					type: 'quote',
					text: 'La collectivité des copropriétaires constitue […] une personne morale qui a pour objet la conservation de l’immeuble, l’entretien et l’administration des parties communes, la sauvegarde des droits afférents à l’immeuble ou à la copropriété, ainsi que toutes les opérations d’intérêt commun.',
					cite: 'Code civil du Québec, article 1039'
				},
				{
					type: 'p',
					text: 'L’entretien des parties communes n’y figure pas comme une possibilité parmi d’autres. C’est, avec la conservation de l’immeuble, l’objet pour lequel le syndicat existe. Un syndicat qui cesse d’entretenir les parties communes ne fait pas une économie : il cesse d’accomplir sa fonction.'
				},
				{
					type: 'h2',
					text: 'Ce que cela couvre concrètement'
				},
				{
					type: 'p',
					text: 'Les parties communes sont définies dans votre déclaration de copropriété, et leur périmètre varie d’un immeuble à l’autre. Dans la plupart des immeubles montréalais, elles comprennent :'
				},
				{
					type: 'list',
					items: [
						'Le hall d’entrée, les corridors et les cages d’escalier',
						'Les ascenseurs, y compris les rails de porte',
						'Le garage intérieur et les aires de stationnement communes',
						'Les locaux à déchets et les chutes',
						'La salle de lavage, le gymnase et les autres commodités partagées',
						'Les entrées extérieures et le pourtour immédiat de l’immeuble'
					]
				},
				{
					type: 'p',
					text: 'Certains éléments relèvent des parties communes à usage restreint — un balcon, une terrasse — et la déclaration précise alors qui en assume l’entretien. C’est le premier document à consulter avant de découper un contrat.'
				},
				{
					type: 'h2',
					text: 'Pourquoi le report coûte plus cher que l’entretien'
				},
				{
					type: 'p',
					text: 'Deux exemples que l’on voit tous les printemps à Montréal. Le calcium épandu tout l’hiver et rapporté dans le garage par les véhicules attaque la dalle de béton et l’armature en dessous ; un lavage annuel coûte une fraction d’une réparation de dalle. Et un plancher de hall dont la cire n’a pas été refaite depuis des années finit par se décaper jusqu’au revêtement nu, qu’il faut alors remplacer plutôt que raviver.'
				},
				{
					type: 'p',
					text: 'Il y a aussi l’effet sur la valeur. Un hall taché et une cage d’escalier négligée sont la première chose qu’un acheteur potentiel remarque en visite, bien avant d’ouvrir la porte d’une unité. L’entretien des parties communes est l’un des rares postes budgétaires dont le rendement se voit directement au prix de revente.'
				},
				{
					type: 'h2',
					text: 'Comment démontrer que l’obligation est remplie'
				},
				{
					type: 'p',
					text: 'Un administrateur de syndicat a intérêt à pouvoir montrer, pièces à l’appui, que l’entretien a bien eu lieu. Trois documents suffisent dans la quasi-totalité des cas :'
				},
				{
					type: 'list',
					items: [
						'Un devis écrit qui précise les tâches, leur fréquence et ce qui n’est pas inclus',
						'Un calendrier des visites, affiché et connu des résidents',
						'Un rapport après chaque passage, avec un sommaire mensuel déposé au registre'
					]
				},
				{
					type: 'p',
					text: 'Le rapport de visite a un second usage, souvent plus utile que le premier : il signale ce qui relève d’un autre corps de métier. Une fuite naissante, une ampoule grillée dans une cage d’escalier, une porte coupe-feu qui ne ferme plus correctement. L’équipe d’entretien passe dans toutes les parties communes chaque semaine ; c’est le meilleur système de détection précoce dont dispose un syndicat, à condition que ce qu’elle voit soit consigné.'
				},
				{
					type: 'h2',
					text: 'Ce qu’il faut vérifier avant de signer'
				},
				{
					type: 'list',
					items: [
						'L’assurance responsabilité civile de l’entreprise, et son montant',
						'L’attestation de la CNESST — sans elle, le syndicat s’expose en cas d’accident sur les lieux',
						'La stabilité de l’équipe affectée à l’immeuble, qui prédit mieux la qualité que n’importe quel argumentaire',
						'La gestion des clés et des fobs : numérotés, remis à une seule personne responsable, retournés à la fin du contrat',
						'Ce qui est exclu, écrit noir sur blanc plutôt que sous-entendu'
					]
				},
				{
					type: 'note',
					text: 'Ce texte donne de l’information générale sur les obligations d’entretien et ne constitue pas un avis juridique. Pour une question précise touchant votre déclaration de copropriété, consultez un avocat ou un notaire spécialisé en droit de la copropriété.'
				}
			]
		},
		en: {
			slug: 'condo-syndicate-common-area-obligations',
			title: 'Common area maintenance: what the law asks of a syndicate',
			metaTitle: 'Syndicate Duties: Common Areas | Nett-Med',
			metaDescription:
				'What the Civil Code of Québec requires of a condominium syndicate for common area maintenance, and how a documented contract satisfies it.',
			excerpt:
				'Common area maintenance is not a discretionary line the syndicate can defer at will — it is the very purpose the syndicate exists for.',
			blocks: [
				{ type: 'h2', text: 'What the Civil Code says' },
				{
					type: 'p',
					text: 'The question comes up at every meeting: can the maintenance contract be trimmed or paused to balance the budget? The answer starts with article 1039 of the Civil Code of Québec, which defines why a syndicate exists at all.'
				},
				{
					type: 'quote',
					text: 'The collective of the co-owners constitutes […] a legal person, the objects of which are to preserve the immovable, to maintain and manage the common portions, to protect the rights appurtenant to the immovable or the co-ownership, as well as to take all measures of common interest.',
					cite: 'Civil Code of Québec, article 1039'
				},
				{
					type: 'p',
					text: 'Maintaining the common portions is not listed as one option among several. Alongside preserving the building, it is the object the syndicate was created to carry out. A syndicate that stops maintaining common areas is not making a saving — it has stopped doing its job.'
				},
				{ type: 'h2', text: 'What that covers in practice' },
				{
					type: 'p',
					text: 'Common portions are defined in your declaration of co-ownership, and the boundary differs between buildings. In most Montreal buildings they include:'
				},
				{
					type: 'list',
					items: [
						'The lobby, corridors and stairwells',
						'Elevators, including the door tracks',
						'The indoor garage and shared parking areas',
						'Waste rooms and chutes',
						'The laundry room, gym and other shared amenities',
						'Exterior entrances and the immediate surroundings'
					]
				},
				{
					type: 'p',
					text: 'Some elements are common portions for restricted use — a balcony, a terrace — and the declaration then states who maintains them. It is the first document to read before scoping a contract.'
				},
				{ type: 'h2', text: 'Why deferring costs more than maintaining' },
				{
					type: 'p',
					text: 'Two examples visible every spring in Montreal. Calcium spread all winter and tracked into the garage by vehicles attacks the concrete slab and the rebar beneath it; an annual wash costs a fraction of a slab repair. And a lobby floor whose finish has not been redone in years eventually wears through to bare substrate, which then has to be replaced rather than restored.'
				},
				{
					type: 'p',
					text: 'There is also the effect on value. A stained lobby and a neglected stairwell are the first things a prospective buyer notices on a visit, well before they open the door of a unit. Common area maintenance is one of the few budget lines whose return shows up directly in resale price.'
				},
				{ type: 'h2', text: 'How to show the obligation is being met' },
				{
					type: 'p',
					text: 'A syndicate director benefits from being able to show, with documents, that maintenance actually happened. Three pieces cover almost every case:'
				},
				{
					type: 'list',
					items: [
						'A written scope stating the tasks, their frequency, and what is not included',
						'A visit calendar, posted and known to residents',
						'A report after each visit, with a monthly summary filed in the register'
					]
				},
				{
					type: 'p',
					text: 'The visit report has a second use that is often more valuable than the first: it flags what belongs to another trade. A developing leak, a burnt-out bulb in a stairwell, a fire door that no longer closes properly. The cleaning crew passes through every common area weekly — it is the best early-warning system a syndicate has, provided what they see gets written down.'
				},
				{ type: 'h2', text: 'What to check before signing' },
				{
					type: 'list',
					items: [
						'The contractor’s liability insurance, and the amount',
						'CNESST registration — without it the syndicate is exposed if someone is hurt on site',
						'How stable the crew assigned to the building is, which predicts quality better than any pitch',
						'Key and fob handling: numbered, issued to one accountable person, returned at contract end',
						'What is excluded, written down rather than assumed'
					]
				},
				{
					type: 'note',
					text: 'This article is general information about maintenance obligations and is not legal advice. For a specific question about your declaration of co-ownership, consult a lawyer or notary practising in co-ownership law.'
				}
			]
		}
	},

	{
		id: 'prix-contrat-commercial',
		published: '2026-09-22',
		minutes: 4,
		related: ['commercial', 'bureaux', 'immeubles'],
		fr: {
			slug: 'prix-contrat-entretien-menager-commercial-montreal',
			title: 'Ce qui détermine le prix d’un contrat d’entretien ménager commercial',
			metaTitle: 'Prix d’un contrat d’entretien commercial | Nett-Med',
			metaDescription:
				'Les facteurs qui font vraiment varier le prix d’un contrat d’entretien ménager commercial à Montréal, et comment comparer deux soumissions.',
			excerpt:
				'Personne ne peut vous donner un prix au téléphone sans avoir vu les lieux. Voici ce qu’un estimateur regarde réellement, et comment comparer deux soumissions qui ne se ressemblent pas.',
			blocks: [
				{ type: 'h2', text: 'Pourquoi le prix au pied carré ne veut à peu près rien dire' },
				{
					type: 'p',
					text: 'C’est la première question posée, et la moins utile. Un plateau de 4 000 pi² à aire ouverte avec 30 employés se nettoie plus vite qu’un même 4 000 pi² divisé en 20 bureaux fermés : chaque cloison ajoute des surfaces, des coins et des poignées. Deux immeubles de superficie identique peuvent demander le double de temps l’un par rapport à l’autre.'
				},
				{ type: 'h2', text: 'Ce qui fait vraiment varier le temps' },
				{
					type: 'list',
					items: [
						'La fragmentation des espaces, bien plus que la superficie brute',
						'Le nombre de salles de bain — le poste le plus exigeant en temps par mètre carré',
						'La proportion de tapis par rapport aux surfaces dures',
						'La fréquence : cinq soirs par semaine coûte moins cher par visite qu’un passage hebdomadaire',
						'L’heure d’intervention, les mandats de nuit se payant davantage',
						'L’accès : un immeuble sans stationnement pour l’équipe ajoute du temps facturable à chaque visite'
					]
				},
				{ type: 'h2', text: 'Décider la fréquence tâche par tâche' },
				{
					type: 'p',
					text: 'C’est le levier le plus efficace et le moins utilisé. Les sanitaires et la cuisinette demandent souvent un passage quotidien, alors que le dépoussiérage des postes de travail peut se faire deux fois par semaine sans que personne ne le remarque. Un devis qui applique la même fréquence à toutes les tâches laisse presque toujours de l’argent sur la table.'
				},
				{ type: 'h2', text: 'Comparer deux soumissions' },
				{
					type: 'p',
					text: 'Deux prix ne sont comparables que si les devis le sont. Avant de regarder le montant :'
				},
				{
					type: 'list',
					items: [
						'Vérifiez que les deux couvrent les mêmes pièces, à la même fréquence',
						'Cherchez ce qui est exclu — vitres, tapis, décapage des planchers sont souvent hors contrat',
						'Demandez si les produits, les autolaveuses et le papier sont inclus ou facturés en sus',
						'Confirmez l’assurance responsabilité et l’attestation CNESST, avant le prix',
						'Demandez qui sera affecté à votre bâtiment, et si l’équipe change chaque semaine'
					]
				},
				{
					type: 'p',
					text: 'Une soumission nettement plus basse que les autres s’explique presque toujours : un poste retiré, une fréquence réduite, du papier facturé à part, ou une main-d’œuvre payée d’une façon qui finira par poser problème au donneur d’ouvrage.'
				},
				{ type: 'h2', text: 'Les rabais de contrat annuel' },
				{
					type: 'p',
					text: 'La norme du marché montréalais se situe autour de 15 à 20 % d’écart entre un mandat ponctuel et un contrat annuel, parce qu’un horaire fixe permet de planifier la main-d’œuvre. Demander ce rabais est normal ; se le voir accorder sans engagement de durée devrait au contraire éveiller les soupçons.'
				}
			]
		},
		en: {
			slug: 'commercial-cleaning-contract-pricing-montreal',
			title: 'What actually determines the price of a commercial cleaning contract',
			metaTitle: 'Commercial Cleaning Contract Pricing | Nett-Med',
			metaDescription:
				'The factors that genuinely move the price of a commercial cleaning contract in Montreal, and how to compare two quotes that are not alike.',
			excerpt:
				'Nobody can give you a price over the phone without seeing the space. Here is what an estimator actually looks at, and how to compare two quotes that are not alike.',
			blocks: [
				{ type: 'h2', text: 'Why price per square foot means very little' },
				{
					type: 'p',
					text: 'It is the first question asked and the least useful. A 4,000 sq ft open floor with 30 staff cleans faster than the same 4,000 sq ft split into 20 private offices: every partition adds surfaces, corners and handles. Two buildings of identical area can take twice the time of one another.'
				},
				{ type: 'h2', text: 'What actually moves the hours' },
				{
					type: 'list',
					items: [
						'How fragmented the space is, far more than gross area',
						'The number of washrooms — the most time-intensive area per square metre',
						'The ratio of carpet to hard surfaces',
						'Frequency: five evenings a week costs less per visit than weekly service',
						'Time of service, with overnight work carrying a premium',
						'Access: a building with no parking for the crew adds billable time every visit'
					]
				},
				{ type: 'h2', text: 'Set frequency task by task' },
				{
					type: 'p',
					text: 'This is the most effective lever and the least used. Washrooms and the kitchenette often need daily attention, while desk dusting can happen twice a week without anyone noticing. A quote that applies one frequency to every task almost always leaves money on the table.'
				},
				{ type: 'h2', text: 'Comparing two quotes' },
				{
					type: 'p',
					text: 'Two prices are only comparable if the scopes are. Before looking at the number:'
				},
				{
					type: 'list',
					items: [
						'Check that both cover the same rooms at the same frequency',
						'Look for exclusions — glass, carpet and floor stripping are often outside the contract',
						'Ask whether products, auto-scrubbers and paper supplies are included or billed on top',
						'Confirm liability insurance and CNESST registration before price',
						'Ask who will be assigned to your building, and whether the crew changes weekly'
					]
				},
				{
					type: 'p',
					text: 'A quote well below the others almost always has an explanation: a line removed, a frequency reduced, paper billed separately, or labour paid in a way that eventually becomes the client’s problem.'
				},
				{ type: 'h2', text: 'Annual contract discounts' },
				{
					type: 'p',
					text: 'The Montreal market norm sits around 15 to 20% between one-time work and an annual contract, because a fixed schedule lets a contractor plan labour. Asking for that discount is normal; being granted it with no commitment on term should raise questions instead.'
				}
			]
		}
	}
];

const bySlug: Record<Locale, Map<string, Post>> = {
	fr: new Map(posts.map((p) => [p.fr.slug, p])),
	en: new Map(posts.map((p) => [p.en.slug, p]))
};

export type LocalizedPost = PostCopy & {
	id: string;
	published: string;
	minutes: number;
	related: string[];
};

export function localizePost(post: Post, locale: Locale): LocalizedPost {
	return {
		...post[locale],
		id: post.id,
		published: post.published,
		minutes: post.minutes,
		related: post.related
	};
}

/** Newest first. */
export function allPosts(locale: Locale): LocalizedPost[] {
	return [...posts]
		.sort((a, b) => b.published.localeCompare(a.published))
		.map((p) => localizePost(p, locale));
}

export function getPostBySlug(slug: string, locale: Locale): LocalizedPost | undefined {
	const post = bySlug[locale].get(slug);
	return post ? localizePost(post, locale) : undefined;
}

export function getRawPostBySlug(slug: string, locale: Locale): Post | undefined {
	return bySlug[locale].get(slug);
}
