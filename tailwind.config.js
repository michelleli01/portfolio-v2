/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				default: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
			},

			letterSpacing: {
				widest: '.15em'
			},
			fontSize: {
				title: ['clamp(3.125rem, 5vw, 7.5rem)'],
				'heading-1': ['clamp(1.85rem, 3vw, 3.75rem)'],
				'heading-2': ['clamp(1.5rem, 2vw, 3em)'],
				'heading-3': ['clamp(1.3rem, 1.5vw, 2.5rem)'],
				'heading-4': '1.3rem',
				body: '1.05rem'
			},
			colors: {
				transparent: 'transparent',
				general: '#1E1A15',
				gray: '#F9F8F6',
				primary: '#305F27',
				secondary: '#B2A38C',
				accent: '#625035',
				beige: '#EAE7E2',
				'gray-2': '#626262'
			},
			fontFamily: {
				serif: ['EB Garamound', 'serif'],
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), 'prettier-plugin-tailwindcss']
};
