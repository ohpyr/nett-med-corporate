<script lang="ts">
	import { pillarService, servicesInPillar } from '$lib/content';
	import { business } from '$lib/config';
	import { routes, servicePath, t, type Locale } from '$lib/i18n';

	interface Props {
		locale: Locale;
	}

	let { locale }: Props = $props();

	const s = $derived(t[locale]);

	/* The footer is where most of the internal linking lives. Grouping by
	   pillar keeps the link graph readable to a crawler and to a person.

	   `pillarService` returns undefined if a pillar has no hub page, so the
	   undefined is filtered out here rather than guarded in the markup — that
	   keeps `item.id` a guaranteed-unique key. */
	const columns = $derived([
		{
			heading: s.sections.commercialServices,
			items: [
				pillarService('commercial', locale),
				...servicesInPillar('commercial', locale)
			].filter((item) => item !== undefined)
		},
		{
			heading: s.sections.residentialServices,
			items: [
				pillarService('residential', locale),
				...servicesInPillar('residential', locale)
			].filter((item) => item !== undefined)
		},
		{
			heading: s.sections.specializedServices,
			items: servicesInPillar('specialized', locale)
		}
	]);
</script>

<footer class="bg-ink text-muted-dark">
	<div class="shell py-section">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_repeat(3,1fr)] lg:gap-8">
			<div>
				<p class="text-h3 font-semibold text-white">{business.name}</p>
				<p class="mt-3 max-w-xs text-sm">{s.footer.tagline}</p>

				<dl class="mt-6 space-y-3 text-sm">
					<div>
						<dt class="sr-only">{s.labels.phone}</dt>
						<dd>
							<a
								href="tel:{business.phoneHref}"
								class="text-lead font-semibold text-white tabular-nums hover:underline"
							>
								{business.phone}
							</a>
						</dd>
					</div>
					{#if business.emailLive}
						<div>
							<dt class="sr-only">{s.labels.email}</dt>
							<dd>
								<a href="mailto:{business.email}" class="transition-colors hover:text-white">
									{business.email}
								</a>
							</dd>
						</div>
					{/if}

					<div>
						<dt class="sr-only">{s.labels.address}</dt>
						<dd>
							<address class="not-italic">
								{business.address.street}<br />
								{business.address.locality}, {business.address.region}
								{business.address.postalCode}
							</address>
						</dd>
					</div>
					<div>
						<dt class="text-xs tracking-wide uppercase">{s.labels.hours}</dt>
						<dd>{s.labels.hoursValue}</dd>
					</div>
				</dl>
			</div>

			{#each columns as column}
				<nav aria-label={column.heading}>
					<h2 class="text-xs font-semibold tracking-[0.14em] text-white uppercase">
						{column.heading}
					</h2>
					<ul class="mt-4 space-y-2.5 text-sm">
						{#each column.items as item (item.id)}
							<li>
								<a href={servicePath(locale, item.slug)} class="transition-colors hover:text-white">
									{item.navLabel}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/each}
		</div>

		<div class="rule-top-dark mt-12 pt-8">
			<h2 class="text-xs font-semibold tracking-[0.14em] text-white uppercase">
				{s.labels.serviceArea}
			</h2>
			<p class="mt-3 text-sm">{business.areaServed.join(' · ')}</p>
		</div>

		<div
			class="rule-top-dark mt-8 flex flex-col gap-4 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {new Date().getFullYear()} {business.name}. {s.footer.rights}</p>
			<nav class="flex gap-6" aria-label={s.nav.menu}>
				<a href={routes.blog[locale]} class="hover:text-white">{s.nav.blog}</a>
				<a href={routes.about[locale]} class="hover:text-white">{s.nav.about}</a>
				<a href={routes.contact[locale]} class="hover:text-white">{s.nav.contact}</a>
				<a href={routes.quote[locale]} class="hover:text-white">{s.cta.quoteShort}</a>
			</nav>
		</div>
	</div>
</footer>
