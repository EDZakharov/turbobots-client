import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'kaspa-color': '#6fc7ba',
				'bitcoin-color': '#F7931A',
				'cards-color': '#5F5A4E63',
			},
			boxShadow: {
				'r-xl': '0 0 20px 0 rgba(0, 0, 0, 0.3)',
				'rl-md': '0px 6px 16px 2px rgba(34, 60, 80, 0.26)',
				'trl-md': '0px -3px 10px 2px rgba(34, 60, 80, 0.2)',
				'brl-md': '0px 3px 10px 2px rgba(34, 60, 80, 0.2)',
				'xy-md': '-1px 0px 25px 2px rgba(34, 60, 80, 0.27)',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	darkMode: 'class',

	plugins: [
		require('tailwindcss-animated'),
		require('tailwind-scrollbar'),
		function ({ addUtilities }: any) {
			const newUtilities = {
				// '.custom-li': {
				// 	color: '#3b82f6',
				// },
			}
			addUtilities(newUtilities, ['responsive', 'hover'])
		},
	],
}
export default config
