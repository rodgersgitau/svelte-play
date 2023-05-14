<script lang="ts">
	import { onDestroy } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { TabGroup, Tab, Avatar } from '@skeletonlabs/skeleton';

	interface TabType {
		title: string;
		icon: any;
	}

	// Props
	export let sortKey: string | undefined;
	export let data: any[] | [] = [];
	export let tabs: TabType[] | [] = [];

	let sortedTabs = [...tabs];
	let sortedItems = [...data];
	const tabSet: Writable<number> = writable(0);

	const unsubscribe = tabSet.subscribe(() => {
		const setTabs = [...new Set(data.map((play) => play[`${sortKey}`]))];
		sortedItems = data.filter((play) => play[`${sortKey}`] === tabs[$tabSet].title);
		sortedTabs = tabs.filter((tab) => setTabs.includes(tab.title));
	});

	onDestroy(unsubscribe);
</script>

<TabGroup
	active="variant-soft-surface"
	border="border-none"
	class="w-full h-full p-4 bg-gradient-to-r from-transparent to-[whitesmoke_/_0.2]"
	flex="flex-1"
	hover="hover:variant-ghost-surface"
	justify="justify-start"
	padding="p-0"
	regionList="grid  grid-cols-[auto_1fr_auto]] sm:grid-cols-5 lg:grid-cols-10 gap-2 items-center"
	regionPanel="border-t border-surface-600"
	rounded="rounded-md"
	spacing="spaxe-x-4"
>
	{#each sortedTabs as tab, idx}
		<Tab bind:group={$tabSet} name={tab.title} value={idx} title={tab.title}>
			<div
				class="relative flex flex-col items-center justify-center w-full gap-1 p-2 rounded-md variant-ringed-surface md:gap-2 md:flex-row"
			>
				<span class="h-[clamp(8px,_2rem,_2vw)] w-[clamp(8px,_2rem,_2vw)] text-inherit">
					<svelte:component this={tab.icon} />
				</span>
				<span class="text-xs capitalize text-inherit sm:text-sm">{tab.title}</span>
				<span class="relative hidden w-4 lg:inline-block">
					{#if $tabSet === idx}
						<span class="absolute top-[50%] -translate-y-[50%] badge-icon variant-filled-surface">
							{sortedItems.length}
						</span>
					{/if}
				</span>
			</div>
		</Tab>
	{/each}

	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		<div class="grid gap-4 py-8 grid-cols-[auto_1fr_auto]] sm:grid-cols-2 lg:grid-cols-4">
			{#each sortedItems as item}
				<div class="w-full p-4 rounded-md shadow card variant-ghost-surface">
					<img src={item.poster} class="object-cover h-[20vh] w-full aspect-[21/9]" alt="poster" />

					<div class="p-4 space-y-4">
						<h3 class="h3 font-headings">{item.title}</h3>
						<p class="text-sm">{item.description}</p>
					</div>
					<hr class="opacity-50" />
					<footer class="flex items-center justify-start p-4 space-x-4">
						<Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" />
						<div class="flex items-center justify-between flex-auto">
							<h6 class="font-bold">By Alex</h6>
							<small>On {new Date().toLocaleDateString()}</small>
						</div>
					</footer>
				</div>
			{/each}
		</div>
	</svelte:fragment>
</TabGroup>
