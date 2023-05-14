<script lang="ts">
	import GiCardboardBox from 'svelte-icons/gi/GiCardboardBox.svelte';
	import GiCardDraw from 'svelte-icons/gi/GiCardDraw.svelte';
	import GiPerspectiveDiceSixFacesRandom from 'svelte-icons/gi/GiPerspectiveDiceSixFacesRandom.svelte';
	import GiPuzzle from 'svelte-icons/gi/GiPuzzle.svelte';
	import GiStack from 'svelte-icons/gi/GiStack.svelte';
	import GiVendingMachine from 'svelte-icons/gi/GiVendingMachine.svelte';

	import plays from '$lib/play.json';
	import TabbedPage from '../../components/TabbedPage.svelte';
</script>

<div class="relative flex flex-col items-center justify-center w-full h-full gap-8">
	<TabbedPage
		data={plays}
		sortKey="type"
		tabs={[
			{ title: 'arcade', icon: GiVendingMachine },
			{ title: 'board', icon: GiPerspectiveDiceSixFacesRandom },
			{ title: 'demo', icon: GiCardboardBox },
			{ title: 'card', icon: GiCardDraw },
			{ title: 'puzzle', icon: GiPuzzle },
			{ title: 'layer', icon: GiStack }
		]}
	/>
</div>
