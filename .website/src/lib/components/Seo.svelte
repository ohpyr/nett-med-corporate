<script lang="ts">
	import { SITE_URL } from '$lib/config';
	import { htmlLang, otherLocale, type Locale } from '$lib/i18n';

	interface Props {
		locale: Locale;
		title: string;
		description: string;
		path: string;
		altPath: string;
		schemas?: unknown[];
		/**
		 * Absolute URL of a page-specific share image. Defaults to the branded
		 * card for this locale — without one, every share on Facebook, LinkedIn
		 * or WhatsApp renders as a blank rectangle.
		 */
		image?: string;
	}

	let { locale, title, description, path, altPath, schemas = [], image }: Props = $props();

	const shareImage = $derived(image ?? `${SITE_URL}/og-${locale}.png`);

	const canonical = $derived(`${SITE_URL}${path === '/' ? '' : path}`);
	const altCanonical = $derived(`${SITE_URL}${altPath === '/' ? '' : altPath}`);
	const frUrl = $derived(locale === 'fr' ? canonical : altCanonical);
	const enUrl = $derived(locale === 'fr' ? altCanonical : canonical);

	function ld(value: unknown): string {
		return JSON.stringify(value).replace(/</g, '\\u003c');
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<link rel="alternate" hreflang="fr-CA" href={frUrl} />
	<link rel="alternate" hreflang="en-CA" href={enUrl} />
	<link rel="alternate" hreflang="x-default" href={frUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={htmlLang[locale].replace('-', '_')} />
	<meta
		property="og:locale:alternate"
		content={htmlLang[otherLocale(locale)].replace('-', '_')}
	/>
	<meta property="og:image" content={shareImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={title} />
	<meta property="og:site_name" content="Entretien Nett-Med" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={shareImage} />

	{#each schemas as schema}
		{@html `<script type="application/ld+json">${ld(schema)}<\/script>`}
	{/each}
</svelte:head>
