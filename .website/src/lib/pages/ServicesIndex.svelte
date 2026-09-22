<script lang="ts">
	import QuoteBand from '$lib/components/QuoteBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import ServiceRows from '$lib/components/ServiceRows.svelte';
	import { pillarService, servicesInPillar } from '$lib/content';
	import { servicesIndex } from '$lib/content/pages';
	import { routes, t, type Locale } from '$lib/i18n';
	import { breadcrumbSchema } from '$lib/schema';

	interface Props {
		locale: Locale;
		altPath: string;
	}

	let { locale, altPath }: Props = $props();

	const c = $derived(servicesIndex[locale]);
	const s = $derived(t[locale]);

	const groups = $derived([
		{
			heading: s.sections.commercialServices,
			items: [pillarService('commercial', locale), ...servicesInPillar('commercial', locale)].filter(
				(x) => x !== undefined
			)
		},
		{
			heading: s.sections.residentialServices,
			items: [
				pillarService('residential', locale),
				...servicesInPillar('residential', locale)
			].filter((x) => x !== undefined)
		},
		{ heading: s.sections.specializedServices, items: servicesInPillar('specialized', locale) }
	]);
</script>

<Seo
	{locale}
	title={c.metaTitle}
	description={c.metaDescription}
	path={routes.services[locale]}
	{altPath}
	schemas={[
		breadcrumbSchema([
			{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
			{ name: s.nav.services, url: routes.services[locale] }
		])
	]}
/>

<header class="shell pt-12 pb-section">
	<h1 class="max-w-3xl text-h1 font-semibold">{c.h1}</h1>
	<p class="measure mt-6 text-lead text-muted">{c.lede}</p>
</header>

{#each groups as group, i}
	<section class={i % 2 === 1 ? 'bg-paper-tint' : ''}>
		<div class="shell py-section">
			<h2 class="text-h2 font-semibold">{group.heading}</h2>
			<div class="mt-9 rule-top">
				<ServiceRows {locale} items={group.items} />
			</div>
		</div>
	</section>
{/each}

<QuoteBand {locale} />
