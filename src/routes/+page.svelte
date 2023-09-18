<script lang="ts">
	import type { PageData } from './$types';

	import IoMdPlayCircle from 'svelte-icons/io/IoMdPlayCircle.svelte';

	export let data: PageData;
</script>

<div class="relative grid justify-center w-full h-full py-12">
	<!-- Backdrop -->
	{#if data.backdrops}
		<div class="fixed inset-0 opacity-10 -z-10">
			<div class="hidden h-full w-full dark:flex justify-center gap-4">
				{#each data.backdrops as bgImg}
					<div class="flex-1 w-1/4 aspect-video shadow">
						<img class="w-full h-full object-cover transition" src={bgImg.src} alt={bgImg.alt} />
					</div>
				{/each}
			</div>
		</div>
	{/if}
	<!--Main-->
	<div class="container flex flex-col flex-wrap items-center mx-auto md:flex-row">
		<!--Left Col-->
		<div
			class="flex flex-col justify-center w-full gap-12 overflow-y-hidden xl:w-2/5 lg:items-start"
		>
			<h1
				class="text-2xl font-bold leading-loose text-center text-primary-800 md:text-4xl md:text-left slide-in-bottom-h1"
			>
				Ultimate Svelte + Three.js + Prisma StarterKit
			</h1>
			<p
				class="text-base leading-loose text-center lg:text-lg md:text-left slide-in-bottom-subtitle"
			>
				Power up your games with Svelte, <b>Three.js</b>, <b>Svelte-Cubed</b> & <b>Ammor.js</b>.
				This starter-kit includes baked in authentication & automated scoreboards for multiple games
				using <b>Prisma.js</b>
				& <b>Lucia-Auth</b>
			</p>
			<div class="flex items-center justify-center fade-in">
				<a
					href="/showcase"
					class="gap-4 text-lg divide-x-0 rounded-md btn btn-group variant-glass-surface"
				>
					<span class="w-10">
						<IoMdPlayCircle />
					</span>
					<span>Showcase</span>
				</a>
			</div>

			<!-- <p class="pb-8 font-bold text-center text-secondary-400 lg:pb-6 md:text-left fade-in">
				Download our app:
			</p>
			<div class="flex justify-center w-full pb-24 md:justify-start lg:pb-0 fade-in">
				<img alt="apple store" src="/images/apple-store.svg" class="h-12 pr-4 bounce-top-icons" />
				<img alt="google store" src="/images/google-store.svg" class="h-12 bounce-top-icons" />
			</div>-->
		</div>

		<!--Right Col-->
		<div class="w-full py-6 overflow-y-hidden xl:w-3/5">
			<img alt="" class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="/images/devices.svg" />
		</div>

		<!--Footer-->
		<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
			<span class="text-sm font-medium text-primary-400">
				&copy; Svelte-Play {new Date().getFullYear()}
			</span>
		</div>
	</div>
</div>
