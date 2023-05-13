/* eslint-disable @typescript-eslint/no-explicit-any */

import IoIosHelpCircleOutline from 'svelte-icons/io/IoIosHelpCircleOutline.svelte';
import IoIosHome from 'svelte-icons/io/IoIosHome.svelte';
import IoIosInformationCircleOutline from 'svelte-icons/io/IoIosInformationCircleOutline.svelte';
import IoIosPlayCircle from 'svelte-icons/io/IoIosPlayCircle.svelte';
import IoIosPodium from 'svelte-icons/io/IoIosPodium.svelte';

export type IRoute = {
	label: string;
	href: string;
	icon: any;
};

export const routes: IRoute[] = [
	{
		href: '/',
		label: 'Home',
		icon: IoIosHome
	},
	{
		href: '/showcase',
		label: 'Showcase',
		icon: IoIosPlayCircle
	},
	{
		href: '/scoreboard',
		label: 'Score Board',
		icon: IoIosPodium
	},
	{
		href: '/help',
		label: 'Help',
		icon: IoIosHelpCircleOutline
	}
];
