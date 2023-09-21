<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { PageData } from '../../routes/$types';
	import { routes } from '$lib/routes';

	export let userData: PageData['user'];
	export let theme: 'light' | 'dark' = 'light';
</script>

<AppBar class="px-8 py-6 !bg-inherit border-b-2 border-primary-300-600-token z-50">
	<svelte:fragment slot="lead">
		<a href="/" class="h-[clamp(35px,_3.5vw,_3.5rem)] w-[clamp(120px,_12vw,_12rem)]">
			{#if theme === 'dark'}
				<img alt="logo" src="/images/logo-dark.png" class="object-cover w-full h-auto" />
			{:else}
				<img alt="logo" src="/images/logo.png" class="object-cover w-full h-auto" />
			{/if}
		</a>
	</svelte:fragment>
	<svelte:fragment slot="default">
		<div
			class="flex items-center justify-between gap-3 mx-auto font-sans font-semibold lg:gap-6 w-max"
		>
			{#each routes as route}
				<a
					class="text-sm border-2 border-transparent rounded-lg hover:bg-primary-hover-token dark:hover:bg-transparent hover:border-primary-500 btn btn-sm text-primary-900-50-token"
					href={route.href}
				>
					<div class="flex items-center gap-2">
						{#if typeof route.icon !== 'undefined'}
							<span class="w-6 aspect-square">
								<svelte:component this={route.icon} />
							</span>
						{/if}
						<span class="flex-1">{route.label}</span>
					</div>
				</a>
			{/each}
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex flex-wrap items-center justify-center gap-8 w-max">
			<form method="POST">
				<ul class="flex flex-row gap-4 font-semibold">
					{#if !userData}
						<li>
							<a
								class="border border-current rounded-md btn text-primary-900 dark:text-primary-500"
								href="/register">Register</a
							>
						</li>
						<li>
							<a
								class="rounded-md btn bg-primary-900 dark:bg-primary-700 text-surface-50-900-token"
								href="/login"
								role="button">Login</a
							>
						</li>
					{:else}
						<li>
							<button class="btn btn-sm" formaction="/logout" type="submit">Logout</button>
						</li>
					{/if}
					<li>
						<div
							class="flex items-center w-20 h-10 overflow-hidden border-2 rounded-full border-primary-500/50"
						>
							<LightSwitch width="w-full" height="h-full" rounded="rounded-full" />
						</div>
					</li>
				</ul>
			</form>
		</div>
	</svelte:fragment>
</AppBar>
