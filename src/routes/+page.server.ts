import type { PageServerLoad } from './$types';
import games from '$lib/play.json';

const bgImgs = games.map((game) => ({
	src: game.poster,
	alt: game.title
})) as HTMLImageElement[];

export const load = (async () => {
	return {
		backdrops: bgImgs
	};
}) satisfies PageServerLoad;
