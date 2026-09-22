<script lang="ts">
	import { business } from '$lib/config';
	import { routes, t, type Locale } from '$lib/i18n';

	interface Props {
		locale: Locale;
		/** Optional override so a service page can name its own service. */
		heading?: string;
	}

	let { locale, heading }: Props = $props();

	const s = $derived(t[locale]);

	const defaultHeading = $derived(
		locale === 'fr'
			? 'Obtenez un prix ferme après une visite gratuite.'
			: 'Get a firm price after a free site visit.'
	);
	const support = $derived(
		locale === 'fr'
			? 'Nous visitons les lieux, nous mesurons, et nous vous remettons une soumission écrite. Sans frais et sans engagement.'
			: 'We visit the site, take measurements, and give you a written quote. No cost, no obligation.'
	);
</script>

<section class="bg-blue text-white">
	<div class="shell flex flex-col gap-8 py-section lg:flex-row lg:items-end lg:justify-between">
		<div class="measure">
			<h2 class="text-h2 font-semibold">{heading ?? defaultHeading}</h2>
			<p class="mt-4 text-white/85">{support}</p>
		</div>

		<div class="flex shrink-0 flex-col gap-3 sm:flex-row lg:pb-1">
			<a
				href={routes.quote[locale]}
				class="bg-white px-6 py-3.5 text-center font-semibold text-blue transition-colors hover:bg-paper-tint"
			>
				{s.cta.quote}
			</a>
			<a
				href="tel:{business.phoneHref}"
				class="border border-white/40 px-6 py-3.5 text-center font-semibold text-white tabular-nums transition-colors hover:bg-white/10"
			>
				{business.phone}
			</a>
		</div>
	</div>
</section>
