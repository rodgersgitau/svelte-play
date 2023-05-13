<script lang="ts">
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	import IoIosCloseCircle from 'svelte-icons/io/IoIosCloseCircle.svelte';

	import { AppBar, Drawer, drawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	import { routes } from '$lib/routes';
	import type { PageData } from '../routes/$types';

	export let userData: PageData['user'];
	export let theme: 'light' | 'dark' = 'light';

	let showDrawer = false;

	const drawerSettings: DrawerSettings = {
		id: 'sidebar',
		bgDrawer: 'fixed inset-0 bottom-[50%] translate-y-[50%] py-8 mx-auto bg-surface-900 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		width: 'w-[280px] md:w-[480px]',
		height: 'h-max',
		padding: 'p-8',
		rounded: 'rounded-xl'
	};

	const toggleDrawer = () => {
		if (showDrawer) {
			showDrawer = false;
			return drawerStore.close();
		}
		showDrawer = true;
		return drawerStore.open(drawerSettings);
	};
</script>

<AppBar
	slotLead="w-full place-self-start place-content-start"
	slotDefault="place-self-end place-content-end"
	slotTrail="w-max place-self-center"
	class="w-full h-[12vh] z-50 p-4 border-b !bg-['papayawhip'] border-primary-300"
>
	<svelte:fragment slot="lead">
		<div class="flex items-center gap-8">
			<button
				on:click={toggleDrawer}
				class="p-1.5 border rounded-full btn btn-icon-lg border-primary-900 text-primary-900"
			>
				<IoIosMenu />
			</button>
			<a href="/" class="flex w-full h-full">
				{#if theme === 'dark'}
					<img alt="logo" src="/images/logo-dark.png" class="w-40 h-auto" />
				{:else}
					<img alt="logo" src="/images/logo.png" class="w-40 h-auto" />
				{/if}
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="default">
		<div class="items-center hidden gap-4 mt-auto sm:flex w-max">
			{#if !userData}
				<a
					class="border border-current rounded-md btn btn-sm text-primary-500"
					href="/register"
					role="button"
				>
					Register
				</a>
				<a
					class="rounded-md btn btn-sm bg-primary-900 dark:bg-primary-500 text-surface-100-800-token"
					href="/login"
					role="button"
				>
					Login
				</a>
			{:else}
				<button class="btn btn-sm" formaction="/logout" type="submit">Logout</button>
			{/if}
		</div>
	</svelte:fragment>
	<svelte:fragment slot="headline">
		<Drawer>
			<div class="absolute top-0 right-0 z-50">
				<button on:click={toggleDrawer} class="btn btn-icon-lg p-1.5 rounded-full">
					<IoIosCloseCircle />
				</button>
			</div>
			<form class="w-full h-full">
				<div class="flex flex-col items-center w-full h-full gap-8 p-8">
					<div class="flex flex-col flex-1 w-full gap-2">
						{#each routes as route}
							<a
								class="w-full text-sm border-2 rounded-lg shadow-md hover:bg-primary-hover-token dark:hover:bg-transparent hover:border-primary-500 btn btn-sm"
								href={route.href}
							>
								{route.label}
							</a>
						{/each}
					</div>
					<div class="grid items-center w-full gap-4 mt-auto font-semibold sm:hidden">
						{#if !userData}
							<a
								class="border border-current rounded-md text-tertiary-500 btn btn-sm"
								href="/register">Register</a
							>
							<a
								class="rounded-md bg-tertiary-900 btn btn-sm dark:bg-tertiary-500 text-tertiary-50"
								href="/login"
								role="button">Login</a
							>
						{:else}
							<button class="btn btn-sm" formaction="/logout" type="submit">Logout</button>
						{/if}
					</div>
				</div>
			</form>
		</Drawer>
	</svelte:fragment>
</AppBar>
