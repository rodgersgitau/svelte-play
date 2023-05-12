<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import type { PageData } from './$types';
	import { onDestroy } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { AppBar, localStorageStore } from '@skeletonlabs/skeleton';
	import Nav from '../components/Nav.svelte';
	import MobileNav from '../components/MobileNav.svelte';

	export let data: PageData;
	export let theme: 'light' | 'dark' = 'light';
	const modeStore: Writable<string> = localStorageStore('modeCurrent', 'false');
	const unsubscribe = modeStore.subscribe((mode) => {
		mode ? (theme = 'light') : (theme = 'dark');
		return false;
	});
	onDestroy(unsubscribe);
</script>

<div class="z-40 w-full h-full mx-auto bg-inherit md:container">
	<header class="relative w-full min-h-[10vh] h-max">
		<div class="hidden md:block h-max">
			<Nav {theme} userData={data.user} />
		</div>
		<div class="fixed top-0 z-50 block w-full md:hidden h-max">
			<MobileNav {theme} userData={data.user} />
		</div>
	</header>

	<section class="w-full h-full min-h-[85vh] p-8 flex items-center justify-center overflow-y-auto">
		<div class="flex flex-col items-center justify-center w-full gap-8">
			<!-- Router Slot -->
			<slot />
			<!-- ---- / ---- -->
		</div>
	</section>
</div>
