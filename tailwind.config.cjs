/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		path.join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#512D70',
					50: '#AD86CE',
					100: '#A378C9',
					200: '#8F5ABD',
					300: '#7B44AA',
					400: '#66398D',
					500: '#512D70',
					600: '#341D48',
					700: '#170D20',
					800: '#000000',
					900: '#000000',
					950: '#000000'
				}
			}
		}
	},

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};

module.exports = config;
