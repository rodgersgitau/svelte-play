<script lang="ts">
	import TabbedPage from '../components/TabbedPage.svelte';
</script>

<div class="h-full bg-right bg-cover pb-14">
	<!--Main-->
	<div
		class="container flex flex-col flex-wrap items-center px-6 pt-24 mx-auto md:pt-48 md:flex-row"
	>
		<!--Left Col-->
		<div class="flex flex-col justify-center w-full overflow-y-hidden xl:w-2/5 lg:items-start">
			<h1
				class="my-4 text-2xl font-bold leading-loose text-center text-primary-800 md:text-4xl md:text-left slide-in-bottom-h1"
			>
				Ultimate Svelte + Three.js + Prisma StarterKit
			</h1>
			<p
				class="mb-8 text-base leading-snug text-center md:text-lg md:text-left slide-in-bottom-subtitle"
			>
				Power up your games with Svelte, Three.js, Svelte-Cubed & Ammor.js. This starter-kit
				includes baked in authentication & automated scoreboards for multiple games using Prisma.js
				& Lucia-Auth !
			</p>

			<p class="pb-8 font-bold text-center text-secondary-400 lg:pb-6 md:text-left fade-in">
				Download our app:
			</p>
			<div class="flex justify-center w-full pb-24 md:justify-start lg:pb-0 fade-in">
				<img alt="apple store" src="/images/apple-store.svg" class="h-12 pr-4 bounce-top-icons" />
				<img alt="google store" src="/images/google-store.svg" class="h-12 bounce-top-icons" />
			</div>
		</div>

		<!--Right Col-->
		<div class="w-full py-6 overflow-y-hidden xl:w-3/5">
			<img alt="" class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="/images/devices.svg" />
		</div>

		<!--Footer-->
		<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
			<a class="text-gray-500 no-underline hover:no-underline" href="/"
				>&copy; Svelte-Play {new Date().getFullYear()}</a
			>
		</div>
	</div>
</div>
