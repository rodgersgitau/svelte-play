<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	import { writable, type Writable } from 'svelte/store';

	// const tabSet: Writable<number> = writable(0);

	let tabSet: number = 0;
</script>

<TabGroup
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded="rounded-sm"
	border="border:none"
	class="w-full rounded-sm h-full min-h-screen lg:min-h-[80vh] bg-surface-100-800-token"
>
	<Tab bind:group={tabSet} name="tab1" value={0}>(label)</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>(label)</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>(label)</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			(tab panel 1 contents)
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
