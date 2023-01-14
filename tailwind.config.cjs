/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			purple: colors.purple,
			sky: colors.sky,
			// My palette
			background: '#0f0e17',
			lightBackground: '#2e2f3e',
			text: '#fffffe',
			avatarBackground: '#DCE1E0',
			darkText: '#a7a9be',
			primary: '#ff8906',
			darkPrimary: '#f25f4c',
			secondary: '#e53170'
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
}
