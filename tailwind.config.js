/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { beige: "#f8f5f0", gold: "#c6a664" },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        script: ['"Great Vibes"', "cursive"],
        greatvibes: ['"Great Vibes"', "cursive"], // para el contador
      },
    },
  },
  plugins: [],
};
