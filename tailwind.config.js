/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        success: "#348352",
        primaryBlack: "#080808",
        primaryWhite: "#F6F6F6",
        error: "#E63535",
      },
    },
  },
  plugins: [],
};
