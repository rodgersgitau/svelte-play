import { auth } from '$lib/server/lucia';

import { handleHooks } from '@lucia-auth/sveltekit';
import { sequence } from '@sveltejs/kit/hooks';

import type { Handle } from '@sveltejs/kit';
export const customHandle: Handle = async ({ resolve, event }) => {
	return resolve(event);
};

export const handle: Handle = sequence(handleHooks(auth), customHandle);
