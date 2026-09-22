<script lang="ts">
	import About from '$lib/pages/About.svelte';

	let { data } = $props();
</script>

<About locale={data.locale} altPath={data.altPath} />
