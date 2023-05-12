<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { PageData } from '../routes/$types';

	export let userData: PageData['user'];
	export let theme: 'light' | 'dark' = 'light';
</script>

<AppBar class="px-8 py-6 !bg-inherit border-b border-primary-300">
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
		<div class="flex items-center gap-4 mx-auto font-sans w-max justify-evenly">
			<a class="rounded-md anchor underline-offset-4 text-primary-900" href="/about">About</a>
			<a class="rounded-md anchor underline-offset-4 text-primary-900" href="/docs">Documentation</a
			>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex flex-wrap items-center justify-center gap-8 w-max">
			<ul class="font-sans font-medium">
				<form method="POST">
					<div class="flex flex-row gap-4">
						{#if !userData}
							<li>
								<a
									class="border border-current rounded-md btn text-primary-900 dark:text-primary-500"
									href="/register">Register</a
								>
							</li>
							<li>
								<a
									class="rounded-md btn bg-primary-900 text-primary-100 dark:bg-primary-600"
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
					</div>
				</form>
			</ul>
		</div>
	</svelte:fragment>
</AppBar>
