import type { Config } from 'tailwindcss';

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
                'cards-color': '#2E3847',
                'cards-back-color': '#0E121BB2',
                'sidebar-color-dark': '#232E41',
                'primary-color': '#141C23',
                'secondary-color': '#1D1D1E53',
                'sidebar-dark-color': '#22262C',
            },

            boxShadow: {
                'r-xl': '0 0 20px 0 rgba(0, 0, 0, 0.3)',
                'rl-md': '0px 6px 16px 2px rgba(34, 60, 80, 0.26)',
                'trl-md': '0px -3px 10px 2px rgba(34, 60, 80, 0.2)',
                'brl-md': '0px 3px 10px 2px rgba(34, 60, 80, 0.2)',
                'xy-md': '-1px 0px 25px 2px rgba(34, 60, 80, 0.27)',
                primitive: '0px 8px 5px 5px rgba(0,0,0,0.25)',
                main: '0px 0px 7px 0px #00000039',
                bottom: '0px 14px 13px -11px rgba(0,0,0,0.43)',
                aesthetic: '0 3px 10px rgb(0,0,0,0.2)',
                demura: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                brutal: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                ragnarok:
                    '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)',
                stiglitz:
                    'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                studydesk:
                    '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)',
                sleek: 'rgba(13, 38, 76, 0.19) 0px 9px 20px',
                jubilation: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                derek: '0px 0px 0px 1px rgb(0 0 0 / 0.06),0px 1px 1px -0.5px rgb(0 0 0 / 0.06),0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 0px 6px 6px -3px rgb(0 0 0 / 0.06),0px 12px 12px -6px rgb(0 0 0 / 0.06), 0px 24px 24px -12px rgb(0 0 0 / 0.06)',
            },

            gridTemplateRows: {
                // Simple 16 row grid
                '16': 'repeat(16, minmax(0, 1fr))',
                custom: 'repeat(4, minmax(0, 100px))',

                // Complex site-specific row configuration
                layout: '',
            },
            gridTemplateColumns: {
                '10-custom': '150px repeat(9, minmax(0, 1fr))',
                '9-custom': 'auto repeat(9, minmax(0, 1fr))',
                '3-custom': 'minmax(0, 400px) auto auto',
                '2-custom': 'repeat(2, minmax(auto, auto))',
                '4-custom': 'minmax(0, 700px) auto auto auto',
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
        require('tw-elements/dist/plugin.cjs'),
        function ({ addUtilities }: any) {
            const newUtilities = {
                // '.custom-li': {
                // 	color: '#3b82f6',
                // },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
export default config;
