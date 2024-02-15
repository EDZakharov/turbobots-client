import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},

			keyframes: {
				opc: {
					'0%,': { opacity: '0' },
					'100%': { opacity: '100' },
				},
			},
			animation: {
				opc: '2s ease-in-out',
			},
			colors: {
				'kaspa-color': '#6fc7ba',
				'bitcoin-color': '#F7931A',
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
		function ({ addUtilities }: any) {
			const newUtilities = {
				// '.custom-li': {
				// 	color: '#3b82f6',
				// },
				// '.custom-li:hover': {
				// 	background: 'purple',
				// },
			}
			addUtilities(newUtilities, ['responsive', 'hover'])
		},
	],
}
export default config
