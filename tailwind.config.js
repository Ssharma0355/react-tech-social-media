/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // toggle with a parent 'dark' class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#f6f6f6", // your default light background
        lightText: "#262626", // default light text
        darkBg: "#121212", // default dark background
        darkText: "#ffffff", // default dark text
      },
    },
  },
  plugins: [],
};
