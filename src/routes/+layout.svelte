<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import type { PageData } from './$types';
	export let data: PageData;
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="w-full h-full p-4 mx-auto">
	<AppBar class="px-8 py-6 !bg-transparent rounded-md shadow">
		<svelte:fragment slot="lead">
			<strong>
				<a href="/"> Svelte Play </a>
			</strong>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<ul>
				<form method="POST">
					<div class="flex flex-row gap-4">
						{#if !data.user}
							<li>
								<a
									class="rounded-md btn btn-sm bg-primary-active-token text-on-primary-token"
									href="/register">Register</a
								>
							</li>
							<li>
								<a
									class="rounded-md btn btn-sm bg-secondary-active-token text-on-secondary-token"
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
		</svelte:fragment>
	</AppBar>
	<!-- ---- / ---- -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</div>
