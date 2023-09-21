<script lang="ts">
	import GameContainer from '$lib/game/Game.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<GameContainer />
