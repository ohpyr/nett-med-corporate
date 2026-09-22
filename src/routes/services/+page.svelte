<script lang="ts">
	import ServicesIndex from '$lib/pages/ServicesIndex.svelte';

	let { data } = $props();
</script>

<ServicesIndex locale={data.locale} altPath={data.altPath} />
