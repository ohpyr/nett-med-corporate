<script lang="ts">
	import Contact from '$lib/pages/Contact.svelte';

	let { data } = $props();
</script>

<Contact locale={data.locale} altPath={data.altPath} />
