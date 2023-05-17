<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import TabbedPage from './TabbedPage.svelte';

	const defaultSourceData = [
		{ player: 'Hydrogen', game: 'Stack', score: 1.0079 },
		{ player: 'Helium', game: 'Stack', score: 4.0026 },
		{ player: 'Lithium', game: 'Stack', score: 6.941 },
		{ player: 'Beryllium', game: 'Stack', score: 9.0122 },
		{ player: 'Boron', game: '', score: 10.811 }
	];
	const defaultHeaders = ['rank', 'player', 'score'];

	export let data: any[] = defaultSourceData;
	// export let dataSortKey: string = 'game';
	export let tableHeaders: string[] = defaultHeaders.map(
		(header) => header.charAt(0).toLocaleUpperCase() + header.slice(1).toLocaleLowerCase()
	);

	let sourceData = data.map((score, idx) => ({
		rank: idx + 1,
		...score
	}));

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: tableHeaders,
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, [...defaultHeaders]),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, [...defaultHeaders]),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">5</code>']
	};
</script>

<div class="grid gap-4">
	<form method="post">
		<div class="grid items-center grid-cols-2 gap-2">
			<div class="grid gap-2">
				<label for="game">Game</label>
				<input type="text" title="game" class="p-2 rounded-md input" />
			</div>
			<button class="rounded-md btn btn-lg variant-filled-surface" type="submit">Filter</button>
		</div>
	</form>
	<div class="shadow table-container border-1 border-primary-200">
		<Table source={tableSimple} interactive={true} on:selected={(e) => console.log(e)} />
	</div>
</div>
