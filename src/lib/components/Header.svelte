<script lang="ts">
	import mark from '$lib/assets/nett-med-mark.png';
	import { business } from '$lib/config';
	import { routes, t, otherLocale, type Locale } from '$lib/i18n';

	interface Props {
		locale: Locale;
		/** Same page in the other locale, for the language switch. */
		altPath: string;
	}

	let { locale, altPath }: Props = $props();

	let open = $state(false);

	const s = $derived(t[locale]);
	const links = $derived([
		{ href: routes.services[locale], label: s.nav.services },
		{ href: routes.blog[locale], label: s.nav.blog },
		{ href: routes.work[locale], label: s.nav.work },
		{ href: routes.about[locale], label: s.nav.about },
		{ href: routes.contact[locale], label: s.nav.contact }
	]);
</script>

<!-- Sticky, but with no scroll-triggered state change. A header that shrinks
     or changes colour partway down the page is exactly the kind of artifact
     this build avoids. -->
<header class="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
	<div class="shell flex items-center justify-between gap-6 py-3">
		<a
			href={routes.home[locale]}
			class="flex shrink-0 items-center gap-2.5"
			aria-label={business.name}
		>
			<img src={mark} alt="" width="570" height="500" class="h-9 w-auto" />
			<span class="flex flex-col leading-none">
				<span class="text-[0.6rem] font-medium tracking-[0.2em] text-muted uppercase">
					Entretien
				</span>
				<span class="text-lg font-bold tracking-tight text-blue">Nett-Med</span>
			</span>
		</a>

		<nav class="hidden items-center gap-7 lg:flex" aria-label={s.nav.menu}>
			{#each links as link}
				<a href={link.href} class="text-sm text-ink transition-colors hover:text-blue">
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-4 lg:flex">
			<a
				href={altPath}
				hreflang={otherLocale(locale)}
				aria-label={s.labels.langSwitchLabel}
				class="text-sm text-muted transition-colors hover:text-blue"
			>
				{s.labels.langSwitch}
			</a>
			<a
				href="tel:{business.phoneHref}"
				class="text-sm font-semibold text-blue tabular-nums hover:underline"
			>
				{business.phone}
			</a>
			<a
				href={routes.quote[locale]}
				class="bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
			>
				{s.cta.quoteShort}
			</a>
		</div>

		<div class="flex items-center gap-3 lg:hidden">
			<a
				href="tel:{business.phoneHref}"
				class="bg-blue px-3.5 py-2 text-sm font-semibold text-white"
			>
				{s.cta.call}
			</a>
			<button
				type="button"
				onclick={() => (open = !open)}
				aria-expanded={open}
				aria-controls="mobile-nav"
				class="p-2 text-ink"
			>
				<span class="sr-only">{open ? s.nav.close : s.nav.menu}</span>
				<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
					{#if open}
						<path d="M5 5l12 12M17 5L5 17" stroke="currentColor" stroke-width="1.75" />
					{:else}
						<path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" stroke-width="1.75" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<nav id="mobile-nav" class="border-t border-rule lg:hidden" aria-label={s.nav.menu}>
			<div class="shell row-list flex flex-col py-2">
				{#each links as link}
					<a href={link.href} onclick={() => (open = false)} class="py-3.5 text-ink">
						{link.label}
					</a>
				{/each}
				<a href={routes.quote[locale]} onclick={() => (open = false)} class="py-3.5 font-semibold text-blue">
					{s.cta.quote}
				</a>
				<a href={altPath} hreflang={otherLocale(locale)} class="py-3.5 text-muted">
					{s.labels.langSwitch}
				</a>
			</div>
		</nav>
	{/if}
</header>
