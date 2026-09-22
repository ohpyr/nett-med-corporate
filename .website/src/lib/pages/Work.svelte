<script lang="ts">
	import QuoteBand from '$lib/components/QuoteBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { getService } from '$lib/content';
	import { work } from '$lib/content/pages';
	import { jobs } from '$lib/content/work';
	import { routes, servicePath, t, type Locale } from '$lib/i18n';
	import { breadcrumbSchema } from '$lib/schema';

	interface Props {
		locale: Locale;
		altPath: string;
	}

	let { locale, altPath }: Props = $props();

	const c = $derived(work[locale]);
	const s = $derived(t[locale]);
</script>

<Seo
	{locale}
	title={c.metaTitle}
	description={c.metaDescription}
	path={routes.work[locale]}
	{altPath}
	schemas={[
		breadcrumbSchema([
			{ name: s.labels.breadcrumbHome, url: routes.home[locale] },
			{ name: s.nav.work, url: routes.work[locale] }
		])
	]}
/>

<header class="shell pt-12 pb-section">
	<h1 class="max-w-3xl text-h1 font-semibold">{c.h1}</h1>
	<p class="measure mt-6 text-lead text-muted">{c.lede}</p>
</header>

<section class="shell pb-section">
	<div class="row-list rule-top">
		{#each jobs as job (job.id)}
			{@const service = getService(job.serviceId, locale)}
			<!-- Same two-column grid whether or not a photo exists; only the left
			     column’s content changes. Keeps the rhythm identical as photos
			     land one at a time. -->
			<article class="grid gap-6 py-9 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-10">
				<div>
					{#if job.image}
						<!-- The sources are 3:4 phone photos. Fixing the box to 3:4
						     means no crop on four of the five and a predictable row
						     height, so the page does not reflow as each loads. -->
						<enhanced:img
							src={job.image}
							alt={job.alt[locale]}
							sizes="(min-width: 768px) 20rem, 88vw"
							loading="lazy"
							decoding="async"
							class="mb-4 aspect-3/4 w-full object-cover"
						/>
					{/if}
					<h2 class="text-h3 font-semibold">{job.title[locale]}</h2>
					{#if job.location}
						<p class="mt-1 text-sm text-muted">{job.location}</p>
					{/if}
				</div>

				<div>
					<p class="measure text-muted">{job.scope[locale]}</p>
					{#if service}
						<a
							href={servicePath(locale, service.slug)}
							class="mt-4 inline-block text-sm font-semibold text-blue hover:underline"
						>
							{service.navLabel} →
						</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<QuoteBand {locale} />
