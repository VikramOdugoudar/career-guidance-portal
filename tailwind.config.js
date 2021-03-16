module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			backgroundImage: (theme) => ({
				"home-img": "url('./images/undraw.png')",
				"search-img": "url('./images/search.png')",
				"error-img": "url('./images/error.png')",
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
