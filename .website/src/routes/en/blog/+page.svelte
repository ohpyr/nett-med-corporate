<script lang="ts">
	import BlogIndex from '$lib/pages/BlogIndex.svelte';

	let { data } = $props();
</script>

<BlogIndex locale={data.locale} altPath={data.altPath} />
