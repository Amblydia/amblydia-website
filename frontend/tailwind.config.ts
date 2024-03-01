import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '992px',
			'xl': '1200px',
		},
		colors: {
			transparent: 'transparent',
			'white': '#ffffff',
			'black': '#000000',
			'blurple': {
				'50': '#eef3ff',
				'100': '#e0e9ff',
				'200': '#c6d6ff',
				'300': '#a4b9fd',
				'400': '#8093f9',
				'500': '#5865f2',
				'600': '#4445e7',
				'700': '#3836cc',
				'800': '#2f2fa4',
				'900': '#2d2f82',
				'950': '#1a1a4c',
			},
			'text': '#FAFAFA',
			'background': '#222222',
			'primary': '#47c2ff',
			'secondary': '#1E4785',
			'accent': '#2B28B8',
		},
	},
	plugins: [],
};
export default config;
