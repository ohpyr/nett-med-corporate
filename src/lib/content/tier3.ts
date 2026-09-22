import type { Service } from './types';

/**
 * Tier 3 — remaining commercial verticals and the residential pillar.
 * Tier 4 — painting. Recently added and not a focus, so it gets one page,
 * reachable mainly from post-construction rather than from the main nav.
 */
export const tier3: Service[] = [
	{
		id: 'restaurants',
		tier: 3,
		pillar: 'commercial',
		related: ['commercial', 'planchers', 'vitres'],
		fr: {
			slug: 'nettoyage-de-restaurants',
			h1: 'Nettoyage de restaurants à Montréal',
			metaTitle: 'Nettoyage de restaurant Montréal | Nett-Med',
			metaDescription:
				'Entretien de restaurants, cafés et bars à Montréal. Salle à manger, sanitaires, planchers de cuisine et dégraissage. Service de nuit.',
			navLabel: 'Restaurants',
			lede: "Nous entretenons la salle à manger, les sanitaires et les planchers de restaurants, cafés et bars à Montréal, après la fermeture. Le travail se termine avant l’arrivée de la brigade du matin.",
			body: "Dans un restaurant, le plancher de cuisine est le vrai enjeu. La graisse qui s’accumule dans les joints de céramique et sous l’équipement crée un risque de glissade et attire la vermine. Nous dégraissons au produit alcalin et brossons les joints, ce qu’un lavage à la vadrouille ne fait pas.",
			included: [
				{ label: 'Salle à manger', detail: 'Planchers, tables, banquettes, appuis de fenêtre et luminaires bas.' },
				{ label: 'Planchers de cuisine', detail: 'Dégraissage alcalin, brossage des joints, pourtour et dessous des équipements mobiles.' },
				{ label: 'Sanitaires', detail: 'Désinfection complète et réapprovisionnement, souvent deux fois par jour en période achalandée.' },
				{ label: 'Entrée et vitrine', detail: 'Vitres, poignées, tapis d’entrée et pourtour immédiat.' }
			],
			contract: "La restauration fonctionne presque toujours en contrat quotidien, de nuit. L’entretien courant de la cuisine reste sous la responsabilité de votre brigade; nous intervenons sur les planchers, les surfaces communes et le dégraissage périodique.",
			frequencies: ['Six ou sept nuits par semaine', 'Dégraissage périodique des planchers de cuisine', 'Grand ménage avant inspection'],
			pricing: "Le nombre de couverts et les heures d’ouverture prédisent mieux la charge de travail que la superficie. Un établissement ouvert jusqu’à 3 h laisse une salle dans un tout autre état qu’un café fermé à 17 h.",
			priceDrivers: ['Le nombre de places assises', 'Les heures et jours d’ouverture', 'La superficie de la cuisine', 'La fréquence du dégraissage', 'Le nombre de sanitaires'],
			faqs: [
				{ q: 'Nettoyez-vous les hottes et les conduits ?', a: "Non. Le nettoyage des hottes et des conduits de ventilation exige une certification distincte et un rapport d’assurance. Nous nettoyons l’extérieur de la hotte et les surfaces autour." },
				{ q: 'Intervenez-vous après la fermeture ?', a: "Oui, c’est la norme. Nous entrons après le départ du personnel et terminons avant l’arrivée du matin." },
				{ q: 'Pouvez-vous préparer une inspection du MAPAQ ?', a: "Nous pouvons effectuer un grand ménage ciblé sur les planchers, les joints et les surfaces communes. La conformité des équipements et des procédures relève de votre exploitation." }
			]
		},
		en: {
			slug: 'restaurant-cleaning',
			h1: 'Restaurant cleaning in Montreal',
			metaTitle: 'Restaurant Cleaning Montreal | Nett-Med',
			metaDescription:
				'Cleaning for restaurants, cafés and bars in Montreal. Dining room, washrooms, kitchen floors and degreasing. Overnight service.',
			navLabel: 'Restaurants',
			lede: 'We maintain the dining room, washrooms and floors of restaurants, cafés and bars across Montreal, after closing. The work is finished before the morning brigade arrives.',
			body: 'In a restaurant the kitchen floor is the real issue. Grease building up in tile grout and under equipment creates a slip hazard and attracts pests. We degrease with an alkaline product and brush the grout, which mopping does not do.',
			included: [
				{ label: 'Dining room', detail: 'Floors, tables, banquettes, window ledges and low fixtures.' },
				{ label: 'Kitchen floors', detail: 'Alkaline degreasing, grout brushing, around and under movable equipment.' },
				{ label: 'Washrooms', detail: 'Full disinfection and restocking, often twice daily in busy periods.' },
				{ label: 'Entrance and storefront', detail: 'Glass, handles, entry matting and the immediate surroundings.' }
			],
			contract: 'Food service almost always runs a nightly contract. Routine kitchen upkeep stays with your brigade; we handle floors, shared surfaces and periodic degreasing.',
			frequencies: ['Six or seven nights a week', 'Periodic kitchen floor degreasing', 'Deep clean before inspection'],
			pricing: 'Seat count and operating hours predict the workload better than square footage. A room serving until 3 a.m. is left in a very different state than a café closing at 5 p.m.',
			priceDrivers: ['Number of seats', 'Operating hours and days', 'Kitchen size', 'Degreasing frequency', 'Number of washrooms'],
			faqs: [
				{ q: 'Do you clean hoods and ducts?', a: 'No. Hood and duct cleaning requires separate certification and an insurance report. We clean the hood exterior and surrounding surfaces.' },
				{ q: 'Do you work after closing?', a: 'Yes, that is the norm. We come in after staff leave and finish before the morning arrival.' },
				{ q: 'Can you prepare us for a MAPAQ inspection?', a: 'We can run a deep clean targeting floors, grout and shared surfaces. Equipment and procedural compliance stays with your operation.' }
			]
		}
	},

	{
		id: 'commerces',
		tier: 3,
		pillar: 'commercial',
		related: ['commercial', 'vitres', 'planchers'],
		fr: {
			slug: 'nettoyage-de-commerces',
			h1: 'Nettoyage de commerces et de magasins à Montréal',
			metaTitle: 'Nettoyage de commerce Montréal | Nett-Med',
			metaDescription:
				'Entretien de magasins, boutiques et locaux commerciaux à Montréal. Planchers, vitrines, cabines d’essayage, sanitaires. Avant ou après ouverture.',
			navLabel: 'Commerces et magasins',
			lede: "Nous entretenons boutiques, magasins et locaux commerciaux à Montréal, avant l’ouverture ou après la fermeture. La vitrine et l’entrée sont traitées en priorité : c’est ce que le client voit avant de décider d’entrer.",
			included: [
				{ label: 'Planchers de vente', detail: 'Aspiration ou lavage selon le revêtement, incluant sous les présentoirs accessibles.' },
				{ label: 'Vitrine et entrée', detail: 'Vitres, poignées, tapis d’entrée et seuil.' },
				{ label: 'Cabines d’essayage', detail: 'Miroirs, banquettes, crochets et planchers.' },
				{ label: 'Caisse et sanitaires', detail: 'Comptoirs, terminaux, sanitaires du personnel et de la clientèle.' }
			],
			contract: "La plupart des commerces prennent un passage quotidien ou trois fois par semaine. Les commerces à fort achalandage ajoutent un lavage de vitrine aux deux semaines, distinct du contrat courant.",
			frequencies: ['Quotidien avant ouverture', 'Trois fois par semaine', 'Lavage de vitrine aux deux semaines'],
			pricing: "La superficie de plancher de vente et l’achalandage déterminent l’essentiel du prix. Le type de revêtement compte aussi : un plancher de bois huilé demande une méthode différente d’un vinyle commercial.",
			priceDrivers: ['La superficie du plancher de vente', 'L’achalandage quotidien', 'Le nombre de cabines d’essayage', 'Le type de revêtement de plancher', 'La fréquence des passages'],
			faqs: [
				{ q: 'Pouvez-vous venir avant l’ouverture ?', a: "Oui. C’est souvent préférable en commerce de détail : le plancher est frais au moment où les premiers clients entrent." },
				{ q: 'Déplacez-vous les présentoirs ?', a: 'Nous nettoyons autour et sous les présentoirs mobiles. Les gondoles fixes et les vitrines verrouillées restent en place.' },
				{ q: 'Nettoyez-vous les vitrines extérieures ?', a: 'Oui, intérieur et extérieur. En hiver, l’extérieur est lavé tant que la température le permet.' }
			]
		},
		en: {
			slug: 'retail-store-cleaning',
			h1: 'Retail and store cleaning in Montreal',
			metaTitle: 'Retail Store Cleaning Montreal | Nett-Med',
			metaDescription:
				'Cleaning for shops, boutiques and commercial spaces in Montreal. Floors, storefronts, fitting rooms, washrooms. Before or after hours.',
			navLabel: 'Retail and stores',
			lede: 'We maintain boutiques, stores and commercial spaces across Montreal, before opening or after closing. The storefront and entrance come first: that is what a customer sees before deciding to walk in.',
			included: [
				{ label: 'Sales floor', detail: 'Vacuumed or washed depending on surface, including under accessible displays.' },
				{ label: 'Storefront and entrance', detail: 'Glass, handles, entry matting and threshold.' },
				{ label: 'Fitting rooms', detail: 'Mirrors, benches, hooks and floors.' },
				{ label: 'Checkout and washrooms', detail: 'Counters, terminals, staff and customer washrooms.' }
			],
			contract: 'Most retailers take daily or three-times-weekly service. High-traffic stores add biweekly storefront glass, separate from the standing contract.',
			frequencies: ['Daily before opening', 'Three times a week', 'Biweekly storefront glass'],
			pricing: 'Sales floor area and foot traffic drive most of the price. Surface type matters too: an oiled wood floor needs a different method than commercial vinyl.',
			priceDrivers: ['Sales floor area', 'Daily foot traffic', 'Number of fitting rooms', 'Floor surface type', 'Visit frequency'],
			faqs: [
				{ q: 'Can you come before opening?', a: 'Yes, and in retail it is often better: the floor is fresh when the first customers walk in.' },
				{ q: 'Do you move displays?', a: 'We clean around and under movable displays. Fixed gondolas and locked cases stay in place.' },
				{ q: 'Do you clean exterior storefront glass?', a: 'Yes, inside and out. In winter the exterior is washed as long as the temperature allows.' }
			]
		}
	},

	{
		id: 'entrepots',
		tier: 3,
		pillar: 'commercial',
		related: ['commercial', 'planchers', 'garage'],
		fr: {
			slug: 'nettoyage-entrepots',
			h1: "Nettoyage d’entrepôts et de locaux industriels à Montréal",
			metaTitle: "Nettoyage d’entrepôt Montréal | Nett-Med",
			metaDescription:
				"Entretien d’entrepôts et de locaux industriels à Montréal. Balayage mécanique, récurage, quais de chargement, bureaux et sanitaires.",
			navLabel: 'Entrepôts et industriel',
			lede: "Nous entretenons entrepôts, ateliers et locaux industriels à Montréal et en périphérie : planchers de béton, allées de circulation, quais de chargement, bureaux administratifs et sanitaires.",
			body: "La poussière de béton est le problème dominant d’un entrepôt. Elle se soulève au passage des chariots élévateurs, se dépose sur les marchandises et remonte dans les bureaux attenants. Un balayage mécanique régulier des allées réduit ce cycle beaucoup plus efficacement qu’un nettoyage occasionnel en profondeur.",
			included: [
				{ label: 'Allées et aires de circulation', detail: 'Balayage mécanique et récurage à l’autolaveuse.' },
				{ label: 'Quais de chargement', detail: 'Balayage, dégraissage des taches et nettoyage des seuils.' },
				{ label: 'Bureaux attenants', detail: 'Entretien courant, en séparant clairement le matériel de celui de l’entrepôt.' },
				{ label: 'Sanitaires et vestiaires', detail: 'Désinfection complète, douches et casiers si présents.' }
			],
			contract: "Les entrepôts fonctionnent en contrat, avec une fréquence dictée par le volume de circulation. Les mandats de récurage complet se planifient pendant les arrêts de production ou les fins de semaine.",
			frequencies: ['Quotidien pour les allées principales', 'Une ou deux fois par semaine', 'Récurage complet pendant les arrêts'],
			pricing: "La superficie compte, mais le facteur déterminant est la proportion de plancher réellement accessible : un entrepôt plein à 90 % laisse peu de surface à nettoyer et beaucoup d’obstacles à contourner.",
			priceDrivers: ['La superficie accessible', 'Le volume de circulation de chariots', 'Le nombre de quais', 'La superficie de bureaux attenants', 'La fréquence des passages'],
			faqs: [
				{ q: 'Travaillez-vous pendant les opérations ?', a: "Oui, en coordonnant avec votre responsable pour éviter les allées actives. Le récurage complet se fait plutôt pendant un arrêt." },
				{ q: 'Nettoyez-vous en hauteur ?', a: "Nous nettoyons ce qui est atteignable depuis le sol ou une plateforme fournie par vous. Le dépoussiérage de structure en hauteur demande un équipement et une formation distincts." },
				{ q: 'Scellez-vous les planchers de béton ?', a: 'Oui, sur mandat distinct. Un béton scellé se nettoie ensuite beaucoup plus vite et produit nettement moins de poussière.' }
			]
		},
		en: {
			slug: 'warehouse-cleaning',
			h1: 'Warehouse and industrial cleaning in Montreal',
			metaTitle: 'Warehouse Cleaning Montreal | Nett-Med',
			metaDescription:
				'Warehouse and industrial cleaning in Montreal. Mechanical sweeping, scrubbing, loading docks, offices and washrooms.',
			navLabel: 'Warehouses and industrial',
			lede: 'We maintain warehouses, workshops and industrial spaces in Montreal and the surrounding area: concrete floors, traffic aisles, loading docks, attached offices and washrooms.',
			body: 'Concrete dust is the dominant problem in a warehouse. It lifts as forklifts pass, settles on stock, and migrates into attached offices. Regular mechanical sweeping of the aisles breaks that cycle far more effectively than an occasional deep clean.',
			included: [
				{ label: 'Aisles and traffic areas', detail: 'Mechanical sweeping and auto-scrubber cleaning.' },
				{ label: 'Loading docks', detail: 'Sweeping, spot degreasing and threshold cleaning.' },
				{ label: 'Attached offices', detail: 'Routine cleaning, with materials kept strictly separate from warehouse equipment.' },
				{ label: 'Washrooms and locker rooms', detail: 'Full disinfection, showers and lockers where present.' }
			],
			contract: 'Warehouses run on contract, with frequency dictated by traffic volume. Full scrub jobs are scheduled during production shutdowns or weekends.',
			frequencies: ['Daily for main aisles', 'Once or twice a week', 'Full scrub during shutdowns'],
			pricing: 'Area matters, but the deciding factor is how much floor is actually accessible: a warehouse at 90% capacity leaves little surface to clean and many obstacles to work around.',
			priceDrivers: ['Accessible floor area', 'Forklift traffic volume', 'Number of docks', 'Attached office area', 'Visit frequency'],
			faqs: [
				{ q: 'Do you work during operations?', a: 'Yes, coordinating with your supervisor to stay clear of active aisles. Full scrubbing is better done during a shutdown.' },
				{ q: 'Do you clean at height?', a: 'We clean what is reachable from the ground or a platform you provide. High structural dusting requires separate equipment and training.' },
				{ q: 'Do you seal concrete floors?', a: 'Yes, as a separate job. Sealed concrete cleans much faster afterwards and produces considerably less dust.' }
			]
		}
	},

	{
		id: 'residentiel',
		tier: 3,
		pillar: 'residential',
		isPillar: true,
		related: ['grand-menage', 'demenagement', 'airbnb'],
		fr: {
			slug: 'entretien-menager-residentiel',
			h1: 'Entretien ménager résidentiel à Montréal',
			metaTitle: 'Entretien ménager résidentiel Montréal | Nett-Med',
			metaDescription:
				'Ménage résidentiel à Montréal, Rive-Sud et Rive-Nord. Maisons, condos et appartements. Service hebdomadaire, aux deux semaines ou ponctuel.',
			navLabel: 'Entretien ménager résidentiel',
			lede: "Nous faisons le ménage de maisons, de condos et d’appartements à Montréal, sur la Rive-Sud et sur la Rive-Nord. Même équipe à chaque visite, horaire fixe, et une liste de tâches convenue d’avance plutôt qu’improvisée sur place.",
			included: [
				{ label: 'Cuisine', detail: 'Comptoirs, évier, extérieur des électroménagers, dosseret, table et plancher.' },
				{ label: 'Salles de bain', detail: 'Bain, douche, céramique, toilette, lavabo, miroirs et plancher désinfectés.' },
				{ label: 'Chambres et aires de vie', detail: 'Époussetage des surfaces libres, aspirateur, lits refaits sur demande.' },
				{ label: 'Planchers', detail: 'Aspirateur sur tapis, vadrouille humide sur bois, céramique et vinyle.' },
				{ label: 'Finitions', detail: 'Poignées, interrupteurs, miroirs et traces de doigts sur les surfaces vitrées.' }
			],
			contract: "Le service récurrent aux deux semaines est la formule la plus fréquente. Nous offrons aussi l’hebdomadaire, le mensuel et le ponctuel. Aucun contrat à durée fixe n’est exigé pour le résidentiel : vous pouvez modifier la fréquence ou arrêter en nous prévenant une semaine d’avance.",
			frequencies: ['Aux deux semaines', 'Hebdomadaire', 'Mensuel', 'Ponctuel'],
			pricing: "Le prix est établi à la visite, selon le nombre de pièces et l’état d’entretien courant du logement. Une première visite coûte généralement plus cher que les suivantes, parce qu’elle inclut un rattrapage.",
			priceDrivers: ['Le nombre de chambres et de salles de bain', 'La superficie habitable', 'La fréquence des visites', 'La présence d’animaux', 'Le niveau d’encombrement des surfaces'],
			faqs: [
				{ q: 'Dois-je être présent ?', a: "Non. La majorité de nos clients réguliers nous remettent une clé ou un code. Les accès sont nominatifs et rendus à la fin du service." },
				{ q: 'Fournissez-vous les produits ?', a: "Oui. Si vous préférez vos propres produits pour une raison d’allergie ou de surface délicate, laissez-les en évidence et nous les utiliserons." },
				{ q: 'Faites-vous le lavage et le repassage ?', a: "Nous pouvons démarrer une brassée pendant la visite. Le pliage et le repassage ne sont pas inclus au service courant." }
			]
		},
		en: {
			slug: 'residential-cleaning',
			h1: 'Residential cleaning in Montreal',
			metaTitle: 'Residential Cleaning Montreal | Nett-Med',
			metaDescription:
				'House cleaning in Montreal, the South Shore and North Shore. Houses, condos and apartments. Weekly, biweekly or one-time service.',
			navLabel: 'Residential cleaning',
			lede: 'We clean houses, condos and apartments across Montreal, the South Shore and the North Shore. Same crew every visit, a fixed schedule, and an agreed task list rather than something improvised on arrival.',
			included: [
				{ label: 'Kitchen', detail: 'Counters, sink, appliance exteriors, backsplash, table and floor.' },
				{ label: 'Bathrooms', detail: 'Tub, shower, tile, toilet, sink, mirrors and floor disinfected.' },
				{ label: 'Bedrooms and living areas', detail: 'Dusting of clear surfaces, vacuuming, beds made on request.' },
				{ label: 'Floors', detail: 'Vacuum on carpet, damp mop on wood, tile and vinyl.' },
				{ label: 'Finishing details', detail: 'Handles, switches, mirrors and fingerprints on glass.' }
			],
			contract: 'Biweekly recurring service is the most common arrangement. We also offer weekly, monthly and one-time. No fixed-term contract is required for residential work: change the frequency or stop with a week’s notice.',
			frequencies: ['Biweekly', 'Weekly', 'Monthly', 'One-time'],
			pricing: 'Priced at the visit, based on room count and the home’s current upkeep. A first visit usually costs more than subsequent ones, because it includes catch-up work.',
			priceDrivers: ['Number of bedrooms and bathrooms', 'Living area', 'Visit frequency', 'Pets in the home', 'How cluttered surfaces are'],
			faqs: [
				{ q: 'Do I need to be home?', a: 'No. Most regular clients give us a key or a code. Access is issued by name and returned when service ends.' },
				{ q: 'Do you bring products?', a: 'Yes. If you prefer your own for allergy reasons or a delicate surface, leave them out and we will use them.' },
				{ q: 'Do you do laundry and ironing?', a: 'We can start a load during the visit. Folding and ironing are not part of standard service.' }
			]
		}
	},

	{
		id: 'grand-menage',
		tier: 3,
		pillar: 'residential',
		related: ['residentiel', 'demenagement', 'tapis'],
		fr: {
			slug: 'grand-menage',
			h1: 'Grand ménage à Montréal',
			metaTitle: 'Grand ménage Montréal | Nett-Med',
			metaDescription:
				'Grand ménage de printemps ou d’automne à Montréal. Intérieur des armoires et du four, plinthes, luminaires, fenêtres et derrière les électroménagers.',
			navLabel: 'Grand ménage',
			lede: "Le grand ménage couvre ce qu’un ménage régulier ne touche pas : l’intérieur des armoires et du four, le derrière des électroménagers, les plinthes, les luminaires, les cadrages de porte et les fenêtres.",
			included: [
				{ label: 'Intérieur des armoires', detail: 'Vidées, lavées et remises en ordre, cuisine et salles de bain.' },
				{ label: 'Électroménagers', detail: 'Intérieur du four et du réfrigérateur, et le plancher derrière chacun.' },
				{ label: 'Plinthes et cadrages', detail: 'Lavés à la main, incluant le dessus des cadres de porte.' },
				{ label: 'Luminaires et ventilateurs', detail: 'Dépoussiérés et lavés, pales de ventilateur de plafond comprises.' },
				{ label: 'Fenêtres intérieures', detail: 'Vitres, rails et rebords.' }
			],
			contract: "C’est un mandat ponctuel, généralement une ou deux fois par année. Beaucoup de clients le planifient au printemps, ou avant de recevoir pendant les Fêtes.",
			frequencies: ['Une fois par année', 'Printemps et automne', 'Avant un événement'],
			pricing: "Le grand ménage se facture à l’heure ou au forfait après visite. La différence de prix entre deux logements de même taille vient presque entièrement du contenu des armoires et de l’état du four.",
			priceDrivers: ['La superficie et le nombre de pièces', 'Le nombre d’armoires à vider', 'L’état du four et du réfrigérateur', 'Le nombre de fenêtres', 'Le temps écoulé depuis le dernier grand ménage'],
			faqs: [
				{ q: 'Combien de temps ça prend ?', a: "Pour un logement de trois chambres, comptez une journée complète avec deux personnes. Nous confirmons après avoir vu les lieux." },
				{ q: 'Dois-je vider les armoires avant ?', a: "Non, nous les vidons et les remettons en ordre. Si vous préférez ranger vous-même le contenu fragile ou personnel, c’est plus rapide et un peu moins cher." },
				{ q: 'Est-ce que ça remplace le ménage régulier ?', a: "Non, c’est un complément. Le grand ménage remet le logement à niveau; l’entretien régulier le maintient." }
			]
		},
		en: {
			slug: 'deep-cleaning',
			h1: 'Deep cleaning in Montreal',
			metaTitle: 'Deep Cleaning Montreal | Nett-Med',
			metaDescription:
				'Spring or fall deep cleaning in Montreal. Inside cabinets and oven, baseboards, light fixtures, windows and behind appliances.',
			navLabel: 'Deep cleaning',
			lede: 'A deep clean covers what regular cleaning never reaches: inside cabinets and the oven, behind appliances, baseboards, light fixtures, door frames and windows.',
			included: [
				{ label: 'Inside cabinets', detail: 'Emptied, washed and put back in order, kitchen and bathrooms.' },
				{ label: 'Appliances', detail: 'Inside the oven and refrigerator, and the floor behind each.' },
				{ label: 'Baseboards and frames', detail: 'Hand-washed, including the tops of door frames.' },
				{ label: 'Fixtures and fans', detail: 'Dusted and washed, ceiling fan blades included.' },
				{ label: 'Interior windows', detail: 'Glass, tracks and sills.' }
			],
			contract: 'This is one-time work, generally once or twice a year. Many clients schedule it in spring, or before hosting over the holidays.',
			frequencies: ['Once a year', 'Spring and fall', 'Before an event'],
			pricing: 'Deep cleaning is billed hourly or as a flat rate after a visit. The price difference between two homes of the same size comes almost entirely from cabinet contents and the state of the oven.',
			priceDrivers: ['Area and room count', 'Number of cabinets to empty', 'Condition of oven and refrigerator', 'Number of windows', 'Time since the last deep clean'],
			faqs: [
				{ q: 'How long does it take?', a: 'For a three-bedroom home, allow a full day with two people. We confirm after seeing the space.' },
				{ q: 'Do I need to empty cabinets first?', a: 'No, we empty and reorganize them. If you prefer to handle fragile or personal items yourself, it goes faster and costs slightly less.' },
				{ q: 'Does this replace regular cleaning?', a: 'No, it complements it. A deep clean brings the home back to baseline; regular service keeps it there.' }
			]
		}
	},

	{
		id: 'demenagement',
		tier: 3,
		pillar: 'residential',
		related: ['grand-menage', 'residentiel', 'apres-construction'],
		fr: {
			slug: 'menage-demenagement',
			h1: 'Ménage de déménagement à Montréal',
			metaTitle: 'Ménage de déménagement Montréal | Nett-Med',
			metaDescription:
				'Ménage de fin de bail et de déménagement à Montréal. Logement vide nettoyé de fond en comble, prêt pour l’inspection du propriétaire.',
			navLabel: 'Ménage de déménagement',
			lede: "Nous nettoyons les logements vides, avant l’arrivée ou après le départ. Le logement est livré prêt pour l’inspection du propriétaire ou pour l’emménagement, sans reprise à faire.",
			body: "Un logement vide se nettoie autrement qu’un logement occupé : sans meubles, tout est visible, y compris les marques que le mobilier cachait. C’est aussi le seul moment où l’intérieur des placards, le derrière des électroménagers et les planchers complets sont accessibles d’un coup.",
			included: [
				{ label: 'Cuisine complète', detail: 'Intérieur et extérieur des armoires, four, réfrigérateur, hotte et dosseret.' },
				{ label: 'Salles de bain', detail: 'Détartrage complet, joints de céramique, ventilateur et pharmacie.' },
				{ label: 'Placards et rangements', detail: 'Tablettes, tringles et planchers de garde-robe.' },
				{ label: 'Planchers et plinthes', detail: 'Lavage complet, coins et dessous de portes compris.' },
				{ label: 'Fenêtres et cadrages', detail: 'Vitres intérieures, rails, rebords et moustiquaires.' }
			],
			contract: "Mandat ponctuel, facturé au forfait après visite ou selon la taille du logement. Nous intervenons une fois le logement complètement vide — un nettoyage fait autour de boîtes est un nettoyage à refaire.",
			frequencies: ['Une fois, logement vide', 'Avant emménagement', 'Après déménagement, fin de bail'],
			pricing: "Le prix dépend de la taille du logement et de son état au moment du départ. Un logement occupé dix ans sans grand ménage demande beaucoup plus de temps qu’un logement quitté après deux ans.",
			priceDrivers: ['Le nombre de pièces', 'L’état général au départ', 'La présence d’animaux', 'Le nombre de fenêtres', 'Le nettoyage du four et du réfrigérateur'],
			faqs: [
				{ q: 'Quand devez-vous intervenir ?', a: "Une fois le logement complètement vide, idéalement la veille de la remise des clés." },
				{ q: 'Est-ce accepté par les propriétaires ?', a: "Nous nettoyons selon les attentes courantes d’une inspection de fin de bail. Si votre bail précise des exigences particulières, transmettez-les et nous les couvrons." },
				{ q: 'Nettoyez-vous aussi le balcon et le rangement ?', a: 'Oui, sur demande, s’ils font partie du logement loué.' }
			]
		},
		en: {
			slug: 'move-in-move-out-cleaning',
			h1: 'Move-in and move-out cleaning in Montreal',
			metaTitle: 'Move Out Cleaning Montreal | Nett-Med',
			metaDescription:
				'End-of-lease and moving cleaning in Montreal. Empty units cleaned top to bottom, ready for the landlord inspection.',
			navLabel: 'Move-in / move-out',
			lede: 'We clean empty units, before you arrive or after you leave. The unit is handed over ready for the landlord inspection or for move-in, with nothing to redo.',
			body: 'An empty unit cleans differently than an occupied one: with the furniture gone, everything is visible, including the marks the furniture was hiding. It is also the only moment when closet interiors, the space behind appliances and the full floor area are all accessible at once.',
			included: [
				{ label: 'Full kitchen', detail: 'Cabinet interiors and exteriors, oven, refrigerator, hood and backsplash.' },
				{ label: 'Bathrooms', detail: 'Full descaling, tile grout, exhaust fan and medicine cabinet.' },
				{ label: 'Closets and storage', detail: 'Shelves, rods and closet floors.' },
				{ label: 'Floors and baseboards', detail: 'Fully washed, including corners and under doors.' },
				{ label: 'Windows and frames', detail: 'Interior glass, tracks, sills and screens.' }
			],
			contract: 'One-time work, billed as a flat rate after a visit or by unit size. We come in once the unit is completely empty — cleaning around boxes is cleaning that has to be redone.',
			frequencies: ['Once, unit empty', 'Before move-in', 'After move-out, end of lease'],
			pricing: 'Price depends on unit size and its condition at handover. A unit lived in for ten years without a deep clean takes far longer than one vacated after two.',
			priceDrivers: ['Number of rooms', 'General condition at handover', 'Pets in the home', 'Number of windows', 'Oven and refrigerator cleaning'],
			faqs: [
				{ q: 'When should you come?', a: 'Once the unit is completely empty, ideally the day before keys are handed over.' },
				{ q: 'Do landlords accept it?', a: 'We clean to the standard expected at an end-of-lease inspection. If your lease specifies particular requirements, send them over and we cover them.' },
				{ q: 'Do you clean the balcony and storage locker?', a: 'Yes, on request, if they form part of the rented unit.' }
			]
		}
	},

	{
		id: 'airbnb',
		tier: 3,
		pillar: 'residential',
		related: ['residentiel', 'demenagement', 'grand-menage'],
		fr: {
			slug: 'nettoyage-airbnb',
			h1: 'Nettoyage Airbnb et location court terme à Montréal',
			metaTitle: 'Nettoyage Airbnb Montréal | Nett-Med',
			metaDescription:
				'Nettoyage entre séjours pour Airbnb et locations court terme à Montréal. Changement de literie, réapprovisionnement, photos après chaque visite.',
			navLabel: 'Nettoyage Airbnb',
			lede: "Nous préparons les logements en location court terme entre deux séjours : literie changée, salle de bain remise à neuf, fournitures réapprovisionnées et photos envoyées après chaque visite pour que vous puissiez confirmer sans vous déplacer.",
			included: [
				{ label: 'Literie et serviettes', detail: 'Changement complet et mise en place; lavage sur place si laveuse disponible.' },
				{ label: 'Salle de bain', detail: 'Désinfection, détartrage et remplacement des consommables.' },
				{ label: 'Cuisine', detail: 'Vaisselle rangée, réfrigérateur vidé des restes, comptoirs et électroménagers.' },
				{ label: 'Réapprovisionnement', detail: 'Papier, savon, sacs à ordures, café et essentiels selon votre liste.' },
				{ label: 'Vérification et photos', detail: 'Signalement des bris ou objets oubliés, avec photos horodatées.' }
			],
			contract: "Nous fonctionnons à la réservation, en suivant votre calendrier. Pour les hôtes ayant plusieurs unités, nous établissons un horaire récurrent et une liste de vérification propre à chaque logement.",
			frequencies: ['Après chaque départ', 'Récurrent selon le calendrier', 'Grand ménage saisonnier'],
			pricing: "Le prix est fixe par visite pour un logement donné, ce qui vous permet de le refléter directement dans vos frais de ménage. Les départs tardifs ou les arrivées le même jour peuvent entraîner un supplément d’urgence.",
			priceDrivers: ['La taille du logement', 'Le nombre de lits à refaire', 'Le lavage de la literie sur place ou à l’externe', 'Le délai entre le départ et l’arrivée', 'Le réapprovisionnement des fournitures'],
			faqs: [
				{ q: 'Pouvez-vous intervenir entre deux séjours le même jour ?', a: "Oui, si la fenêtre est d’au moins trois heures. Nous priorisons ces créneaux et confirmons la veille." },
				{ q: 'Gérez-vous la literie ?', a: "Oui. Nous lavons sur place s’il y a une laveuse, sinon nous fonctionnons par rotation avec deux jeux de draps que vous fournissez." },
				{ q: 'Que faites-vous si un bris est constaté ?', a: "Nous vous envoyons des photos immédiatement, avant de nettoyer la zone, pour que vous puissiez réclamer auprès de la plateforme." }
			]
		},
		en: {
			slug: 'airbnb-cleaning',
			h1: 'Airbnb and short-term rental cleaning in Montreal',
			metaTitle: 'Airbnb Cleaning Montreal | Nett-Med',
			metaDescription:
				'Turnover cleaning for Airbnb and short-term rentals in Montreal. Linen changes, restocking, photos after every visit.',
			navLabel: 'Airbnb cleaning',
			lede: 'We turn over short-term rentals between stays: linens changed, bathroom reset, supplies restocked, and photos sent after every visit so you can confirm without driving over.',
			included: [
				{ label: 'Linens and towels', detail: 'Fully changed and made up; washed on site if a machine is available.' },
				{ label: 'Bathroom', detail: 'Disinfected, descaled, consumables replaced.' },
				{ label: 'Kitchen', detail: 'Dishes put away, leftovers cleared from the fridge, counters and appliances.' },
				{ label: 'Restocking', detail: 'Paper, soap, bin liners, coffee and essentials to your list.' },
				{ label: 'Inspection and photos', detail: 'Damage or left-behind items reported with time-stamped photos.' }
			],
			contract: 'We work per booking, following your calendar. For hosts with several units we set a recurring schedule and a checklist specific to each property.',
			frequencies: ['After every checkout', 'Recurring, per calendar', 'Seasonal deep clean'],
			pricing: 'Flat rate per visit for a given property, so you can pass it straight through as your cleaning fee. Late checkouts or same-day turnarounds may carry a rush supplement.',
			priceDrivers: ['Property size', 'Number of beds to make', 'Linens washed on site or off', 'Gap between checkout and check-in', 'Supply restocking'],
			faqs: [
				{ q: 'Can you turn a unit over same-day?', a: 'Yes, if the window is at least three hours. We prioritize those slots and confirm the day before.' },
				{ q: 'Do you handle linens?', a: 'Yes. We wash on site where there is a machine; otherwise we rotate two sets of linens that you supply.' },
				{ q: 'What if you find damage?', a: 'We send photos immediately, before cleaning the area, so you can file with the platform.' }
			]
		}
	},

	{
		id: 'peinture',
		tier: 4,
		pillar: 'specialized',
		related: ['apres-construction', 'immeubles', 'commercial'],
		fr: {
			slug: 'peinture-commerciale',
			h1: 'Peinture commerciale et résidentielle à Montréal',
			metaTitle: 'Peinture commerciale Montréal | Nett-Med',
			metaDescription:
				'Travaux de peinture intérieure à Montréal : corridors et parties communes d’immeubles, bureaux, logements entre deux locataires.',
			navLabel: 'Peinture',
			lede: "Nous effectuons des travaux de peinture intérieure : corridors et parties communes d’immeubles, bureaux, et logements repeints entre deux locataires. Il s’agit d’un service que nous avons ajouté récemment, en complément de nos mandats d’entretien.",
			body: "Nous acceptons surtout des mandats de peinture chez des clients dont nous entretenons déjà le bâtiment, ou à la suite d’un nettoyage après rénovation. C’est le contexte où le service a du sens : nous connaissons déjà les lieux, les accès et les contraintes d’horaire.",
			included: [
				{ label: 'Préparation des surfaces', detail: 'Rebouchage des trous, ponçage et nettoyage avant application.' },
				{ label: 'Protection', detail: 'Planchers, mobilier fixe et quincaillerie masqués avant le début des travaux.' },
				{ label: 'Application', detail: 'Apprêt au besoin, puis deux couches de finition.' },
				{ label: 'Nettoyage final', detail: 'Le site est rendu propre et utilisable, sans passe de nettoyage à prévoir après nous.' }
			],
			contract: "Mandat ponctuel, facturé au projet après visite. Nous planifions les travaux en dehors des heures d’occupation lorsque le lieu reste en service.",
			frequencies: ['Ponctuel, au projet', 'Entre deux locataires', 'À la suite d’une rénovation'],
			pricing: "Le prix se calcule à la superficie de mur, au nombre de couches et à l’ampleur de la préparation. La préparation est la variable qui bouge le plus : un mur en bon état se peint vite, un mur abîmé demande plus de temps de rebouchage que de peinture.",
			priceDrivers: ['La superficie de mur et la hauteur des plafonds', 'L’état des surfaces à préparer', 'Le nombre de couleurs et de couches', 'La quantité de découpes et de moulures', 'L’accès en dehors des heures d’occupation'],
			faqs: [
				{ q: 'Faites-vous de la peinture extérieure ?', a: "Non. Nous limitons nos travaux à l’intérieur." },
				{ q: 'Peut-on combiner peinture et nettoyage ?', a: "Oui, et c’est le cas le plus fréquent : peinture d’abord, nettoyage final ensuite, en un seul mandat et une seule facture." },
				{ q: 'Fournissez-vous la peinture ?', a: 'Oui, ou nous appliquons celle que vous avez déjà choisie si vous tenez à une couleur ou à une marque précise.' }
			]
		},
		en: {
			slug: 'commercial-painting',
			h1: 'Commercial and residential painting in Montreal',
			metaTitle: 'Commercial Painting Montreal | Nett-Med',
			metaDescription:
				'Interior painting in Montreal: building corridors and common areas, offices, and units repainted between tenants.',
			navLabel: 'Painting',
			lede: 'We take on interior painting work: building corridors and common areas, offices, and units repainted between tenants. This is a service we added recently, alongside our maintenance contracts.',
			body: 'We mostly take painting work from clients whose buildings we already maintain, or following a post-renovation clean. That is the context where it makes sense: we already know the space, the access and the scheduling constraints.',
			included: [
				{ label: 'Surface preparation', detail: 'Holes filled, sanded and cleaned before application.' },
				{ label: 'Protection', detail: 'Floors, fixed furniture and hardware masked before work starts.' },
				{ label: 'Application', detail: 'Primer where needed, then two finish coats.' },
				{ label: 'Final cleanup', detail: 'The site is left clean and usable, with no cleaning pass needed after us.' }
			],
			contract: 'One-time work, billed by project after a site visit. We schedule outside occupied hours where the space stays in service.',
			frequencies: ['One-time, by project', 'Between tenants', 'Following a renovation'],
			pricing: 'Priced by wall area, coat count and the extent of preparation. Preparation is the variable that moves most: a sound wall paints quickly, a damaged one takes more filling time than painting time.',
			priceDrivers: ['Wall area and ceiling height', 'Condition of surfaces to prepare', 'Number of colours and coats', 'Amount of cutting-in and trim', 'Access outside occupied hours'],
			faqs: [
				{ q: 'Do you do exterior painting?', a: 'No. We keep this work to interiors.' },
				{ q: 'Can painting and cleaning be combined?', a: 'Yes, and that is the most common case: paint first, final clean after, as one job and one invoice.' },
				{ q: 'Do you supply the paint?', a: 'Yes, or we apply what you have already chosen if you want a specific colour or brand.' }
			]
		}
	}
];
