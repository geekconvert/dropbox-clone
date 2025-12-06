// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
    "./node_modules/@heroui/theme/dist/components/(avatar|badge|button|card|code|divider|dropdown|input|kbd|link|listbox|modal|navbar|progress|snippet|spinner|toggle|table|tabs|toast|popover|ripple|menu|form|checkbox|spacer).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
