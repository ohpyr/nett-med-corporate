<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { business } from '$lib/config';
	import { contact } from '$lib/content/pages';
	import { routes, t, type Locale } from '$lib/i18n';
	import { breadcrumbSchema, localBusinessSchema } from '$lib/schema';

	interface Props {
		locale: Locale;
		altPath: string;
	}

	let { locale, altPath }: Props = $props();

	const c = $derived(contact[locale]);
	const s = $derived(t[locale]);
</script>

<Seo
	{locale}
	title={c.metaTitle}
	description={c.metaDescription}
	path={routes.contact[locale]}
	{altPath}
	schemas={[
		localBusinessSchema(locale),
		{
			'@context': 'https://schema.org',
			'@type': 'ContactPage',
			name: c.h1,
			url: `https://nett-med.ca${routes.contact[locale]}`
		},
		breadcrumbSchema([
			{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
			{ name: s.nav.contact, url: routes.contact[locale] }
		])
	]}
/>

<header class="shell pt-12 pb-section">
	<h1 class="max-w-3xl text-h1 font-semibold">{c.h1}</h1>
	<p class="measure mt-6 text-lead text-muted">{c.lede}</p>

	<div class="mt-10 flex flex-col gap-3 sm:flex-row">
		<a
			href="tel:{business.phoneHref}"
			class="bg-blue px-7 py-4 text-center font-semibold text-white tabular-nums transition-colors hover:bg-ink"
		>
			{business.phone}
		</a>
		<a
			href={routes.quote[locale]}
			class="border border-rule px-7 py-4 text-center font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
		>
			{s.cta.quote}
		</a>
	</div>
</header>

<section class="bg-paper-tint">
	<div class="shell py-section">
		<dl class="row-list">
			<div class="grid gap-1.5 py-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8">
				<dt class="text-h3 font-semibold">{s.labels.phone}</dt>
				<dd>
					<a href="tel:{business.phoneHref}" class="text-blue tabular-nums hover:underline">
						{business.phone}
					</a>
				</dd>
			</div>

			{#if business.emailLive}
				<div class="grid gap-1.5 py-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8">
					<dt class="text-h3 font-semibold">{s.labels.email}</dt>
					<dd>
						<a href="mailto:{business.email}" class="text-blue hover:underline">
							{business.email}
						</a>
					</dd>
				</div>
			{/if}

			<div class="grid gap-1.5 py-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8">
				<dt class="text-h3 font-semibold">{s.labels.address}</dt>
				<dd class="text-muted">
					<address class="not-italic">
						{business.address.street}<br />
						{business.address.locality}, {business.address.region}
						{business.address.postalCode}
					</address>
				</dd>
			</div>

			<div class="grid gap-1.5 py-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8">
				<dt class="text-h3 font-semibold">{s.labels.hours}</dt>
				<dd class="text-muted">{s.labels.hoursValue}</dd>
			</div>

			<div class="grid gap-1.5 py-6 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-8">
				<dt class="text-h3 font-semibold">{s.labels.serviceArea}</dt>
				<dd class="text-muted">{business.areaServed.join(' · ')}</dd>
			</div>
		</dl>
	</div>
</section>
