<script lang="ts">
	import QuoteBand from '$lib/components/QuoteBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { business } from '$lib/config';
	import { about } from '$lib/content/pages';
	import { routes, t, type Locale } from '$lib/i18n';
	import { breadcrumbSchema, localBusinessSchema } from '$lib/schema';

	interface Props {
		locale: Locale;
		altPath: string;
	}

	let { locale, altPath }: Props = $props();

	const c = $derived(about[locale]);
	const s = $derived(t[locale]);
</script>

<Seo
	{locale}
	title={c.metaTitle}
	description={c.metaDescription}
	path={routes.about[locale]}
	{altPath}
	schemas={[
		localBusinessSchema(locale),
		breadcrumbSchema([
			{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
			{ name: s.nav.about, url: routes.about[locale] }
		])
	]}
/>

<header class="shell pt-12 pb-section">
	<h1 class="max-w-3xl text-h1 font-semibold">{c.h1}</h1>
	<p class="measure mt-6 text-lead text-muted">{c.lede}</p>
</header>

{#each c.sections as section, i}
	<section class={i % 2 === 0 ? 'bg-paper-tint' : ''}>
		<div class="shell py-section">
			<div class="grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
				<h2 class="text-h2 font-semibold">{section.heading}</h2>
				<div class="measure space-y-5 text-muted">
					{#each section.body as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
		</div>
	</section>
{/each}

<section class="shell py-section">
	<h2 class="text-h2 font-semibold">{s.labels.serviceArea}</h2>
	<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-muted">
		{#each business.areaServed as city}
			<li>{city}</li>
		{/each}
	</ul>
</section>

<QuoteBand {locale} />
