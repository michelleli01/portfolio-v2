/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		colors: {
			'text-gray': '#1E1A15',
			'background-gray': '#F9F8F6',
			'primary-green': '#305F27',
			'secondary-beige': '#E6E2D4',
			'accent-brown': '#6E5A3B'
		},
		fontFamily: {
			serif: ['EB Garamound', 'serif'],
			sans: ['Inter', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
