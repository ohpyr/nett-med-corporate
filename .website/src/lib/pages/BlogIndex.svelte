<script lang="ts">
	import QuoteBand from '$lib/components/QuoteBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { blogIndex } from '$lib/content/pages';
	import { allPosts } from '$lib/content/posts';
	import { routes, t, type Locale } from '$lib/i18n';
	import { breadcrumbSchema } from '$lib/schema';

	interface Props {
		locale: Locale;
		altPath: string;
	}

	let { locale, altPath }: Props = $props();

	const c = $derived(blogIndex[locale]);
	const s = $derived(t[locale]);
	const items = $derived(allPosts(locale));

	const dateFormat = $derived(
		new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<Seo
	{locale}
	title={c.metaTitle}
	description={c.metaDescription}
	path={routes.blog[locale]}
	{altPath}
	schemas={[
		breadcrumbSchema([
			{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
			{ name: s.nav.blog, url: routes.blog[locale] }
		])
	]}
/>

<header class="shell pt-12 pb-section">
	<h1 class="max-w-3xl text-h1 font-semibold">{c.h1}</h1>
	<p class="measure mt-6 text-lead text-muted">{c.lede}</p>
</header>

<section class="shell pb-section">
	<ul class="row-list rule-top">
		{#each items as post (post.id)}
			<li>
				<a href="{routes.blog[locale]}/{post.slug}" class="group grid gap-3 py-8">
					<span class="text-xs tracking-wide text-muted uppercase">
						{dateFormat.format(new Date(post.published))} · {post.minutes}
						{s.labels.readTime}
					</span>
					<h2 class="max-w-3xl text-h3 font-semibold transition-colors group-hover:text-blue">
						{post.title}
					</h2>
					<p class="measure text-muted">{post.excerpt}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>

<QuoteBand {locale} />
