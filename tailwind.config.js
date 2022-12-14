/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},

		extend: {
			fontFamily: {
				SignikaNegative: ['Signika Negative', 'sans-serif'],

				Cinzel: ['Cinzel', 'serif'],
				SourceSansPro: ['Source Sans Pro', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				GreatVibes: ['Great Vibes', 'cursive'],
				Lobster: ['Lobster', 'cursive'],
				FjallaOne: ['Fjalla One', 'sans-serif'],
			},
			backgroundImage: {
				'hero-pattern': "url('./assets/bgimg.jpg')",
				'Navbar-Background': "url('./assets/NavBackground.jpg')",
			},
		},
	},
	plugins: [],
};
