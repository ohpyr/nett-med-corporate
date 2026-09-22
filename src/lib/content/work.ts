import type { Locale } from '$lib/i18n';

/*
  Job-site photos.

  Imported with `?enhanced` rather than referenced by path string: Vite only
  rewrites asset URLs for imported files, so a bare 'src/lib/assets/...' string
  ships as-is and 404s in the browser. The query hands the file to
  enhanced-img, which emits AVIF/WebP/JPEG at descending widths — the sources
  are 1536×2048 phone photos and would otherwise dominate page weight.

  Widths are pinned rather than left to the plugin's defaults. Defaults halve
  down from the source (1536/768) and emit `1x`/`2x` descriptors — and a
  `sizes` attribute is ignored unless the srcset uses `w` descriptors, so the
  browser would fetch the full 1536px file for a 320px column. 1200/800/400
  covers the widest real slot (88vw on a large phone, ~380 CSS px, at 3x).

  If this width list changes, update the ambient declaration in
  src/enhanced-img.d.ts to match — see the note there.

  TODO(client): two categories below are inferred from the photos, not from
  job records. Confirm or correct them:
   - `clinique` — numbered treatment rooms, glass partitions and a disposables
     box read as a clinic or med-spa. Could equally be a salon.
   - `cuisine-reno` — bare counters in daylight read as a handover clean.
     If it was a deep clean of an occupied home, move it to `grand-menage`.
  Locations are still missing for every job but the first.
*/

import imResidentiel from '$lib/assets/work/im-res.jpg?enhanced&w=1200;800;400';
import clinique from '$lib/assets/work/ap2.jpg?enhanced&w=1200;800;400';
import restaurant from '$lib/assets/work/resto.jpg?enhanced&w=1200;800;400';
import cuisine from '$lib/assets/work/ms.jpg?enhanced&w=1200;800;400';
import appartement from '$lib/assets/work/ap1.jpg?enhanced&w=1200;800;400';

/** The object an `?enhanced` import yields, derived so it cannot drift. */
type EnhancedImage = typeof imResidentiel;

export interface Job {
	id: string;
	image: EnhancedImage | null;
	title: Record<Locale, string>;
	/** null until the real borough is known — never render a placeholder. */
	location: string | null;
	/**
	 * Describes the photograph for screen readers and image search. Kept
	 * separate from `title` because "Immeuble résidentiel" tells someone who
	 * cannot see the image nothing about what is in it.
	 */
	alt: Record<Locale, string>;
	scope: Record<Locale, string>;
	/** id of the related service page, for internal linking. */
	serviceId: string;
}

/* Commercial first, matching the site's stated priority. */
export const jobs: Job[] = [
	{
		id: 'immeuble-cdn',
		image: imResidentiel,
		title: { fr: 'Immeuble résidentiel', en: 'Residential building' },
		location: 'Côte-des-Neiges, Montréal',
		alt: {
			fr: "Corridor d'immeuble résidentiel, plancher de terrazzo lavé et tapis d'entrée noirs devant les portes d'appartement",
			en: 'Residential building corridor with washed terrazzo floor and black entrance mats outside the apartment doors'
		},
		scope: {
			fr: "Nettoyage en profondeur des parties communes d'un immeuble de quatre étages : corridors, entrée, plancher de terrazzo et tapis d'entrée.",
			en: 'Deep clean of the common areas of a four-storey building: corridors, entrance, terrazzo floor and entrance matting.'
		},
		serviceId: 'immeubles'
	},
	{
		id: 'clinique',
		image: clinique,
		title: { fr: 'Clinique privée', en: 'Private clinic' },
		location: null,
		alt: {
			fr: 'Corridor de clinique avec salles de traitement numérotées, cloisons vitrées et plancher de tuile posé en chevron',
			en: 'Clinic corridor with numbered treatment rooms, glass partitions and chevron-laid tile flooring'
		},
		scope: {
			fr: 'Entretien du corridor et des salles de traitement : plancher de tuile, cloisons vitrées sans traces et points de contact désinfectés.',
			en: 'Corridor and treatment room maintenance: tile floor, streak-free glass partitions and disinfected touch points.'
		},
		serviceId: 'cliniques'
	},
	{
		id: 'restaurant',
		image: restaurant,
		title: { fr: 'Restaurant', en: 'Restaurant' },
		location: null,
		alt: {
			fr: 'Salle à manger de restaurant vide après la fermeture, tables dressées et plancher de tuile imitation bois',
			en: 'Empty restaurant dining room after closing, tables set and wood-look tile floor'
		},
		scope: {
			fr: 'Remise en ordre de la salle à manger après la fermeture : planchers, tables, banquettes et chaises replacées avant le service du matin.',
			en: 'Dining room reset after closing: floors, tables, banquettes and chairs put back before the morning service.'
		},
		serviceId: 'restaurants'
	},
	{
		id: 'cuisine-reno',
		image: cuisine,
		title: { fr: 'Cuisine après rénovation', en: 'Kitchen after renovation' },
		location: null,
		alt: {
			fr: 'Cuisine résidentielle neuve, îlot de quartz dégagé et armoires blanches, livrée prête à occuper',
			en: 'Newly finished residential kitchen with a cleared quartz island and white cabinetry, delivered move-in ready'
		},
		scope: {
			fr: "Nettoyage de livraison d'une cuisine neuve : intérieur et extérieur des armoires, îlot de quartz, électroménagers et planchers.",
			en: 'Handover clean of a new kitchen: cabinet interiors and exteriors, quartz island, appliances and floors.'
		},
		serviceId: 'apres-construction'
	},
	{
		id: 'appartement',
		image: appartement,
		title: { fr: 'Appartement', en: 'Apartment' },
		location: null,
		alt: {
			fr: "Salon d'appartement montréalais avec plancher de bois franc poli, mur de brique apparente et cuisine ouverte à l'arrière",
			en: 'Montreal apartment living room with polished hardwood floor, exposed brick wall and an open kitchen beyond'
		},
		scope: {
			fr: "Grand ménage d'un appartement : planchers de bois franc, aires de vie, salle à manger et cuisine ouverte.",
			en: 'Deep clean of an apartment: hardwood floors, living areas, dining room and open kitchen.'
		},
		serviceId: 'grand-menage'
	}
];
