import type { Service } from './types';

/**
 * Tier 1 — the four commercial pages the site is built to win.
 *
 * Copy rule applied throughout: no sentence that could appear unchanged on a
 * competitor’s site. Where a competitor writes "professional and meticulous",
 * these pages name the surface, the product, the frequency, or the contract
 * term. Specificity is the differentiator and it is also what gives search
 * engines something to match.
 */
export const tier1: Service[] = [
	{
		id: 'commercial',
		tier: 1,
		pillar: 'commercial',
		isPillar: true,
		related: ['immeubles', 'bureaux', 'garage'],
		fr: {
			slug: 'entretien-menager-commercial',
			h1: 'Entretien ménager commercial à Montréal',
			metaTitle: 'Entretien ménager commercial Montréal | Nett-Med',
			metaDescription:
				"Contrats d’entretien ménager commercial à Montréal, Rive-Sud et Rive-Nord : immeubles, bureaux, cliniques, garderies, commerces. Soumission gratuite.",
			navLabel: 'Entretien ménager commercial',
			lede: "Nett-Med entretient des immeubles, des bureaux, des cliniques, des garderies et des commerces à Montréal, sur la Rive-Sud et sur la Rive-Nord. Nous travaillons sur contrat, en dehors de vos heures d’ouverture, avec la même équipe affectée à votre bâtiment d’une visite à l’autre.",
			body: "La stabilité de l’équipe est ce qui distingue un contrat qui tient d’un contrat qu’on résilie après six mois. Une équipe qui revient connaît vos accès, vos codes d’alarme, les planchers qui marquent et le local qu’il ne faut pas déranger le mardi. Vous avez un seul interlocuteur, joignable directement, et un correctif appliqué le jour même si quelque chose est manqué.",
			included: [
				{
					label: 'Planchers et tapis',
					detail: 'Balayage, vadrouille humide, aspirateur commercial, lavage des entrées et des tapis brosse.'
				},
				{
					label: 'Sanitaires',
					detail: 'Désinfection des cuvettes, lavabos, poignées et distributrices, réapprovisionnement du papier et du savon.'
				},
				{
					label: 'Surfaces de contact',
					detail: 'Poignées, interrupteurs, rampes, boutons d’ascenseur et comptoirs désinfectés à chaque visite.'
				},
				{
					label: 'Cuisinettes et salles de repos',
					detail: 'Comptoirs, éviers, extérieur des électroménagers, tables et chaises.'
				},
				{
					label: 'Déchets et recyclage',
					detail: 'Collecte, remplacement des sacs, sortie aux points de dépôt et rinçage des bacs au besoin.'
				},
				{
					label: 'Vitrerie intérieure',
					detail: 'Portes vitrées, cloisons, miroirs et traces de mains sur les surfaces vitrées basses.'
				}
			],
			contract: "La majorité de nos clients commerciaux sont sous contrat : un horaire fixe, une facture mensuelle unique et un devis qui précise par écrit ce qui est nettoyé, à quelle fréquence et selon quel standard. Nous acceptons aussi les mandats ponctuels — un grand ménage avant une inspection, une remise en état après un dégât d’eau, un nettoyage de fin de bail.",
			frequencies: [
				'Cinq à sept fois par semaine',
				'Deux ou trois fois par semaine',
				'Une fois par semaine',
				'Aux deux semaines ou mensuel',
				'Ponctuel, sur appel'
			],
			pricing: "Nous ne publions pas de prix au pied carré, parce qu’un chiffre affiché sans avoir vu le bâtiment n’est pas une soumission, c’est une devinette. Nous visitons les lieux gratuitement et vous remettons un prix ferme.",
			priceDrivers: [
				'La superficie et le nombre d’étages',
				'La fréquence des visites',
				'Le type de planchers — un terrazzo ciré ne demande pas le même entretien qu’un tapis',
				'Le nombre de salles de bain et de postes de travail',
				'L’achalandage réel du bâtiment',
				'L’heure d’intervention : les mandats de nuit coûtent davantage'
			],
			faqs: [
				{
					q: 'Travaillez-vous en dehors des heures de bureau ?',
					a: "Oui. La plupart de nos contrats commerciaux s’exécutent en soirée ou la nuit, une fois les locaux vides. Nous nous adaptons aussi aux commerces ouverts le week-end."
				},
				{
					q: 'Êtes-vous assurés ?',
					a: "Oui, nous détenons une assurance responsabilité civile et nos employés sont couverts par la CNESST. Nous fournissons les attestations sur demande — c’est généralement la première chose qu’un gestionnaire immobilier demande, et c’est normal."
				},
				{
					q: 'Fournissez-vous les produits et l’équipement ?',
					a: "Oui, tout est inclus : produits, autolaveuses, aspirateurs commerciaux, échelles. Si vous préférez que nous utilisions un produit précis pour une raison de certification ou d’allergie, nous l’achetons et l’utilisons."
				},
				{
					q: 'Que se passe-t-il si quelque chose est mal fait ?',
					a: "Vous appelez le numéro au bas de cette page et nous retournons sur place le jour ouvrable suivant, sans frais. Ce n’est pas une garantie de brochure : c’est la seule façon de garder un contrat commercial."
				},
				{
					q: 'Desservez-vous la Rive-Sud et la Rive-Nord ?',
					a: 'Oui. Montréal, Laval, Longueuil, Brossard, Terrebonne, Repentigny et les municipalités environnantes.'
				}
			]
		},
		en: {
			slug: 'commercial-cleaning',
			h1: 'Commercial cleaning in Montreal',
			metaTitle: 'Commercial Cleaning Montreal | Nett-Med',
			metaDescription:
				'Commercial cleaning contracts in Montreal, the South Shore and North Shore: buildings, offices, clinics, daycares, retail. Free on-site quote.',
			navLabel: 'Commercial cleaning',
			lede: 'Nett-Med maintains buildings, offices, clinics, daycares and retail spaces across Montreal, the South Shore and the North Shore. We work on contract, outside your operating hours, with the same crew assigned to your building from one visit to the next.',
			body: 'Crew stability is what separates a contract that holds from one that gets cancelled after six months. A returning crew knows your access points, your alarm codes, which floors mark, and which office not to disturb on Tuesdays. You get one contact who answers directly, and anything missed is corrected the same day.',
			included: [
				{
					label: 'Floors and carpets',
					detail: 'Sweeping, damp mopping, commercial vacuuming, entrance and walk-off mat washing.'
				},
				{
					label: 'Washrooms',
					detail: 'Disinfection of toilets, sinks, handles and dispensers; paper and soap restocked.'
				},
				{
					label: 'Touch surfaces',
					detail: 'Handles, switches, railings, elevator buttons and counters disinfected every visit.'
				},
				{
					label: 'Kitchenettes and break rooms',
					detail: 'Counters, sinks, appliance exteriors, tables and chairs.'
				},
				{
					label: 'Waste and recycling',
					detail: 'Collection, liner replacement, transfer to disposal points, bin rinsing as needed.'
				},
				{
					label: 'Interior glass',
					detail: 'Glass doors, partitions, mirrors and handprints on low glazed surfaces.'
				}
			],
			contract: 'Most of our commercial clients are on contract: a fixed schedule, one monthly invoice, and a written scope stating what is cleaned, how often, and to what standard. We also take one-time work — a deep clean before an inspection, a restoration after water damage, an end-of-lease cleanout.',
			frequencies: [
				'Five to seven times a week',
				'Two or three times a week',
				'Weekly',
				'Biweekly or monthly',
				'One-time, on call'
			],
			pricing: 'We do not publish a price per square foot, because a number quoted without seeing the building is not a quote, it is a guess. We visit at no cost and give you a firm price.',
			priceDrivers: [
				'Square footage and number of floors',
				'Visit frequency',
				'Floor type — waxed terrazzo is not the same job as carpet',
				'Number of washrooms and workstations',
				'Actual foot traffic through the building',
				'Time of service: overnight work costs more'
			],
			faqs: [
				{
					q: 'Do you work outside business hours?',
					a: 'Yes. Most of our commercial contracts run in the evening or overnight, once the space is empty. We also accommodate retail clients open on weekends.'
				},
				{
					q: 'Are you insured?',
					a: 'Yes. We carry liability insurance and our employees are covered under CNESST. We provide certificates on request — it is usually the first thing a property manager asks for, and rightly so.'
				},
				{
					q: 'Do you supply products and equipment?',
					a: 'Yes, everything is included: products, auto-scrubbers, commercial vacuums, ladders. If you need a specific product for certification or allergy reasons, we buy it and use it.'
				},
				{
					q: 'What happens if something is done poorly?',
					a: 'You call the number at the bottom of this page and we return the next business day at no charge. That is not a brochure guarantee — it is the only way to keep a commercial contract.'
				},
				{
					q: 'Do you serve the South Shore and North Shore?',
					a: 'Yes. Montreal, Laval, Longueuil, Brossard, Terrebonne, Repentigny and surrounding municipalities.'
				}
			]
		}
	},

	{
		id: 'immeubles',
		tier: 1,
		pillar: 'commercial',
		related: ['garage', 'planchers', 'commercial'],
		fr: {
			slug: 'nettoyage-immeubles-parties-communes',
			h1: "Nettoyage d’immeubles et de parties communes à Montréal",
			metaTitle: "Nettoyage d’immeubles Montréal | Nett-Med",
			metaDescription:
				"Entretien des parties communes d’immeubles et de copropriétés à Montréal : halls, corridors, ascenseurs, escaliers, garage. Contrats pour syndicats.",
			navLabel: 'Immeubles et parties communes',
			lede: "Nous entretenons les parties communes d’immeubles locatifs et de copropriétés : halls d’entrée, corridors, ascenseurs, cages d’escalier, salles de lavage, chutes à déchets et stationnements. Contrats hebdomadaires ou quotidiens, selon le nombre d’unités.",
			body: "Au Québec, l’entretien des parties communes n’est pas une question de goût : c’est une obligation du syndicat de copropriété, et son relâchement se voit directement dans la valeur des unités. Un hall taché et une cage d’escalier négligée sont la première chose qu’un acheteur potentiel remarque. Nous produisons un rapport de visite que le syndicat peut déposer tel quel à son assemblée.",
			included: [
				{
					label: "Hall d’entrée",
					detail: 'Planchers, tapis brosse, vitres de porte, boîtes aux lettres, interphone et mobilier.'
				},
				{
					label: 'Corridors et escaliers',
					detail: 'Aspirateur ou vadrouille selon le revêtement, plinthes, rampes désinfectées, luminaires dépoussiérés.'
				},
				{
					label: 'Ascenseurs',
					detail: "Planchers, parois, miroirs, boutons désinfectés et rails de porte dégagés — c’est le rail qui bloque la porte, pas le mécanisme."
				},
				{
					label: 'Chutes et locaux à déchets',
					detail: 'Lavage et désinfection du local, rinçage des bacs, contrôle des odeurs.'
				},
				{
					label: 'Salles de lavage et gymnase',
					detail: 'Planchers, dessus et pourtour des appareils, filtres à charpie, miroirs et équipements.'
				},
				{
					label: 'Entrées en hiver',
					detail: 'Tapis absorbants entretenus et calcium retiré avant qu’il ne marque les planchers de façon permanente.'
				}
			],
			contract: "Les immeubles fonctionnent presque toujours sous contrat annuel, avec un horaire fixe connu des résidents. Nous fournissons au syndicat ou au gestionnaire un calendrier des visites, la liste des tâches par fréquence et un rapport après chaque passage. Les travaux saisonniers — lavage du garage, décapage des planchers du hall — sont planifiés d’avance et facturés séparément.",
			frequencies: [
				'Quotidien pour les grands immeubles',
				'Trois fois par semaine',
				'Une ou deux fois par semaine',
				'Travaux saisonniers planifiés'
			],
			pricing: "Le prix d’un contrat d’immeuble se calcule surtout au nombre d’unités et d’étages, pas à la superficie brute. Un immeuble de 40 unités sur quatre étages demande plus de temps qu’un plateau commercial de même superficie, parce que les surfaces sont fragmentées.",
			priceDrivers: [
				"Le nombre d’unités et d’étages",
				"Le nombre d’ascenseurs et de cages d’escalier",
				'La présence d’un garage intérieur',
				'Les commodités : gym, piscine, salle communautaire, salle de lavage',
				'La fréquence des visites',
				"L’accès et le stationnement pour l’équipe"
			],
			faqs: [
				{
					q: "L’entretien des parties communes est-il obligatoire pour un syndicat ?",
					a: "L’entretien des parties communes relève des obligations du syndicat de copropriété. Un contrat d’entretien documenté, avec un calendrier et des rapports de visite, est la façon la plus simple de démontrer que cette obligation est remplie."
				},
				{
					q: 'Fournissez-vous un rapport au syndicat ?',
					a: "Oui. Après chaque visite, nous consignons les tâches effectuées et signalons ce qui relève d’un autre corps de métier : une fuite, une ampoule grillée, une porte qui ferme mal. Le syndicat reçoit un sommaire mensuel."
				},
				{
					q: 'Pouvez-vous aussi laver le garage intérieur ?',
					a: "Oui, et c’est habituellement la même équipe. Le lavage de garage se planifie une fois par année, au printemps, une fois le calcium de l’hiver accumulé."
				},
				{
					q: 'Comment gérez-vous les clés et les accès ?',
					a: "Les clés et les fobs sont numérotés, remis à une seule personne responsable et retournés à la fin du contrat. Nous ne sous-traitons pas les accès à des tiers."
				}
			]
		},
		en: {
			slug: 'building-common-area-cleaning',
			h1: 'Building and common area cleaning in Montreal',
			metaTitle: 'Building & Common Area Cleaning Montreal',
			metaDescription:
				'Common area cleaning for condo and commercial buildings in Montreal: lobbies, corridors, elevators, stairwells, garage. Contracts for syndicates.',
			navLabel: 'Buildings and common areas',
			lede: 'We maintain the common areas of rental buildings and condominiums: lobbies, corridors, elevators, stairwells, laundry rooms, garbage chutes and parking. Weekly or daily contracts, depending on the number of units.',
			body: 'In Quebec, maintaining common areas is not a matter of preference — it is an obligation of the condominium syndicate, and letting it slide shows up directly in unit values. A stained lobby and a neglected stairwell are the first things a prospective buyer notices. We produce a visit report the syndicate can table at its meeting as-is.',
			included: [
				{
					label: 'Lobby',
					detail: 'Floors, walk-off mats, door glass, mailboxes, intercom and furniture.'
				},
				{
					label: 'Corridors and stairwells',
					detail: 'Vacuum or mop depending on the surface, baseboards, disinfected railings, dusted light fixtures.'
				},
				{
					label: 'Elevators',
					detail: 'Floors, walls, mirrors, disinfected buttons and cleared door tracks — it is the track that jams the door, not the mechanism.'
				},
				{
					label: 'Chutes and waste rooms',
					detail: 'Room washed and disinfected, bins rinsed, odour controlled.'
				},
				{
					label: 'Laundry rooms and gym',
					detail: 'Floors, tops and surrounds of machines, lint traps, mirrors and equipment.'
				},
				{
					label: 'Entrances in winter',
					detail: 'Absorbent matting maintained and calcium removed before it permanently marks the floors.'
				}
			],
			contract: 'Buildings almost always run on an annual contract with a fixed schedule residents can rely on. We give the syndicate or manager a visit calendar, a task list by frequency, and a report after every visit. Seasonal work — garage washing, lobby floor stripping — is scheduled in advance and billed separately.',
			frequencies: [
				'Daily for larger buildings',
				'Three times a week',
				'Once or twice a week',
				'Scheduled seasonal work'
			],
			pricing: 'Building contracts are priced mostly by unit and floor count, not by gross square footage. A 40-unit building over four floors takes more time than a commercial floor plate of the same area, because the surfaces are fragmented.',
			priceDrivers: [
				'Number of units and floors',
				'Number of elevators and stairwells',
				'Whether there is an indoor garage',
				'Amenities: gym, pool, community room, laundry',
				'Visit frequency',
				'Access and parking for the crew'
			],
			faqs: [
				{
					q: 'Is common area maintenance mandatory for a syndicate?',
					a: 'Maintaining common areas falls under the obligations of the condominium syndicate. A documented maintenance contract, with a schedule and visit reports, is the simplest way to demonstrate that obligation is being met.'
				},
				{
					q: 'Do you provide a report to the syndicate?',
					a: 'Yes. After each visit we record the tasks completed and flag anything that belongs to another trade: a leak, a burnt-out bulb, a door that no longer closes properly. The syndicate receives a monthly summary.'
				},
				{
					q: 'Can you also wash the indoor garage?',
					a: 'Yes, and usually with the same crew. Garage washing is scheduled once a year in spring, once the winter calcium has built up.'
				},
				{
					q: 'How do you handle keys and access?',
					a: 'Keys and fobs are numbered, issued to a single accountable person, and returned at the end of the contract. We do not subcontract access to third parties.'
				}
			]
		}
	},

	{
		id: 'garage',
		tier: 1,
		pillar: 'commercial',
		related: ['immeubles', 'planchers', 'commercial'],
		fr: {
			slug: 'lavage-de-garage',
			h1: 'Lavage de garage intérieur à Montréal',
			metaTitle: 'Lavage de garage intérieur Montréal | Nett-Med',
			metaDescription:
				'Lavage de garage intérieur et de stationnement souterrain à Montréal. Balayage, récurage, dégraissage, drains. Contrats annuels pour immeubles.',
			navLabel: 'Lavage de garage',
			lede: "Nous lavons les garages intérieurs et les stationnements souterrains d’immeubles résidentiels et commerciaux à Montréal. L’opération se fait par sections, de nuit ou par étage, pour qu’une partie du stationnement reste utilisable en tout temps.",
			body: "À Montréal, un garage intérieur accumule tout l’hiver le calcium, le sable et l’huile que les véhicules y laissent. Le calcium ne disparaît pas seul : il attaque la dalle de béton et l’armature en dessous. Un lavage annuel au printemps coûte une fraction de ce que coûte une réparation de dalle, et c’est la raison pour laquelle la plupart des syndicats le budgètent une fois par année.",
			included: [
				{
					label: 'Balayage mécanique',
					detail: 'Retrait du sable, du gravier et des débris accumulés durant la saison de déglaçage.'
				},
				{
					label: 'Récurage du plancher',
					detail: 'Autolaveuse industrielle avec détergent alcalin pour dissoudre le calcium incrusté.'
				},
				{
					label: 'Dégraissage des taches',
					detail: "Traitement ciblé des taches d’huile et de liquide de transmission aux emplacements réservés."
				},
				{
					label: 'Murs et colonnes',
					detail: "Lavage à basse pression du bas des murs et des colonnes, là où les éclaboussures s’accumulent."
				},
				{
					label: 'Drains et puisards',
					detail: 'Dégagement des grilles et retrait des sédiments qui bloquent l’écoulement.'
				},
				{
					label: 'Gestion des eaux',
					detail: "Eaux de lavage récupérées et évacuées correctement, sans rejet direct au réseau pluvial."
				}
			],
			contract: "Le lavage de garage est un mandat annuel, pas un contrat récurrent. Nous le planifions habituellement entre avril et juin, quand le sel a cessé d’être épandu. Nous fournissons l’avis à afficher aux résidents deux semaines d’avance et nous travaillons par sections pour que personne ne se retrouve sans place de stationnement.",
			frequencies: [
				'Une fois par année, au printemps',
				'Deux fois par année pour les garages très achalandés',
				'Lavage ponctuel avant une inspection ou une vente'
			],
			pricing: "Le prix se calcule à la superficie et au nombre de niveaux, mais le facteur qui compte vraiment est le temps écoulé depuis le dernier lavage. Un garage lavé chaque année se nettoie en un passage. Un garage négligé depuis cinq ans demande un traitement en deux passes, et le résultat reste inférieur.",
			priceDrivers: [
				'La superficie et le nombre de niveaux',
				'Le nombre d’années depuis le dernier lavage',
				"La présence d’un drain fonctionnel et d’un point d’eau",
				'La hauteur libre — certains garages ne prennent pas la grosse machinerie',
				'Le travail par sections, qui allonge le mandat',
				'Le dégraissage, facturé selon le nombre de taches'
			],
			faqs: [
				{
					q: 'Faut-il vider complètement le garage ?',
					a: "Non. Nous travaillons par sections : les résidents déplacent leur véhicule d’un côté à l’autre selon un calendrier affiché deux semaines d’avance. Un garage complètement vide se lave plus vite et coûte moins cher, mais ce n’est pas exigé."
				},
				{
					q: 'Quand faut-il faire laver le garage ?',
					a: "Au printemps, une fois l’épandage de sel terminé — généralement entre avril et juin. Laver avant la fin de l’hiver ne sert à rien puisque le calcium recommence à s’accumuler immédiatement."
				},
				{
					q: "Où vont les eaux de lavage ?",
					a: "Elles sont récupérées et évacuées vers le réseau sanitaire approprié. Un garage contient de l’huile et des résidus de calcium : pousser cette eau directement vers un drain pluvial n’est pas acceptable."
				},
				{
					q: 'Enlevez-vous les taches d’huile ?',
					a: "Nous les traitons au dégraissant et la plupart pâlissent nettement. Une tache d’huile ancienne imprégnée dans du béton non scellé ne disparaît jamais complètement — nous préférons le dire d’avance plutôt que de le promettre."
				}
			]
		},
		en: {
			slug: 'parking-garage-cleaning',
			h1: 'Indoor parking garage cleaning in Montreal',
			metaTitle: 'Parking Garage Cleaning Montreal | Nett-Med',
			metaDescription:
				'Indoor and underground parking garage cleaning in Montreal. Sweeping, scrubbing, degreasing, drains. Annual contracts for buildings.',
			navLabel: 'Parking garage cleaning',
			lede: 'We wash indoor and underground parking garages in residential and commercial buildings across Montreal. The work is done in sections, overnight or by level, so part of the garage stays usable at all times.',
			body: 'A Montreal indoor garage collects a full winter of calcium, sand and oil tracked in by vehicles. Calcium does not clear on its own: it attacks the concrete slab and the rebar underneath. An annual spring wash costs a fraction of a slab repair, which is why most syndicates budget for it once a year.',
			included: [
				{
					label: 'Mechanical sweeping',
					detail: 'Removal of sand, grit and debris accumulated over the de-icing season.'
				},
				{
					label: 'Floor scrubbing',
					detail: 'Industrial auto-scrubber with alkaline detergent to dissolve embedded calcium.'
				},
				{
					label: 'Spot degreasing',
					detail: 'Targeted treatment of oil and transmission fluid stains at assigned spaces.'
				},
				{
					label: 'Walls and columns',
					detail: 'Low-pressure washing of lower walls and columns where splash accumulates.'
				},
				{
					label: 'Drains and catch basins',
					detail: 'Grates cleared and sediment removed where it blocks drainage.'
				},
				{
					label: 'Water handling',
					detail: 'Wash water recovered and disposed of properly, not discharged into the storm system.'
				}
			],
			contract: 'Garage washing is an annual job, not a recurring contract. We usually schedule it between April and June, once salting has stopped. We supply the resident notice to post two weeks ahead and work in sections so nobody loses their parking space.',
			frequencies: [
				'Once a year, in spring',
				'Twice a year for high-traffic garages',
				'One-time wash before an inspection or sale'
			],
			pricing: 'Price is calculated by area and number of levels, but the factor that really matters is how long it has been since the last wash. A garage washed annually cleans in a single pass. One neglected for five years needs two passes, and the result is still not as good.',
			priceDrivers: [
				'Area and number of levels',
				'Years since the last wash',
				'Whether there is a working drain and water source',
				'Clearance height — some garages will not take the larger machines',
				'Working in sections, which extends the job',
				'Degreasing, billed by number of stains'
			],
			faqs: [
				{
					q: 'Does the garage have to be completely empty?',
					a: 'No. We work in sections: residents move their vehicle from one side to the other on a schedule posted two weeks in advance. A fully empty garage washes faster and costs less, but it is not required.'
				},
				{
					q: 'When should the garage be washed?',
					a: 'In spring, once salting has finished — generally between April and June. Washing before winter ends accomplishes little, since calcium starts building up again immediately.'
				},
				{
					q: 'Where does the wash water go?',
					a: 'It is recovered and discharged to the appropriate sanitary system. A garage holds oil and calcium residue; pushing that water straight into a storm drain is not acceptable.'
				},
				{
					q: 'Do you remove oil stains?',
					a: 'We treat them with degreaser and most lighten considerably. An old oil stain soaked into unsealed concrete never disappears completely — we would rather say so upfront than promise it.'
				}
			]
		}
	},

	{
		id: 'bureaux',
		tier: 1,
		pillar: 'commercial',
		related: ['commercial', 'tapis', 'vitres'],
		fr: {
			slug: 'nettoyage-de-bureaux',
			h1: 'Nettoyage de bureaux à Montréal',
			metaTitle: 'Nettoyage de bureaux Montréal | Nett-Med',
			metaDescription:
				'Entretien ménager de bureaux à Montréal, en soirée ou la nuit. Postes de travail, salles de conférence, cuisinettes, sanitaires. Contrat sur mesure.',
			navLabel: 'Nettoyage de bureaux',
			lede: "Nous entretenons des bureaux de 5 à 200 postes à Montréal, en soirée ou la nuit. L’équipe entre après le départ des employés et repart avant leur arrivée : personne ne travaille avec un aspirateur dans le dos.",
			body: "Un bureau moderne se salit là où on ne regarde pas. Les postes de travail restent propres en surface, mais les claviers, les téléphones, les poignées de salle de conférence et le robinet de la cuisinette concentrent l’essentiel de ce qui circule entre collègues. Notre routine porte d’abord sur ces points de contact, puis sur ce qui se voit.",
			included: [
				{
					label: 'Postes de travail',
					detail: 'Dépoussiérage des surfaces libres, désinfection des téléphones et vidage des corbeilles.'
				},
				{
					label: 'Salles de conférence',
					detail: 'Table, chaises replacées, écran et télécommande essuyés, tableau blanc nettoyé.'
				},
				{
					label: 'Cuisinette',
					detail: "Comptoirs, évier, robinet, extérieur du réfrigérateur et du micro-ondes, cafetière, tables."
				},
				{
					label: 'Sanitaires',
					detail: 'Désinfection complète et réapprovisionnement du papier, du savon et des essuie-mains.'
				},
				{
					label: 'Planchers',
					detail: 'Aspirateur sur tapis, vadrouille humide sur surfaces dures, plinthes aux deux semaines.'
				},
				{
					label: 'Réception et vitres',
					detail: "Comptoir d’accueil, portes vitrées et cloisons intérieures sans traces."
				}
			],
			contract: "Nous établissons le contrat autour de votre horaire, pas l’inverse. La fréquence se décide poste par poste : les sanitaires et la cuisinette demandent souvent un passage quotidien alors que le dépoussiérage des postes peut se faire deux fois par semaine sans que personne le remarque. Cela réduit la facture sans réduire la propreté perçue.",
			frequencies: [
				'Cinq soirs par semaine',
				'Trois soirs par semaine',
				'Une ou deux fois par semaine',
				'Grand ménage trimestriel en complément'
			],
			pricing: "Le nombre de postes de travail prédit mieux le temps requis que la superficie. Un plateau de 4 000 pi² à aire ouverte avec 30 employés se nettoie plus vite qu’un même 4 000 pi² divisé en 20 bureaux fermés, parce que chaque cloison ajoute des surfaces et des coins.",
			priceDrivers: [
				'Le nombre de postes de travail et de bureaux fermés',
				'Le nombre de salles de bain',
				'La proportion de tapis par rapport aux surfaces dures',
				'La fréquence des visites',
				'La présence d’une cuisinette ou d’une cafétéria',
				'L’heure d’accès au bâtiment'
			],
			faqs: [
				{
					q: 'Vos employés ont-ils accès à nos locaux sans surveillance ?',
					a: "Oui, c’est le fonctionnement normal d’un contrat de soir. Nos employés font l’objet d’une vérification avant l’embauche, les accès sont nominatifs et nous transmettons la liste des personnes affectées à votre bureau."
				},
				{
					q: 'Nettoyez-vous les claviers et les écrans ?',
					a: "Nous désinfectons les téléphones et essuyons les écrans sur demande. Nous ne déplaçons pas les claviers ni les papiers sur les bureaux : un poste encombré est dépoussiéré autour, pas rangé."
				},
				{
					q: 'Pouvez-vous venir le jour ?',
					a: "Oui, si votre espace le permet. C’est fréquent dans les bureaux à faible achalandage et pour les sanitaires en milieu de journée. La majorité des clients préfèrent le soir."
				},
				{
					q: 'Le nettoyage des tapis est-il inclus ?',
					a: "L’aspirateur est inclus à chaque visite. Le shampooing en profondeur est un mandat distinct, généralement une à deux fois par année selon l’achalandage."
				}
			]
		},
		en: {
			slug: 'office-cleaning',
			h1: 'Office cleaning in Montreal',
			metaTitle: 'Office Cleaning Montreal | Nett-Med',
			metaDescription:
				'Office cleaning in Montreal, evenings or overnight. Workstations, meeting rooms, kitchenettes, washrooms. Contracts built around your schedule.',
			navLabel: 'Office cleaning',
			lede: 'We maintain offices from 5 to 200 workstations across Montreal, in the evening or overnight. The crew arrives after staff leave and is gone before they return — nobody works with a vacuum behind them.',
			body: 'A modern office gets dirty where nobody looks. Desks stay clean on the surface, but keyboards, phones, meeting room handles and the kitchenette tap concentrate most of what circulates between colleagues. Our routine covers those touch points first, then what is visible.',
			included: [
				{
					label: 'Workstations',
					detail: 'Dusting of clear surfaces, phone disinfection, wastebaskets emptied.'
				},
				{
					label: 'Meeting rooms',
					detail: 'Table, chairs reset, screen and remote wiped, whiteboard cleaned.'
				},
				{
					label: 'Kitchenette',
					detail: 'Counters, sink, tap, fridge and microwave exteriors, coffee maker, tables.'
				},
				{
					label: 'Washrooms',
					detail: 'Full disinfection and restocking of paper, soap and hand towels.'
				},
				{
					label: 'Floors',
					detail: 'Vacuum on carpet, damp mop on hard surfaces, baseboards biweekly.'
				},
				{
					label: 'Reception and glass',
					detail: 'Front desk, glass doors and interior partitions left streak-free.'
				}
			],
			contract: 'We build the contract around your schedule, not the reverse. Frequency is decided task by task: washrooms and the kitchenette often need daily attention while desk dusting can happen twice a week without anyone noticing. That lowers the invoice without lowering perceived cleanliness.',
			frequencies: [
				'Five evenings a week',
				'Three evenings a week',
				'Once or twice a week',
				'Quarterly deep clean alongside'
			],
			pricing: 'Workstation count predicts the time required better than square footage. A 4,000 sq ft open floor with 30 staff cleans faster than the same 4,000 sq ft split into 20 private offices, because every partition adds surfaces and corners.',
			priceDrivers: [
				'Number of workstations and private offices',
				'Number of washrooms',
				'Ratio of carpet to hard surfaces',
				'Visit frequency',
				'Whether there is a kitchenette or cafeteria',
				'Building access hours'
			],
			faqs: [
				{
					q: 'Will your staff be in our space unsupervised?',
					a: 'Yes, that is how an evening contract normally works. Our employees are screened before hiring, access is issued by name, and we provide the list of people assigned to your office.'
				},
				{
					q: 'Do you clean keyboards and screens?',
					a: 'We disinfect phones and wipe screens on request. We do not move keyboards or papers on desks: a cluttered workstation is dusted around, not tidied.'
				},
				{
					q: 'Can you come during the day?',
					a: 'Yes, if your space allows it. It is common in low-traffic offices and for midday washroom service. Most clients prefer evenings.'
				},
				{
					q: 'Is carpet cleaning included?',
					a: 'Vacuuming is included every visit. Deep shampooing is a separate job, generally once or twice a year depending on traffic.'
				}
			]
		}
	}
];
