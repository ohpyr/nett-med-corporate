<script lang="ts">
	import './layout.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { t } from '$lib/i18n';

	let { children, data } = $props();

	const s = $derived(t[data.locale]);
</script>

<!--
	Icons are pre-sized files in static/ rather than the full logo. The source
	logo is 1024×859 and 218 KB; browsers were downloading all of it on every
	page to render a 16px favicon. These are cropped to the mark (the wordmark
	is illegible at favicon size anyway) and padded square so they do not
	distort. The Apple icon gets a white ground because iOS composites onto
	black.
-->
<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
>
	{s.skipToContent}
</a>

<div class="flex min-h-screen flex-col">
	<Header locale={data.locale} altPath={data.altPath} />

	<main id="main" class="flex-1">
		{@render children()}
	</main>

	<Footer locale={data.locale} />
</div>
