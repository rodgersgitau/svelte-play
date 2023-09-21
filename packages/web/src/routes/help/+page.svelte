<script lang="ts">
	import SectionLayout from '$lib/components/SectionLayout.svelte';
	import { page } from '$app/stores';

	const currentPage = $page.url.pathname;
	console.log({ currentPage });
</script>

<SectionLayout
	sections={[
		{
			title: 'Introduction',
			refId: `${currentPage}/#introduction`
		},
		{
			title: 'Get Started',
			refId: `${currentPage}/#get-started`
		}
	]}
/>
