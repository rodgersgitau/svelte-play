import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';

export type IRoute = {
	label: string;
	href: string;
	icon?: HTMLOrSVGElement | unknown;
};

export const routes: IRoute[] = [
	{
		href: '/',
		label: 'Home',
		icon: IoIosMenu
	},
	{
		href: '/about',
		label: 'About',
		icon: IoIosMenu
	},
	{
		href: '/scoreboard',
		label: 'Score Board',
		icon: IoIosMenu
	},
	{
		href: '/faqs',
		label: 'FAQs',
		icon: IoIosMenu
	}
];
