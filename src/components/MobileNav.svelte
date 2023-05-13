<script lang="ts">
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	import { AppBar, Drawer, drawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	import type { PageData } from '../routes/$types';

	export let userData: PageData['user'];
	export let theme: 'light' | 'dark' = 'light';

	let showDrawer = false;

	const drawerSettings: DrawerSettings = {
		id: 'sidebar',
		position: 'right',
		bgDrawer: 'mt-10 bg-surface-900 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
		width: 'w-[280px] md:w-[480px]',
		height: 'h-max',
		padding: 'p-8',
		rounded: 'rounded-xl'
	};

	const toggleDrawer = () => {
		if (showDrawer) {
			return drawerStore.close();
		}
		return drawerStore.open(drawerSettings);
	};
</script>

<AppBar
	slotLead="w-full place-self-start place-content-start"
	slotDefault="place-self-center place-content-center"
	slotTrail="w-max place-self-center"
	class="w-full z-50 px-8 py-4 border-b !bg-['papayawhip'] border-primary-300"
>
	<svelte:fragment slot="lead">
		<a href="/" class="flex w-full h-full">
			{#if theme === 'dark'}
				<img alt="logo" src="/images/logo-dark.png" class="w-32 h-auto" />
			{:else}
				<img alt="logo" src="/images/logo.png" class="w-32 h-auto" />
			{/if}
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex items-center gap-2">
			<span class="flex items-center border-2 rounded-full border-primary-500/50">
				<LightSwitch width="w-10" height="h-5" rounded="rounded-full" />
			</span>

			<button
				on:click={toggleDrawer}
				class="p-2 border rounded-full btn btn-icon-sm border-primary-500 text-primary-500"
			>
				<IoIosMenu />
			</button>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="headline">
		<Drawer>
			<form>
				<div class="flex flex-col items-center w-full h-full gap-4 p-8">
					<div class="grid items-center flex-1 w-full gap-4 p-8">
						<div class="p-4 shadow shadow-current">
							<img alt="logo" src="/images/logo-dark.png" class="w-32 h-auto" />
						</div>
					</div>
					<div class="grid items-center w-full gap-4 p-8 mt-auto">
						{#if !userData}
							<a
								class="border border-current rounded-md btn btn-sm text-primary-500"
								href="/register">Register</a
							>
							<a
								class="rounded-md btn btn-sm bg-primary-900 dark:bg-primary-500 text-surface-100-800-token"
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
