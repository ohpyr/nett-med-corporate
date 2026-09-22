<script lang="ts">
	import ServicePage from '$lib/pages/ServicePage.svelte';

	let { data } = $props();
</script>

<ServicePage locale={data.locale} altPath={data.altPath} service={data.service} />
