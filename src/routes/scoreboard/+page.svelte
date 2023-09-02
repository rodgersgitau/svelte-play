<script lang="ts">
	import { onDestroy } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import DataTable from '$lib/components/DataTable.svelte';

	import items from '$lib/play.json';

	const sortKey = 'type';
	let filterOptions: (string | undefined)[] = [];
	let sortValue: Writable<string | undefined> = writable();

	const unsubscribe = sortValue.subscribe(() => {
		filterOptions = [...new Set(items.map((item) => item[`${sortKey}`]))];
		$sortValue = filterOptions.length > 1 ? filterOptions[0] : undefined;
	});

	onDestroy(unsubscribe);
</script>

<div class="grid gap-4 w-full h-full grid-rows-[40px_1fr]">
	<h1 class="text-xl text-left underline uppercase font-heading-token underline-offset-4">
		Score Board page
	</h1>
	<div class="flex flex-col gap-4">
		<form method="post" on:submit={(e) => e.preventDefault()}>
			<div class="flex items-center gap-4">
				<div class="w-full max-w-sm">
					<select
						title="game"
						value={$sortValue}
						class="capitalize rounded-md select"
						placeholder={`Select ${sortKey} for score ranking`}
						on:change={(e) => ($sortValue = e.currentTarget.value)}
					>
						<option class="!text-xs !font-sans" hidden aria-hidden="true">
							{`Select ${sortKey} for score ranking`}</option
						>
						{#each filterOptions as filterOption}
							<option class="p-2 capitalize" value={filterOption}>
								{filterOption}
							</option>
						{/each}
					</select>
				</div>
				<div class="h-full">
					<button
						class="font-medium rounded-md variant-ringed-primary btn text-primary-600"
						type="submit">Filter</button
					>
				</div>
			</div>
		</form>
		<DataTable />
	</div>
</div>
