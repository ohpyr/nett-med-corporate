import { getPostBySlug, posts } from '$lib/content/posts';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => posts.map((p) => ({ slug: p.en.slug }));

export const load: PageLoad = ({ params }) => {
	const post = getPostBySlug(params.slug, 'en');
	if (!post) error(404, 'Article not found');
	return { post };
};
