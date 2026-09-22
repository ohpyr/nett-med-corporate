import { getServiceBySlug, services } from '$lib/content';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => services.map((s) => ({ slug: s.fr.slug }));

export const load: PageLoad = ({ params }) => {
	const service = getServiceBySlug(params.slug, 'fr');
	if (!service) error(404, 'Service introuvable');
	return { service };
};
