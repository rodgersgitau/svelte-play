<script lang="ts">
	import { page } from '$app/stores';
	import IoIosArrowRoundBack from 'svelte-icons/io/IoIosArrowRoundBack.svelte';
</script>

<div class="flex flex-col items-center justify-center w-full h-full">
	<div class="flex flex-col items-center justify-center max-w-screen-sm gap-16 mx-auto">
		{#if $page?.error}
			{#if $page?.status}
				<h1 class="font-sans text-9xl text-primary-800">{$page?.status}</h1>
			{/if}
			{#if $page?.error?.message}
				<h3 class="text-lg">{$page?.error?.message}</h3>
			{/if}
			<a href="/" class="w-full btn btn-lg btn-group text-on-surface-token bg-surface-700">
				<div class="flex items-center gap-4 font-semibold">
					<span class="w-10 h-10">
						<IoIosArrowRoundBack />
					</span>
					<span class="font-sans capitalize">Back to Homepage</span>
				</div>
			</a>
		{/if}
	</div>
</div>
