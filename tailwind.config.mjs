/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sansation: ['Sansation', 'ui-sans-serif', 'system-ui'],
			  },
			  gridTemplateColumns: {
				'auto-red': 'repeat(auto-fit, minmax(200px, 1fr))',
				'auto-tecnology': 'repeat(auto-fit, minmax(60px, 1fr))',
				'auto-proyects': 'repeat(auto-fit, minmax(280px, 1fr))',
				'auto-proyects-max': 'repeat(auto-fit, minmax(340px, 1fr))',
			}
		},
	},
	plugins: [],
}