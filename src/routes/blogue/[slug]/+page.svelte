<script lang="ts">
	import BlogPost from '$lib/pages/BlogPost.svelte';

	let { data } = $props();
</script>

<BlogPost locale={data.locale} altPath={data.altPath} post={data.post} />
