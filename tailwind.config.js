/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			letterSpacing: {
				widest: '.15em'
			},
			fontSize: {
				title: ['clamp(3.125rem, 5vw, 7.5rem)'],
				'heading-1': ['clamp(1.85rem, 1vw, 3.75rem)'],
				'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
				'heading-3': ['clamp(1.25rem, 1vw, 1.875rem)'],
				'heading-4': '1.25rem',
				body: '1rem'
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
	plugins: []
};
