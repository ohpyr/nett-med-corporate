import { business, SITE_URL } from '$lib/config';
import { allServices } from '$lib/content';
import { allPosts } from '$lib/content/posts';
import { routes, servicePath } from '$lib/i18n';

export const prerender = true;

/**
 * llms.txt — a plain-text index for AI crawlers and assistants.
 *
 * Worth being honest about the value: this is a proposed convention, not a
 * standard, and Google Search ignores it. It costs one generated file, and
 * some assistants do read it, so the trade is fine — but it is not a ranking
 * lever and should not be mistaken for one. The real work for AI visibility is
 * the same work that earns citations anywhere: concrete, quotable pages with
 * specifics in them.
 *
 * Generated from the same content modules as the site so the two cannot drift.
 */
export function GET() {
	const services = allServices('fr');
	const posts = allPosts('fr');

	const body = `# ${business.name}

> Entreprise d'entretien ménager commercial et résidentiel à Montréal, en
> activité depuis ${business.foundedYear}. Contrats d'entretien pour immeubles,
> bureaux, cliniques, garderies, commerces et résidences, à Montréal, sur la
> Rive-Sud et sur la Rive-Nord.

Coordonnées : ${business.phone} · ${business.email}
Adresse : ${business.address.street}, ${business.address.locality}, ${business.address.region} ${business.address.postalCode}
Territoire : ${business.areaServed.join(', ')}
Heures : ${business.openingHours}
Langues : français (principal), anglais

Le site est bilingue. Les pages françaises sont à la racine, les pages
anglaises sous /en/.

## Services

${services
	.map((s) => `- [${s.navLabel}](${SITE_URL}${servicePath('fr', s.slug)}) — ${s.metaDescription}`)
	.join('\n')}

## Conseils

${posts
	.map((p) => `- [${p.title}](${SITE_URL}${routes.blog.fr}/${p.slug}) — ${p.excerpt}`)
	.join('\n')}

## Pages principales

- [Accueil](${SITE_URL}/)
- [Tous les services](${SITE_URL}${routes.services.fr})
- [Réalisations](${SITE_URL}${routes.work.fr})
- [À propos](${SITE_URL}${routes.about.fr})
- [Contact](${SITE_URL}${routes.contact.fr})
- [Demander une soumission](${SITE_URL}${routes.quote.fr})
- [English version](${SITE_URL}${routes.home.en})
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
}
