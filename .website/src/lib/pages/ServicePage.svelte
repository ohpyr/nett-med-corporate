<script lang="ts">
	import QuoteBand from '$lib/components/QuoteBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import ServiceRows from '$lib/components/ServiceRows.svelte';
	import { business } from '$lib/config';
	import { relatedServices, servicesInPillar, type LocalizedService } from '$lib/content';
	import { routes, servicePath, t, type Locale } from '$lib/i18n';
	import { breadcrumbSchema, faqSchema, serviceSchema } from '$lib/schema';

	interface Props {
		locale: Locale;
		altPath: string;
		service: LocalizedService;
	}

	let { locale, altPath, service }: Props = $props();

	const s = $derived(t[locale]);
	const path = $derived(servicePath(locale, service.slug));
	const related = $derived(relatedServices(service, locale));
	/* A pillar page lists its whole pillar; a leaf page lists its cross-links. */
	const children = $derived(
		service.isPillar === true ? servicesInPillar(service.pillar, locale) : []
	);

	const crumbs = $derived([
		{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
		{ name: s.nav.services, url: routes.services[locale] },
		{ name: service.navLabel, url: path }
	]);

	const schemas = $derived([
		serviceSchema(service, `https://nett-med.ca${path}`),
		breadcrumbSchema(crumbs),
		faqSchema(service.faqs)
	]);
</script>

<Seo
	{locale}
	title={service.metaTitle}
	description={service.metaDescription}
	{path}
	{altPath}
	{schemas}
/>

<article>
	<header class="shell pt-10 pb-section">
		<nav aria-label="fil d’Ariane" class="text-sm text-muted">
			<ol class="flex flex-wrap items-center gap-2">
				{#each crumbs as crumb, i}
					<li class="flex items-center gap-2">
						{#if i < crumbs.length - 1}
							<a href={crumb.url} class="hover:text-blue">{crumb.name}</a>
							<span aria-hidden="true" class="text-rule">/</span>
						{:else}
							<span aria-current="page">{crumb.name}</span>
						{/if}
					</li>
				{/each}
			</ol>
		</nav>

		<h1 class="mt-7 max-w-4xl text-h1 font-semibold">{service.h1}</h1>
		<p class="mt-6 max-w-2xl text-lead text-muted">{service.lede}</p>

		{#if service.body}
			<p class="measure mt-5 text-muted">{service.body}</p>
		{/if}

		<div class="mt-9 flex flex-col gap-3 sm:flex-row">
			<a
				href={routes.quote[locale]}
				class="bg-blue px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-ink"
			>
				{s.cta.quote}
			</a>
			<a
				href="tel:{business.phoneHref}"
				class="border border-rule px-6 py-3.5 text-center font-semibold text-ink tabular-nums transition-colors hover:border-blue hover:text-blue"
			>
				{business.phone}
			</a>
		</div>
	</header>

	<section class="bg-paper-tint">
		<div class="shell py-section">
			<h2 class="text-h2 font-semibold">{s.sections.included}</h2>
			<dl class="row-list mt-9">
				{#each service.included as item}
					<div class="grid gap-1.5 py-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8">
						<dt class="text-h3 font-semibold">{item.label}</dt>
						<dd class="text-muted">{item.detail}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</section>

	<section class="shell py-section">
		<div class="grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
			<h2 class="text-h2 font-semibold">{s.sections.contract}</h2>
			<div class="measure">
				<p class="text-muted">{service.contract}</p>
				<ul class="row-list mt-7">
					{#each service.frequencies as frequency}
						<li class="py-3">{frequency}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<section class="bg-paper-tint">
		<div class="shell py-section">
			<div class="grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
				<h2 class="text-h2 font-semibold">{s.sections.pricing}</h2>
				<div class="measure">
					<p class="text-muted">{service.pricing}</p>
					<ul class="row-list mt-7">
						{#each service.priceDrivers as driver}
							<li class="py-3">{driver}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Answers rendered as plain text rather than accordions: collapsed content
	     hides the exact wording that earns a featured snippet, and an accordion
	     is one more thing to click for no benefit. -->
	<section class="shell py-section">
		<h2 class="text-h2 font-semibold">{s.sections.faq}</h2>
		<div class="row-list mt-9">
			{#each service.faqs as faq}
				<div class="grid gap-2 py-7 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-10">
					<h3 class="text-h3 font-semibold">{faq.q}</h3>
					<p class="text-muted">{faq.a}</p>
				</div>
			{/each}
		</div>
	</section>

	{#if children.length > 0}
		<section class="shell pb-section">
			<h2 class="text-h2 font-semibold">
				{service.pillar === 'residential'
					? s.sections.residentialServices
					: s.sections.commercialServices}
			</h2>
			<div class="mt-9 rule-top">
				<ServiceRows {locale} items={children} />
			</div>
		</section>
	{:else if related.length > 0}
		<section class="shell pb-section">
			<h2 class="text-h2 font-semibold">{s.sections.related}</h2>
			<div class="mt-9 rule-top">
				<ServiceRows {locale} items={related} />
			</div>
		</section>
	{/if}
</article>

<QuoteBand {locale} />
