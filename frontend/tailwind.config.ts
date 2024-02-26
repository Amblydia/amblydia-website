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
      'smoke': '#fafafa',
      'black': '#252525',
      'gray': {
        '50': '#f7f8f8',
        '100': '#edeef1',
        '200': '#d8dbdf',
        '300': '#b6bac3',
        '400': '#8e95a2',
        '500': '#6b7280',
        '600': '#5b616e',
        '700': '#4a4e5a',
        '800': '#40444c',
        '900': '#383a42',
        '950': '#25272c',
    },
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
      'blue': {
        '50': '#DEF7FF',
        '100': '#82E0FF',
        '200': '#40CFFF',
        '300': '#00BFFF',
        '400': '#12598C',
        '500': '#0E487B',
      },
      'sand': {
        '50': '#FFDEC2',
        '100': '#F7D5B7',
        '200': '#6E5845',
      },
    },
  },
  plugins: [],
};
export default config;
