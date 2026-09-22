<script lang="ts">
	import type { LocalizedService } from '$lib/content';
	import { servicePath, type Locale } from '$lib/i18n';

	interface Props {
		locale: Locale;
		items: LocalizedService[];
	}

	let { locale, items }: Props = $props();

	/**
	 * First sentence of the lede, used as the row summary.
	 *
	 * Every lede is written so its opening sentence stands alone as a
	 * description — that is a copy constraint, not a coincidence. Keeping the
	 * summary derived means a service’s description can never drift out of
	 * sync with its page.
	 */
	function summary(text: string): string {
		const match = text.match(/^.*?[.!?](?=\s|$)/);
		return match ? match[0] : text;
	}
</script>

<!-- Rows, not cards: a single hairline between items, no box, fill, or
     shadow. The list reads as one continuous table rather than a tray of
     tiles, which keeps the eye moving down the page instead of hopping. -->
<ul class="row-list">
	{#each items as item (item.id)}
		<li>
			<a
				href={servicePath(locale, item.slug)}
				class="group grid gap-1.5 py-6 md:grid-cols-[minmax(0,17rem)_1fr] md:items-baseline md:gap-8"
			>
				<span
					class="text-h3 font-semibold text-ink transition-colors group-hover:text-blue"
				>
					{item.navLabel}
				</span>
				<span class="text-muted">
					{summary(item.lede)}
				</span>
			</a>
		</li>
	{/each}
</ul>
