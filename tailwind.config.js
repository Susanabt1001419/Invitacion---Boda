/** @type {import('tailwindcss').Config} */
fontFamily: {
  greatvibes: ['"Great Vibes"', 'cursive'],
},
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        greatvibes: ['"Great Vibes"', 'cursive'], // para el contador
      },
      colors: { beige: "#f8f5f0", gold: "#c6a664" },
    },
  },
  plugins: [],
};
  },
  plugins: []
};
