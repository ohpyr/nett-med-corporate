<script lang="ts">
	import Home from '$lib/pages/Home.svelte';

	let { data } = $props();
</script>

<Home locale={data.locale} altPath={data.altPath} />
