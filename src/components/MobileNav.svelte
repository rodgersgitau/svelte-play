<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { PageData } from '../routes/$types';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';

	export let userData: PageData['user'];
	export let theme: 'light' | 'dark' = 'light';
</script>

<AppBar
	slotLead="w-max place-self-start place-content-start"
	slotDefault="place-self-center place-content-center"
	slotHeadline="w-full place-self-center place-content-center "
	class="z-50 px-8 py-4 border-b !bg-inherit border-primary-300 items-center gap-0"
>
	<svelte:fragment slot="default">
		<a href="/" class="h-max w-[clamp(36px,_36vw,_36rem)]">
			{#if theme === 'dark'}
				<img alt="logo" src="/images/logo-dark.png" class="object-cover w-full h-auto" />
			{:else}
				<img alt="logo" src="/images/logo.png" class="object-cover w-full h-auto" />
			{/if}
		</a>
	</svelte:fragment>
	<svelte:fragment slot="headline">
		<div class="flex items-center justify-center w-full gap-4 mt-4">
			<a href="/" class="flex-1 rounded btn btn-sm bg-surface-200 text-surface-900">
				<div class="flex items-center gap-2">
					<span class="w-5 h-5">
						<IoIosMenu />
					</span>
					<span class="font-semibold">Menu</span>
				</div>
			</a>
			<ul class="font-sans font-medium">
				<form method="POST">
					<div class="flex flex-row items-center gap-4">
						{#if !userData}
							<li class="flex-1">
								<a
									class="border border-current rounded-md btn btn-sm text-primary-500"
									href="/register">Register</a
								>
							</li>
							<li class="flex-1">
								<a
									class="rounded-md btn btn-sm bg-primary-900 dark:bg-primary-500 text-surface-100-800-token"
									href="/login"
									role="button">Login</a
								>
							</li>
						{:else}
							<li class="flex-1">
								<button class="btn btn-sm" formaction="/logout" type="submit">Logout</button>
							</li>
						{/if}
						<li>
							<div class="flex items-center w-16 h-8 border-2 rounded-full border-primary-500/50">
								<LightSwitch width="w-full" height="h-full" rounded="rounded-full" />
							</div>
						</li>
					</div>
				</form>
			</ul>
		</div>
	</svelte:fragment>
</AppBar>
