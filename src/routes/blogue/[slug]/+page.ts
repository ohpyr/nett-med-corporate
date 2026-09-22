import { getPostBySlug, posts } from '$lib/content/posts';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

/** Nothing links to every post, so the prerenderer needs them listed. */
export const entries: EntryGenerator = () => posts.map((p) => ({ slug: p.fr.slug }));

export const load: PageLoad = ({ params }) => {
	const post = getPostBySlug(params.slug, 'fr');
	if (!post) error(404, 'Article introuvable');
	return { post };
};
