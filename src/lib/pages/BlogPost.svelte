<script lang="ts">
	import QuoteBand from '$lib/components/QuoteBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import ServiceRows from '$lib/components/ServiceRows.svelte';
	import { getService, type LocalizedService } from '$lib/content';
	import type { LocalizedPost } from '$lib/content/posts';
	import { routes, t, type Locale } from '$lib/i18n';
	import { articleSchema, breadcrumbSchema } from '$lib/schema';
	import { SITE_URL } from '$lib/config';

	interface Props {
		locale: Locale;
		altPath: string;
		post: LocalizedPost;
	}

	let { locale, altPath, post }: Props = $props();

	const s = $derived(t[locale]);
	const path = $derived(`${routes.blog[locale]}/${post.slug}`);

	const related = $derived(
		post.related
			.map((id) => getService(id, locale))
			.filter((x): x is LocalizedService => x !== undefined)
	);

	const crumbs = $derived([
		{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
		{ name: s.nav.blog, url: routes.blog[locale] },
		{ name: post.title, url: path }
	]);

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
	title={post.metaTitle}
	description={post.metaDescription}
	{path}
	{altPath}
	schemas={[
		articleSchema(
			{ title: post.title, metaDescription: post.metaDescription, published: post.published },
			`${SITE_URL}${path}`,
			locale
		),
		breadcrumbSchema(crumbs)
	]}
/>

<article>
	<header class="shell pt-10 pb-section">
		<nav aria-label={s.nav.blog} class="text-sm text-muted">
			<ol class="flex flex-wrap items-center gap-2">
				{#each crumbs as crumb, i}
					<li class="flex items-center gap-2">
						{#if i < crumbs.length - 1}
							<a href={crumb.url} class="hover:text-blue">{crumb.name}</a>
							<span aria-hidden="true" class="text-rule">/</span>
						{:else}
							<span aria-current="page" class="line-clamp-1">{crumb.name}</span>
						{/if}
					</li>
				{/each}
			</ol>
		</nav>

		<p class="mt-7 text-xs tracking-wide text-muted uppercase">
			{s.labels.published}
			{dateFormat.format(new Date(post.published))} · {post.minutes}
			{s.labels.readTime}
		</p>

		<h1 class="mt-3 max-w-3xl text-h1 font-semibold">{post.title}</h1>
		<p class="measure mt-6 text-lead text-muted">{post.excerpt}</p>
	</header>

	<div class="shell pb-section">
		<div class="measure space-y-6">
			{#each post.blocks as block}
				{#if block.type === 'h2'}
					<h2 class="text-h2 pt-6 font-semibold">{block.text}</h2>
				{:else if block.type === 'p'}
					<p class="text-muted">{block.text}</p>
				{:else if block.type === 'list'}
					<ul class="row-list">
						{#each block.items as item}
							<li class="py-3 text-muted">{item}</li>
						{/each}
					</ul>
				{:else if block.type === 'quote'}
					<figure class="border-l-2 border-green pl-6">
						<blockquote class="text-lead text-ink">{block.text}</blockquote>
						<figcaption class="mt-3 text-sm text-muted">{block.cite}</figcaption>
					</figure>
				{:else if block.type === 'note'}
					<!-- Set apart rather than styled as body copy: it is a disclaimer,
					     and a reader skimming should be able to tell that at a glance. -->
					<p class="rule-top pt-6 text-sm text-muted">{block.text}</p>
				{/if}
			{/each}
		</div>
	</div>

	{#if related.length > 0}
		<section class="bg-paper-tint">
			<div class="shell py-section">
				<h2 class="text-h2 font-semibold">{s.labels.relatedServices}</h2>
				<div class="mt-9 rule-top">
					<ServiceRows {locale} items={related} />
				</div>
			</div>
		</section>
	{/if}

	<div class="shell py-section">
		<a href={routes.blog[locale]} class="text-sm font-semibold text-blue hover:underline">
			← {s.labels.backToBlog}
		</a>
	</div>
</article>

<QuoteBand {locale} />
