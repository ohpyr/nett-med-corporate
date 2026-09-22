import type { Service } from './types';

/** Tier 2 — high-margin verticals and specialized work that supports Tier 1 contracts. */
export const tier2: Service[] = [
	{
		id: 'apres-construction',
		tier: 2,
		pillar: 'commercial',
		related: ['vitres', 'planchers', 'peinture'],
		fr: {
			slug: 'nettoyage-apres-construction',
			h1: 'Nettoyage après construction et après rénovation à Montréal',
			metaTitle: 'Nettoyage après construction Montréal | Nett-Med',
			metaDescription:
				'Nettoyage après construction et après rénovation à Montréal. Retrait de la poussière de gypse, vitres, planchers, armoires. Livraison prête à occuper.',
			navLabel: 'Après construction',
			lede: "Nous remettons en état les locaux et les logements à la fin des travaux : poussière de gypse, résidus de peinture, autocollants, poussière dans les armoires et les conduits. Le mandat se termine quand l’espace est prêt à occuper, pas quand il est balayé.",
			body: "La poussière de gypse est le problème réel d’un nettoyage post-chantier. Elle est assez fine pour rester en suspension des heures et redescendre sur des surfaces déjà nettoyées. C’est pourquoi le travail se fait de haut en bas et en deux passes, avec un délai entre les deux — un chantier nettoyé en une seule passe redevient poussiéreux le lendemain matin.",
			included: [
				{
					label: 'Dépoussiérage complet',
					detail: 'Plafonds, conduits apparents, luminaires, cadres de porte, plinthes et rebords de fenêtre.'
				},
				{
					label: 'Vitres et cadrages',
					detail: "Retrait des étiquettes, du calfeutrant et des éclaboussures de peinture, intérieur et extérieur accessible."
				},
				{
					label: 'Armoires et rangements',
					detail: 'Intérieur et extérieur, tablettes, tiroirs et dessus de caissons.'
				},
				{
					label: 'Planchers',
					detail: 'Aspiration industrielle puis lavage; décapage des résidus de plâtre et de colle au besoin.'
				},
				{
					label: 'Salles de bain et cuisine',
					detail: 'Retrait du film de protection, détartrage de la robinetterie neuve, désinfection finale.'
				}
			],
			contract: "Il s’agit toujours d’un mandat ponctuel, facturé au projet. Nous intervenons après le départ des corps de métier — un nettoyage fait pendant que les finisseurs travaillent encore est à refaire. Pour les chantiers d’envergure, nous prévoyons un nettoyage grossier en cours de projet et un nettoyage final à la livraison.",
			frequencies: [
				'Nettoyage final à la livraison',
				'Nettoyage grossier en cours de chantier',
				'Retouche avant la visite de l’inspecteur'
			],
			pricing: "Le prix dépend surtout de l’ampleur des travaux, pas de la superficie. Un rafraîchissement de peinture laisse peu de résidus; une démolition avec pose de gypse en laisse partout, y compris dans des endroits qui ne se voient pas.",
			priceDrivers: [
				'La nature des travaux : peinture, gypse, démolition',
				'La superficie et la hauteur des plafonds',
				'Le nombre de fenêtres et de portes vitrées',
				'La quantité d’armoires et de rangements intégrés',
				"L’état de la protection posée pendant les travaux"
			],
			faqs: [
				{
					q: 'Quand devons-nous vous appeler ?',
					a: "Une fois que tous les corps de métier ont terminé, y compris les retouches de peinture. Si nous passons avant, la poussière générée ensuite annule le travail."
				},
				{
					q: 'Ramassez-vous les débris de construction ?',
					a: "Nous retirons les petits résidus et les rebuts légers. Les débris lourds — gypse, bois, béton — relèvent de l’entrepreneur et doivent être sortis avant notre arrivée."
				},
				{
					q: 'Combien de temps après pouvons-nous emménager ?',
					a: "Immédiatement après la seconde passe. Pour un logement, nous terminons généralement la veille de la prise de possession."
				}
			]
		},
		en: {
			slug: 'post-construction-cleaning',
			h1: 'Post-construction and post-renovation cleaning in Montreal',
			metaTitle: 'Post-Construction Cleaning Montreal | Nett-Med',
			metaDescription:
				'Post-construction and renovation cleaning in Montreal. Drywall dust removal, windows, floors, cabinets. Delivered move-in ready.',
			navLabel: 'Post-construction',
			lede: 'We bring spaces back to usable condition once the trades are finished: drywall dust, paint residue, stickers, dust inside cabinets and ducts. The job ends when the space is ready to occupy, not when it has been swept.',
			body: 'Drywall dust is the real problem in a post-construction clean. It is fine enough to stay airborne for hours and settle back onto surfaces already cleaned. That is why the work runs top-down in two passes with a gap between them — a site cleaned in a single pass is dusty again the next morning.',
			included: [
				{
					label: 'Full dust removal',
					detail: 'Ceilings, exposed ducts, light fixtures, door frames, baseboards and window sills.'
				},
				{
					label: 'Glass and frames',
					detail: 'Removal of labels, caulk and paint spatter, interior and accessible exterior.'
				},
				{
					label: 'Cabinets and storage',
					detail: 'Inside and out, shelves, drawers and cabinet tops.'
				},
				{
					label: 'Floors',
					detail: 'Industrial vacuuming then washing; plaster and adhesive residue stripped as needed.'
				},
				{
					label: 'Bathrooms and kitchen',
					detail: 'Protective film removed, new fixtures descaled, final disinfection.'
				}
			],
			contract: 'This is always one-time work, billed by project. We come in after the trades have left — a clean done while finishers are still working has to be redone. On larger sites we schedule a rough clean mid-project and a final clean at handover.',
			frequencies: ['Final clean at handover', 'Rough clean mid-project', 'Touch-up before inspection'],
			pricing: 'Price depends mostly on the scope of the work, not the square footage. A repaint leaves little residue; a demolition with new drywall leaves it everywhere, including places nobody sees.',
			priceDrivers: [
				'Type of work: paint, drywall, demolition',
				'Area and ceiling height',
				'Number of windows and glass doors',
				'Amount of built-in cabinetry',
				'Condition of the protection laid during construction'
			],
			faqs: [
				{
					q: 'When should we call you in?',
					a: 'Once every trade has finished, including paint touch-ups. If we go in before that, the dust generated afterwards undoes the work.'
				},
				{
					q: 'Do you remove construction debris?',
					a: 'We remove small residue and light waste. Heavy debris — drywall, wood, concrete — is the contractor’s responsibility and must be out before we arrive.'
				},
				{
					q: 'How soon can we move in?',
					a: 'Immediately after the second pass. For a residential unit we usually finish the day before possession.'
				}
			]
		}
	},

	{
		id: 'tapis',
		tier: 2,
		pillar: 'specialized',
		related: ['bureaux', 'planchers', 'commercial'],
		fr: {
			slug: 'nettoyage-de-tapis',
			h1: 'Nettoyage de tapis à Montréal',
			metaTitle: 'Nettoyage de tapis Montréal | Nett-Med',
			metaDescription:
				'Nettoyage de tapis commercial et résidentiel à Montréal : extraction à l’eau chaude, détachage, traitement des odeurs. Séchage en quelques heures.',
			navLabel: 'Nettoyage de tapis',
			lede: "Nous nettoyons les tapis de bureaux, de corridors d’immeubles et de résidences par extraction à l’eau chaude. Le tapis est prêt à marcher en quelques heures, pas le lendemain.",
			body: "Un tapis commercial ne s’use pas : il se remplit. Le sable rapporté de l’extérieur descend au fond des fibres et agit comme un abrasif à chaque pas, ce qui use le tapis de l’intérieur. Un shampooing annuel n’est pas cosmétique, il prolonge concrètement la durée de vie du revêtement.",
			included: [
				{
					label: 'Aspiration préalable',
					detail: 'Passage en profondeur pour retirer le sable sec avant toute application d’eau.'
				},
				{
					label: 'Détachage ciblé',
					detail: 'Traitement des taches de café, d’encre et de nourriture avant le nettoyage général.'
				},
				{
					label: 'Extraction à l’eau chaude',
					detail: 'Injection et récupération immédiate, sans laisser de résidu savonneux qui resalit le tapis.'
				},
				{
					label: 'Zones de passage',
					detail: 'Traitement renforcé des entrées, corridors et devants d’ascenseur.'
				},
				{
					label: 'Séchage accéléré',
					detail: 'Ventilateurs mis en place pour ramener le tapis à un état marchable rapidement.'
				}
			],
			contract: "Pour un bureau ou un immeuble, le nettoyage de tapis se planifie une à deux fois par année et s’ajoute au contrat d’entretien courant. Pour le résidentiel, c’est un mandat ponctuel, souvent lié à un déménagement ou à une fin de bail.",
			frequencies: [
				'Deux fois par année en milieu achalandé',
				'Une fois par année en bureau standard',
				'Ponctuel, fin de bail ou déménagement'
			],
			pricing: "Le prix se calcule à la superficie de tapis, avec un minimum de déplacement. Le détachage et le traitement des odeurs sont facturés à part parce qu’ils demandent du temps qui n’a rien à voir avec la surface.",
			priceDrivers: [
				'La superficie de tapis',
				'Le nombre et le type de taches',
				'Le mobilier à déplacer',
				"Le traitement des odeurs, s’il y a lieu",
				"L’accès à l’eau et à l’électricité"
			],
			faqs: [
				{
					q: 'Combien de temps avant de pouvoir marcher dessus ?',
					a: "Deux à quatre heures avec ventilation, davantage dans un local humide ou sans circulation d’air. Nous planifions habituellement le nettoyage un vendredi soir pour un bureau."
				},
				{
					q: 'Toutes les taches partent-elles ?',
					a: "Non. Le café, le vin et l’encre partent souvent; l’eau de javel et certaines teintures ont retiré la couleur de la fibre de façon permanente et aucun nettoyage ne les ramène. Nous vous le disons avant de commencer."
				},
				{
					q: 'Déplacez-vous les meubles ?',
					a: 'Nous déplaçons le mobilier léger. Les classeurs pleins, les postes de travail fixes et les équipements lourds restent en place et nous nettoyons autour.'
				}
			]
		},
		en: {
			slug: 'carpet-cleaning',
			h1: 'Carpet cleaning in Montreal',
			metaTitle: 'Carpet Cleaning Montreal | Nett-Med',
			metaDescription:
				'Commercial and residential carpet cleaning in Montreal: hot water extraction, spot treatment, odour control. Dry in a few hours.',
			navLabel: 'Carpet cleaning',
			lede: 'We clean carpet in offices, building corridors and homes by hot water extraction. The carpet is walkable in a few hours, not the next day.',
			body: 'Commercial carpet does not wear out so much as fill up. Sand tracked in from outside settles to the base of the fibre and acts as an abrasive with every step, wearing the carpet from the inside. An annual deep clean is not cosmetic — it measurably extends the life of the floor covering.',
			included: [
				{
					label: 'Pre-vacuuming',
					detail: 'Deep pass to lift dry sand before any water is applied.'
				},
				{
					label: 'Spot treatment',
					detail: 'Coffee, ink and food stains treated before the general clean.'
				},
				{
					label: 'Hot water extraction',
					detail: 'Injected and immediately recovered, leaving no soapy residue to re-soil the carpet.'
				},
				{
					label: 'Traffic lanes',
					detail: 'Heavier treatment at entrances, corridors and elevator approaches.'
				},
				{
					label: 'Accelerated drying',
					detail: 'Air movers set up to return the carpet to a walkable state quickly.'
				}
			],
			contract: 'For an office or building, carpet cleaning is scheduled once or twice a year and added to the standing maintenance contract. For homes it is one-time work, usually tied to a move or end of lease.',
			frequencies: [
				'Twice a year in high-traffic spaces',
				'Once a year in a standard office',
				'One-time, end of lease or move'
			],
			pricing: 'Priced by carpet area with a minimum call-out. Spot treatment and odour work are billed separately because they take time unrelated to the surface area.',
			priceDrivers: [
				'Carpet area',
				'Number and type of stains',
				'Furniture to be moved',
				'Odour treatment, if required',
				'Access to water and power'
			],
			faqs: [
				{
					q: 'How long before we can walk on it?',
					a: 'Two to four hours with ventilation, longer in a humid space or without airflow. For offices we usually schedule on a Friday evening.'
				},
				{
					q: 'Do all stains come out?',
					a: 'No. Coffee, wine and ink often do; bleach and some dyes have permanently stripped colour from the fibre and no cleaning brings it back. We tell you before we start.'
				},
				{
					q: 'Do you move furniture?',
					a: 'We move light furniture. Full filing cabinets, fixed workstations and heavy equipment stay put and we clean around them.'
				}
			]
		}
	},

	{
		id: 'cliniques',
		tier: 2,
		pillar: 'commercial',
		related: ['commercial', 'garderies', 'bureaux'],
		fr: {
			slug: 'nettoyage-cliniques-medicales',
			h1: 'Nettoyage de cliniques médicales et dentaires à Montréal',
			metaTitle: 'Nettoyage de clinique médicale Montréal | Nett-Med',
			metaDescription:
				'Entretien de cliniques médicales, dentaires et paramédicales à Montréal. Désinfection des salles d’examen, aires d’attente et sanitaires.',
			navLabel: 'Cliniques médicales',
			lede: "Nous entretenons des cliniques médicales, dentaires, de physiothérapie et de podiatrie à Montréal. Le protocole distingue clairement les zones administratives des zones de soins, avec du matériel dédié à chacune.",
			body: "Dans une clinique, la faute la plus commune n’est pas de mal nettoyer, c’est de transporter la contamination d’une pièce à l’autre avec le même chiffon. Nous utilisons un code de couleurs strict — un linge par zone, jamais réutilisé entre une salle d’examen et une aire commune — et nos employés reçoivent une formation précise sur les temps de contact des désinfectants, qui ne fonctionnent pas si on essuie trop vite.",
			included: [
				{
					label: 'Salles d’examen',
					detail: 'Table d’examen, comptoirs, poignées, interrupteurs et lampe désinfectés entre chaque nettoyage.'
				},
				{
					label: 'Aire d’attente',
					detail: 'Chaises, accoudoirs, jouets, comptoir de réception et surfaces vitrées.'
				},
				{
					label: 'Sanitaires',
					detail: 'Désinfection complète, réapprovisionnement, contrôle des odeurs.'
				},
				{
					label: 'Planchers',
					detail: 'Lavage avec désinfectant homologué, attention aux joints et aux coins.'
				},
				{
					label: 'Déchets',
					detail: 'Déchets généraux retirés. Les déchets biomédicaux restent sous votre protocole et ne sont pas manipulés par nous.'
				}
			],
			contract: "Presque toutes les cliniques fonctionnent en contrat quotidien ou cinq jours par semaine, après la fermeture. Nous fixons l’horaire pour que le nettoyage soit terminé avant l’ouverture du lendemain matin.",
			frequencies: ['Cinq soirs par semaine', 'Trois soirs par semaine', 'Grand ménage périodique'],
			pricing: "Une clinique se facture au nombre de salles d’examen plus qu’à la superficie, parce que chaque salle demande un protocole complet indépendamment de sa taille.",
			priceDrivers: [
				'Le nombre de salles d’examen ou d’opératoires',
				'Le nombre de sanitaires',
				'La superficie de l’aire d’attente',
				'Le type de revêtement de plancher',
				'La fréquence des visites'
			],
			faqs: [
				{
					q: 'Manipulez-vous les déchets biomédicaux ?',
					a: "Non. Les contenants jaunes et les objets piquants relèvent de votre protocole et de votre fournisseur autorisé. Nous retirons uniquement les déchets généraux et le recyclage."
				},
				{
					q: 'Quels désinfectants utilisez-vous ?',
					a: "Des désinfectants homologués par Santé Canada avec un numéro DIN. Si votre ordre professionnel ou votre assureur impose un produit précis, nous l’utilisons et conservons les fiches signalétiques sur place."
				},
				{
					q: 'Vos employés sont-ils formés pour un milieu de soins ?',
					a: "Oui, sur le code de couleurs, la séquence de nettoyage du propre vers le sale et les temps de contact. Un désinfectant essuyé avant son temps de contact n’a pas désinfecté."
				}
			]
		},
		en: {
			slug: 'medical-clinic-cleaning',
			h1: 'Medical and dental clinic cleaning in Montreal',
			metaTitle: 'Medical Clinic Cleaning Montreal | Nett-Med',
			metaDescription:
				'Cleaning for medical, dental and paramedical clinics in Montreal. Disinfection of exam rooms, waiting areas and washrooms.',
			navLabel: 'Medical clinics',
			lede: 'We maintain medical, dental, physiotherapy and podiatry clinics across Montreal. The protocol keeps administrative areas and care areas clearly separated, with dedicated materials for each.',
			body: 'In a clinic the most common failure is not poor cleaning — it is carrying contamination from one room to the next on the same cloth. We use a strict colour-coding system, one cloth per zone and never reused between an exam room and a common area, and our staff are trained on disinfectant contact times, which do nothing if the surface is wiped dry too soon.',
			included: [
				{
					label: 'Exam rooms',
					detail: 'Exam table, counters, handles, switches and lamp disinfected on every clean.'
				},
				{
					label: 'Waiting area',
					detail: 'Chairs, armrests, toys, reception counter and glass surfaces.'
				},
				{
					label: 'Washrooms',
					detail: 'Full disinfection, restocking, odour control.'
				},
				{
					label: 'Floors',
					detail: 'Washed with registered disinfectant, with attention to grout lines and corners.'
				},
				{
					label: 'Waste',
					detail: 'General waste removed. Biomedical waste stays under your protocol and is not handled by us.'
				}
			],
			contract: 'Nearly all clinics run a daily or five-day contract after closing. We set the schedule so cleaning is finished before you open the following morning.',
			frequencies: ['Five evenings a week', 'Three evenings a week', 'Periodic deep clean'],
			pricing: 'A clinic is priced by exam room count more than by area, because each room requires the full protocol regardless of its size.',
			priceDrivers: [
				'Number of exam or operatory rooms',
				'Number of washrooms',
				'Waiting area size',
				'Floor surface type',
				'Visit frequency'
			],
			faqs: [
				{
					q: 'Do you handle biomedical waste?',
					a: 'No. Yellow containers and sharps fall under your protocol and your licensed provider. We remove general waste and recycling only.'
				},
				{
					q: 'Which disinfectants do you use?',
					a: 'Health Canada registered disinfectants carrying a DIN. If your professional order or insurer requires a specific product, we use it and keep the safety data sheets on site.'
				},
				{
					q: 'Are your staff trained for a care environment?',
					a: 'Yes — on colour coding, cleaning sequence from clean to dirty, and contact times. A disinfectant wiped off before its contact time has not disinfected.'
				}
			]
		}
	},

	{
		id: 'garderies',
		tier: 2,
		pillar: 'commercial',
		related: ['cliniques', 'commercial', 'planchers'],
		fr: {
			slug: 'nettoyage-garderies-ecoles',
			h1: "Nettoyage de garderies et d’écoles à Montréal",
			metaTitle: 'Nettoyage de garderie Montréal | Nett-Med',
			metaDescription:
				'Entretien de garderies, CPE et écoles à Montréal. Désinfection des jouets, tables, sanitaires et aires de jeu. Produits sans parfum ajouté.',
			navLabel: 'Garderies et écoles',
			lede: "Nous entretenons des garderies, des CPE et des écoles à Montréal et en périphérie. Le nettoyage se fait après le départ des enfants, avec des produits sans parfum ajouté et un rinçage systématique des surfaces que les enfants portent à la bouche.",
			body: "Dans un milieu de garde, tout ce qui se trouve à moins d’un mètre du sol est une surface de contact. Les pattes de table, le bas des murs, les poignées basses et les jouets circulent de main en main toute la journée. Notre routine part du sol et monte, à l’inverse d’un nettoyage de bureau, parce que c’est là que se trouve l’essentiel du risque.",
			included: [
				{
					label: 'Tables et chaises',
					detail: 'Désinfection des dessus, dessous et pattes, là où les mains se posent réellement.'
				},
				{
					label: 'Jouets et surfaces de jeu',
					detail: 'Désinfection et rinçage des jouets durs selon la rotation que vous établissez.'
				},
				{
					label: 'Sanitaires et tables à langer',
					detail: 'Désinfection complète, petites toilettes et lavabos à hauteur d’enfant inclus.'
				},
				{
					label: 'Planchers et tapis de jeu',
					detail: 'Aspiration et lavage; désinfection des surfaces où les enfants s’assoient.'
				},
				{
					label: 'Points de contact bas',
					detail: 'Poignées, interrupteurs, rampes et bas de murs jusqu’à hauteur d’enfant.'
				}
			],
			contract: "Les garderies fonctionnent en contrat quotidien, en soirée. Nous ajoutons un grand ménage pendant les fermetures — congé des Fêtes, semaine de relâche, deux semaines de vacances estivales — pour le décapage des planchers et le lavage en profondeur.",
			frequencies: [
				'Cinq soirs par semaine',
				'Grand ménage aux périodes de fermeture',
				'Désinfection renforcée en période d’éclosion'
			],
			pricing: "Le nombre de groupes et de locaux compte plus que la superficie totale, puisque chaque local a ses tables, ses jouets et souvent sa propre salle de bain.",
			priceDrivers: [
				'Le nombre de groupes et de locaux',
				'Le nombre de salles de bain et de tables à langer',
				'La superficie des aires communes',
				'Le type de plancher',
				'Les grands ménages de fermeture'
			],
			faqs: [
				{
					q: 'Quels produits utilisez-vous près des enfants ?',
					a: "Des désinfectants homologués sans parfum ajouté, appliqués après le départ des enfants et rincés sur toute surface portée à la bouche. Nous laissons les fiches signalétiques sur place."
				},
				{
					q: 'Pouvez-vous intervenir pendant une éclosion ?',
					a: 'Oui. Nous ajoutons des passages et concentrons la désinfection sur les points de contact bas et les sanitaires, aussi longtemps que la direction le juge nécessaire.'
				},
				{
					q: 'Nettoyez-vous les jouets ?',
					a: "Les jouets durs, oui, selon la rotation que vous établissez. Les jouets en tissu et les peluches doivent passer à la laveuse et relèvent de votre équipe."
				}
			]
		},
		en: {
			slug: 'daycare-school-cleaning',
			h1: 'Daycare and school cleaning in Montreal',
			metaTitle: 'Daycare Cleaning Montreal | Nett-Med',
			metaDescription:
				'Cleaning for daycares, CPEs and schools in Montreal. Disinfection of toys, tables, washrooms and play areas. Fragrance-free products.',
			navLabel: 'Daycares and schools',
			lede: 'We maintain daycares, CPEs and schools in Montreal and the surrounding area. Cleaning happens after the children leave, using products with no added fragrance and systematic rinsing of any surface children put in their mouths.',
			body: 'In a childcare setting, everything below waist height is a touch surface. Table legs, lower walls, low handles and toys pass hand to hand all day. Our routine starts at floor level and works up — the reverse of an office clean — because that is where the actual risk sits.',
			included: [
				{
					label: 'Tables and chairs',
					detail: 'Tops, undersides and legs disinfected, where hands actually land.'
				},
				{
					label: 'Toys and play surfaces',
					detail: 'Hard toys disinfected and rinsed on the rotation you set.'
				},
				{
					label: 'Washrooms and change tables',
					detail: 'Full disinfection, including child-height toilets and sinks.'
				},
				{
					label: 'Floors and play mats',
					detail: 'Vacuumed and washed; surfaces children sit on are disinfected.'
				},
				{
					label: 'Low touch points',
					detail: 'Handles, switches, railings and lower walls up to child height.'
				}
			],
			contract: 'Daycares run a daily evening contract. We add deep cleans during closures — the holiday break, spring break, two weeks in summer — for floor stripping and detailed washing.',
			frequencies: [
				'Five evenings a week',
				'Deep clean during closure periods',
				'Enhanced disinfection during an outbreak'
			],
			pricing: 'Room and group count matters more than total area, since each room has its own tables, toys and often its own washroom.',
			priceDrivers: [
				'Number of groups and rooms',
				'Number of washrooms and change tables',
				'Size of common areas',
				'Floor type',
				'Closure-period deep cleans'
			],
			faqs: [
				{
					q: 'What products do you use around children?',
					a: 'Registered disinfectants with no added fragrance, applied after children have left and rinsed on any surface that goes in a mouth. We leave the safety data sheets on site.'
				},
				{
					q: 'Can you step up service during an outbreak?',
					a: 'Yes. We add visits and concentrate disinfection on low touch points and washrooms for as long as management considers it necessary.'
				},
				{
					q: 'Do you clean toys?',
					a: 'Hard toys, yes, on the rotation you set. Fabric toys and plush need to go through a washing machine and stay with your team.'
				}
			]
		}
	},

	{
		id: 'planchers',
		tier: 2,
		pillar: 'specialized',
		related: ['immeubles', 'commercial', 'tapis'],
		fr: {
			slug: 'decapage-cirage-planchers',
			h1: 'Décapage et cirage de planchers à Montréal',
			metaTitle: 'Décapage et cirage de plancher Montréal | Nett-Med',
			metaDescription:
				'Décapage, cirage et polissage de planchers commerciaux à Montréal. Vinyle, VCT, terrazzo, béton. Travaux de soir et de fin de semaine.',
			navLabel: 'Décapage et cirage',
			lede: "Nous décapons, cirons et polissons les planchers commerciaux : vinyle, VCT, terrazzo et béton. Les travaux se font le soir ou la fin de semaine, parce qu’un plancher fraîchement ciré demande plusieurs heures avant d’accepter la circulation.",
			body: "Un plancher de vinyle qui jaunit n’est pas usé, il est chargé : les couches de cire accumulées piègent la saleté et perdent leur transparence. Le décapage retire tout jusqu’au revêtement nu avant la réapplication. C’est plus long qu’un simple polissage, mais c’est la seule opération qui redonne réellement la couleur d’origine.",
			included: [
				{
					label: 'Décapage complet',
					detail: 'Retrait chimique et mécanique de toutes les couches de cire existantes.'
				},
				{
					label: 'Neutralisation et rinçage',
					detail: 'Étape sautée par beaucoup : sans elle, la nouvelle cire n’adhère pas et pèle en quelques semaines.'
				},
				{
					label: 'Application de scellant et de fini',
					detail: 'Trois à cinq couches selon l’achalandage, avec séchage complet entre chacune.'
				},
				{
					label: 'Polissage haute vitesse',
					detail: 'Entretien périodique du lustre entre deux décapages, sans réapplication complète.'
				},
				{
					label: 'Protection des bordures',
					detail: 'Plinthes et cadrages protégés puis nettoyés des résidus de décapant.'
				}
			],
			contract: "Le décapage complet se fait une fois par année ou aux deux ans. Entre les deux, un polissage trimestriel maintient le lustre à une fraction du coût. Pour les immeubles et les bureaux sous contrat, nous planifions ces travaux dans le calendrier annuel dès la signature.",
			frequencies: [
				'Décapage complet annuel ou biennal',
				'Polissage trimestriel',
				'Récurage et recirage partiel des zones de passage'
			],
			pricing: "Le prix se calcule au pied carré, mais l’état de départ change tout : un plancher entretenu chaque année se décape en une passe, un plancher négligé depuis huit ans en demande deux et le résultat reste imparfait.",
			priceDrivers: [
				'La superficie',
				"L’état et l’épaisseur des couches existantes",
				'Le nombre de couches de fini demandées',
				'Le mobilier à déplacer',
				"L’accès en dehors des heures d’ouverture"
			],
			faqs: [
				{
					q: 'Combien de temps le plancher est-il inutilisable ?',
					a: "Comptez de 8 à 12 heures entre la dernière couche et la reprise normale de la circulation. C’est pourquoi nous exécutons presque toujours ces travaux du vendredi soir au dimanche."
				},
				{
					q: 'Peut-on cirer sans décaper ?',
					a: "Oui, mais seulement si les couches en place sont saines. Appliquer une cire neuve sur des couches jaunies scelle la saleté en dessous et le plancher paraît pire après."
				},
				{
					q: 'Traitez-vous le béton poli et le terrazzo ?',
					a: 'Oui. Ces surfaces ne se cirent pas de la même façon — le terrazzo se polit et se scelle, le béton se traite au densifieur. Nous confirmons la méthode sur place.'
				}
			]
		},
		en: {
			slug: 'floor-stripping-waxing',
			h1: 'Floor stripping and waxing in Montreal',
			metaTitle: 'Floor Stripping & Waxing Montreal | Nett-Med',
			metaDescription:
				'Commercial floor stripping, waxing and polishing in Montreal. Vinyl, VCT, terrazzo, concrete. Evening and weekend work.',
			navLabel: 'Floor stripping and waxing',
			lede: 'We strip, wax and polish commercial floors: vinyl, VCT, terrazzo and concrete. The work runs evenings or weekends, because a freshly waxed floor needs several hours before it will take traffic.',
			body: 'A yellowing vinyl floor is not worn out, it is loaded: accumulated wax layers trap dirt and lose their clarity. Stripping removes everything down to bare surface before recoating. It takes longer than a simple buff, but it is the only operation that genuinely restores the original colour.',
			included: [
				{
					label: 'Full strip',
					detail: 'Chemical and mechanical removal of every existing wax layer.'
				},
				{
					label: 'Neutralize and rinse',
					detail: 'The step most often skipped: without it the new wax will not bond and peels within weeks.'
				},
				{
					label: 'Sealer and finish',
					detail: 'Three to five coats depending on traffic, fully dried between each.'
				},
				{
					label: 'High-speed burnishing',
					detail: 'Periodic gloss maintenance between strips, without a full recoat.'
				},
				{
					label: 'Edge protection',
					detail: 'Baseboards and frames masked, then cleaned of stripper residue.'
				}
			],
			contract: 'A full strip happens annually or every two years. Between them, quarterly burnishing maintains gloss at a fraction of the cost. For buildings and offices under contract we schedule this into the annual calendar at signing.',
			frequencies: [
				'Annual or biennial full strip',
				'Quarterly burnishing',
				'Scrub and recoat of traffic lanes'
			],
			pricing: 'Priced per square foot, but starting condition changes everything: a floor maintained yearly strips in one pass; one neglected for eight years takes two and still will not be perfect.',
			priceDrivers: [
				'Square footage',
				'Condition and thickness of existing coats',
				'Number of finish coats requested',
				'Furniture to be moved',
				'After-hours building access'
			],
			faqs: [
				{
					q: 'How long is the floor out of service?',
					a: 'Allow 8 to 12 hours between the final coat and normal traffic. That is why we almost always run this work from Friday evening through Sunday.'
				},
				{
					q: 'Can you wax without stripping?',
					a: 'Yes, but only if the existing coats are sound. Putting fresh wax over yellowed layers seals the dirt underneath and the floor looks worse afterwards.'
				},
				{
					q: 'Do you handle polished concrete and terrazzo?',
					a: 'Yes. These do not take wax the same way — terrazzo is polished and sealed, concrete is treated with a densifier. We confirm the method on site.'
				}
			]
		}
	},

	{
		id: 'vitres',
		tier: 2,
		pillar: 'specialized',
		related: ['bureaux', 'commercial', 'apres-construction'],
		fr: {
			slug: 'lavage-de-vitres',
			h1: 'Lavage de vitres à Montréal',
			metaTitle: 'Lavage de vitres Montréal | Nett-Med',
			metaDescription:
				'Lavage de vitres commercial et résidentiel à Montréal. Vitrines, façades accessibles, portes vitrées, intérieur et extérieur. Sans traces.',
			navLabel: 'Lavage de vitres',
			lede: "Nous lavons les vitrines commerciales, les portes vitrées, les cloisons intérieures et les fenêtres accessibles depuis le sol ou une échelle. Intérieur, extérieur, cadres et rebords compris.",
			body: "La trace laissée sur une vitre vient rarement du produit : elle vient du linge, de l’eau dure ou du soleil qui sèche la surface avant qu’on ait fini de l’essuyer. Nous lavons à la raclette avec de l’eau adoucie et nous évitons les façades exposées en plein soleil, quitte à revenir plus tôt le lendemain.",
			included: [
				{
					label: 'Vitrines et portes',
					detail: 'Intérieur et extérieur, poignées et plaques de poussée comprises.'
				},
				{
					label: 'Cadres et rebords',
					detail: 'Rails, cadrages et rebords essuyés — sans cela, la première pluie redescend sur la vitre propre.'
				},
				{
					label: 'Cloisons intérieures',
					detail: 'Séparateurs vitrés de bureau et salles de conférence, sans traces de doigts.'
				},
				{
					label: 'Moustiquaires',
					detail: 'Retrait, lavage et remise en place sur demande, pour le résidentiel.'
				}
			],
			contract: "Les commerces avec vitrine sur rue optent en général pour un passage aux deux semaines ou mensuel. Les bureaux et les immeubles font laver l’ensemble des vitres deux fois par année, au printemps et à l’automne.",
			frequencies: [
				'Aux deux semaines pour les vitrines commerciales',
				'Mensuel',
				'Deux fois par année, printemps et automne'
			],
			pricing: "Le prix se calcule au nombre de sections de vitre plutôt qu’à la superficie, et l’accessibilité fait la différence : une vitre atteignable depuis le sol coûte une fraction d’une vitre qui demande une échelle et un second employé.",
			priceDrivers: [
				'Le nombre de sections de vitre',
				"L’accès : sol, échelle ou perche télescopique",
				'Intérieur seulement ou les deux côtés',
				'Le lavage des moustiquaires',
				'La fréquence des passages'
			],
			faqs: [
				{
					q: 'Lavez-vous les vitres en hauteur ?',
					a: "Nous lavons ce qui est atteignable depuis le sol, une échelle ou une perche télescopique — généralement jusqu’à trois étages. Au-delà, il faut une entreprise spécialisée en travaux en hauteur avec le certificat correspondant."
				},
				{
					q: 'Travaillez-vous en hiver ?',
					a: "Pour l’intérieur, oui, toute l’année. Pour l’extérieur, nous travaillons jusqu’à environ -5 °C avec un produit adapté; au-delà, l’eau gèle sur la vitre et le résultat ne tient pas."
				},
				{
					q: 'Les traces d’eau dure partent-elles ?',
					a: "Les dépôts minéraux récents partent. Un dépôt ancien a gravé le verre et aucun lavage ne le retire — il faut un polissage du verre, qui est un autre métier."
				}
			]
		},
		en: {
			slug: 'window-cleaning',
			h1: 'Window cleaning in Montreal',
			metaTitle: 'Window Cleaning Montreal | Nett-Med',
			metaDescription:
				'Commercial and residential window cleaning in Montreal. Storefronts, accessible facades, glass doors, inside and out. Streak-free.',
			navLabel: 'Window cleaning',
			lede: 'We clean storefront glass, glass doors, interior partitions and windows reachable from the ground or a ladder. Inside, outside, frames and sills included.',
			body: 'Streaks on glass rarely come from the product — they come from the cloth, hard water, or sun drying the surface before you finish the pass. We squeegee with softened water and avoid facades in direct sun, coming back earlier the next day instead.',
			included: [
				{
					label: 'Storefronts and doors',
					detail: 'Inside and out, including handles and push plates.'
				},
				{
					label: 'Frames and sills',
					detail: 'Tracks, frames and sills wiped — skip these and the first rain runs dirt back down the clean glass.'
				},
				{
					label: 'Interior partitions',
					detail: 'Office glass dividers and meeting rooms, free of fingerprints.'
				},
				{
					label: 'Screens',
					detail: 'Removed, washed and reinstalled on request, for residential work.'
				}
			],
			contract: 'Retail with street-facing glass generally chooses biweekly or monthly service. Offices and buildings have all glass cleaned twice a year, spring and fall.',
			frequencies: ['Biweekly for storefronts', 'Monthly', 'Twice a year, spring and fall'],
			pricing: 'Priced by number of glass sections rather than area, and access is the deciding factor: glass reachable from the ground costs a fraction of glass needing a ladder and a second worker.',
			priceDrivers: [
				'Number of glass sections',
				'Access: ground, ladder or water-fed pole',
				'Interior only or both sides',
				'Screen washing',
				'Visit frequency'
			],
			faqs: [
				{
					q: 'Do you clean high windows?',
					a: 'We clean what is reachable from the ground, a ladder or a water-fed pole — generally up to three storeys. Above that you need a company certified for suspended access work.'
				},
				{
					q: 'Do you work in winter?',
					a: 'Interior, yes, year-round. Exterior, we work down to roughly -5 °C with an adapted solution; below that the water freezes on the glass and the result does not hold.'
				},
				{
					q: 'Do hard water marks come off?',
					a: 'Recent mineral deposits do. Old deposits have etched the glass and no washing removes them — that needs glass polishing, which is a different trade.'
				}
			]
		}
	}
];
