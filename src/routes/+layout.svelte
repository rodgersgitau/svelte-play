<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import type { PageData } from './$types';
	export let data: PageData;
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="w-full h-full bg-inherit">
	<AppBar class="px-8 py-6 !bg-inherit border-b border-current">
		<svelte:fragment slot="lead">
			<strong>
				<a href="/"> Svelte Play </a>
			</strong>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<div class="flex items-center gap-8">
				<ul class="font-sans font-medium">
					<form method="POST">
						<div class="flex flex-row gap-4">
							{#if !data.user}
								<li>
									<a
										class="rounded-md btn btn-sm border border-tertiary-900-50-token text-tertiary-900-50-token"
										href="/register">Register</a
									>
								</li>
								<li>
									<a
										class="rounded-md btn btn-sm bg-primary-900-50-token text-tertiary-50-900-token"
										href="/login"
										role="button">Login</a
									>
								</li>
							{:else}
								<li>
									<button class="btn btn-sm" formaction="/logout" type="submit">Logout</button>
								</li>
							{/if}
						</div>
					</form>
				</ul>
				<div
					class="h-8 w-16 flex items-center rounded-md overflow-hidden border border-primary-500/50"
				>
					<LightSwitch width="w-full" height="h-full" />
				</div>
			</div>
		</svelte:fragment>
	</AppBar>
	<!-- ---- / ---- -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</div>
