<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import type { PageData } from './$types';
	import { onDestroy } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import Nav from '$lib/components/Nav.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';

	export let data: PageData;
	export let theme: 'light' | 'dark' = 'light';
	const modeStore: Writable<string> = localStorageStore('modeCurrent', 'false');
	const unsubscribe = modeStore.subscribe((mode) => {
		mode ? (theme = 'light') : (theme = 'dark');
		return false;
	});
	onDestroy(unsubscribe);
</script>

<div class="relative grid w-full min-h-screen h-full grid-flow-row grid-rows-[16vh_1fr] pb-4">
	<header class="relative row-span-1">
		<div class="fixed top-0 z-auto hidden w-full h-full lg:block">
			<div class="container mx-auto">
				<Nav {theme} userData={data?.user} />
			</div>
		</div>
		<div class="fixed top-0 z-auto block w-full h-full lg:hidden">
			<MobileNav {theme} userData={data?.user} />
		</div>
	</header>

	<section class="relative h-full row-span-1 row-start-2 overflow-y-auto">
		<div class="w-full h-full p-4 mx-auto lg:p-0 lg:container">
			<!-- Router Slot -->
			<slot />
			<!-- ---- / ---- -->
		</div>
	</section>
</div>
