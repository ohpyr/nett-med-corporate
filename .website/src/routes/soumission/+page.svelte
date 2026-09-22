<script lang="ts">
	import Quote from '$lib/pages/Quote.svelte';

	let { data, form } = $props();
</script>

<Quote locale={data.locale} altPath={data.altPath} {form} />
