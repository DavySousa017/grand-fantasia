/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#BF2C2C",
        green: "#008000",
        dark: "#010709",
        menosDark: "#021014",
        bgFromArcher: "#071002",
        bgToArcher: "#1E3712",
        bgFromWarrior: "#0E0E0E",
        bgToWarrior: "#262626",
        bgFromMage: "#0E0E0E",
        bgToMage: "#361717",
        bgFromPriest: "#262626",
        bgToPriest: "#3A5C74",
      },
    },
  },
  plugins: [],
};
