<script lang="ts">
	import Work from '$lib/pages/Work.svelte';

	let { data } = $props();
</script>

<Work locale={data.locale} altPath={data.altPath} />
