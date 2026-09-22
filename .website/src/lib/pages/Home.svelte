<script lang="ts">
	import QuoteBand from '$lib/components/QuoteBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import ServiceRows from '$lib/components/ServiceRows.svelte';
	import { business, testimonials } from '$lib/config';
	import { pillarService, servicesInPillar } from '$lib/content';
	import { home } from '$lib/content/pages';
	import { routes, servicePath, t, type Locale } from '$lib/i18n';
	import { localBusinessSchema, webSiteSchema } from '$lib/schema';

	interface Props {
		locale: Locale;
		altPath: string;
	}

	let { locale, altPath }: Props = $props();

	const c = $derived(home[locale]);
	const s = $derived(t[locale]);
	const commercialPillar = $derived(pillarService('commercial', locale));
	const residentialPillar = $derived(pillarService('residential', locale));
	const commercial = $derived(servicesInPillar('commercial', locale));
	const residential = $derived(servicesInPillar('residential', locale));
	const specialized = $derived(servicesInPillar('specialized', locale));
</script>

<Seo
	{locale}
	title={c.metaTitle}
	description={c.metaDescription}
	path={routes.home[locale]}
	{altPath}
	schemas={[localBusinessSchema(locale), webSiteSchema(locale)]}
/>

<!-- Hero. Acquire’s formula: say literally what the business is, for whom and
     where, then one CTA, then hard numbers. No metaphor, no mission statement,
     no stock photograph of someone holding a spray bottle. -->
<section class="bg-ink text-white">
	<div class="shell pt-section-lg pb-section">
		<div class="h-0.5 w-16 bg-green-bright" aria-hidden="true"></div>

		<h1 class="mt-8 max-w-4xl text-display font-semibold">
			{c.h1}
		</h1>

		<p class="mt-7 max-w-2xl text-lead text-white/75">
			{c.lede}
		</p>

		<div class="mt-10 flex flex-col gap-3 sm:flex-row">
			<a
				href={routes.quote[locale]}
				class="bg-white px-7 py-4 text-center font-semibold text-ink transition-colors hover:bg-green-bright"
			>
				{s.cta.quote}
			</a>
			<a
				href="tel:{business.phoneHref}"
				class="border border-white/30 px-7 py-4 text-center font-semibold text-white tabular-nums transition-colors hover:bg-white/10"
			>
				{business.phone}
			</a>
		</div>
	</div>

	<div class="shell">
		<dl class="rule-top-dark grid grid-cols-2 gap-x-6 gap-y-8 py-9 lg:grid-cols-4">
			{#each c.facts as fact}
				<div>
					<dt class="text-h3 font-semibold text-white">{fact.value}</dt>
					<dd class="mt-1 text-sm text-muted-dark">{fact.label}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<!-- Commercial first, deliberately: it is the stated business priority and the
     higher-value contract. -->
<section class="shell py-section">
	<div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
		<h2 class="text-h2 font-semibold">{c.commercialHeading}</h2>
		<a
			href={commercialPillar ? servicePath(locale, commercialPillar.slug) : routes.services[locale]}
			class="text-sm font-semibold text-blue hover:underline"
		>
			{commercialPillar?.navLabel} →
		</a>
	</div>
	<p class="measure mt-4 text-muted">{c.commercialIntro}</p>

	<div class="mt-10 rule-top">
		<ServiceRows {locale} items={commercial} />
	</div>
</section>

<section class="bg-paper-tint">
	<div class="shell py-section">
		<div class="grid gap-8 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
			<h2 class="text-h2 font-semibold">{c.angle.heading}</h2>
			<div class="measure space-y-5 text-muted">
				{#each c.angle.body as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="shell py-section">
	<div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
		<h2 class="text-h2 font-semibold">{c.residentialHeading}</h2>
		<a
			href={residentialPillar
				? servicePath(locale, residentialPillar.slug)
				: routes.services[locale]}
			class="text-sm font-semibold text-blue hover:underline"
		>
			{residentialPillar?.navLabel} →
		</a>
	</div>
	<p class="measure mt-4 text-muted">{c.residentialIntro}</p>

	<div class="mt-10 rule-top">
		<ServiceRows {locale} items={residential} />
	</div>
</section>

<section class="shell pb-section">
	<h2 class="text-h2 font-semibold">{s.sections.specializedServices}</h2>
	<div class="mt-10 rule-top">
		<ServiceRows {locale} items={specialized} />
	</div>
</section>

<!-- Named quotes, not a star widget. The review profile is three positive and
     two negative; an aggregate rating would read as roughly 3.4 stars and cost
     more than it earns. See docs/seo/SEO-STRATEGY.md. -->
<section class="bg-paper-tint">
	<div class="shell py-section">
		<h2 class="text-h2 font-semibold">{c.testimonialsHeading}</h2>
		<div class="row-list mt-10">
			{#each testimonials as item (item.id)}
				<figure class="grid gap-4 py-8 md:grid-cols-[1fr_minmax(0,14rem)] md:gap-10">
					<blockquote class="text-lead text-ink">
						{item.quote[locale]}
					</blockquote>
					<figcaption class="text-sm text-muted">
						<span class="font-semibold text-ink">{item.author}</span><br />
						{item.role[locale]}
						<!-- Every review was written in French. Saying so on the English
						     page keeps the quote from reading as the customer's own
						     English words. -->
						{#if item.sourceLocale !== locale}
							<br /><span class="text-xs">{s.labels.translatedFrom}</span>
						{/if}
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<section class="shell py-section">
	<h2 class="text-h2 font-semibold">{c.areaHeading}</h2>
	<p class="measure mt-4 text-muted">{c.areaBody}</p>
	<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-muted">
		{#each business.areaServed as city}
			<li>{city}</li>
		{/each}
	</ul>
</section>

<QuoteBand {locale} />
