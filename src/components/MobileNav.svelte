<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { PageData } from '../routes/$types';

	export let userData: PageData['user'];
	export let theme: 'light' | 'dark' = 'light';
</script>

<AppBar
	slotDefault="flex-1 px-8 place-self-start"
	slotTrail="w-max place-content-end"
	class="z-50 flex px-8 py-6 border-b !bg-inherit border-primary-300"
>
	<svelte:fragment slot="lead">
		<a href="/" class="p-1.5 rounded bg-primary-900 text-on-primary-token"> Menu </a>
	</svelte:fragment>
	<svelte:fragment slot="default">
		<a href="/" class="h-[clamp(15px,_3.5vw,_3.5rem)] w-[clamp(60px,_12vw,_12rem)]">
			{#if theme === 'dark'}
				<img alt="logo" src="/images/logo-dark.png" class="object-cover w-full h-auto" />
			{:else}
				<img alt="logo" src="/images/logo.png" class="object-cover w-full h-auto" />
			{/if}
		</a>
	</svelte:fragment>
	<svelte:fragment slot="headline">
		<div class="flex items-center justify-center gap-8 mx-auto mt-4 w-max">
			<ul class="font-sans font-medium">
				<form method="POST">
					<div class="flex flex-row gap-4">
						{#if !userData}
							<li>
								<a
									class="border border-current rounded-md btn btn-sm text-primary-900 dark:text-primary-500"
									href="/register">Register</a
								>
							</li>
							<li>
								<a
									class="rounded-md btn btn-sm bg-primary-900 dark:bg-primary-500 text-primary-100"
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
