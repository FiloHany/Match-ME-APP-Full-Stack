import { config } from "process";

// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx, tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx, tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx, tsx,mdx}",
    // single component styles
    "./node_modules/@heroui/theme/dist/components/button.js",
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
export default config;