import { prisma } from '$lib/server/prisma';

import { fail } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
	return {
		scores: (await prisma.score.findMany()).sort((a, b) => a.score - b.score)
	};
};
