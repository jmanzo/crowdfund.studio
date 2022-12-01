const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        cfsBlue: "#333b69",
        cfsGray: "#6a798c",
        cfsOrange: "#fa6262"
      },
      backgroundImage: {
        'hero': "url('/img/bg-hero.png')",
      }
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: ['2.5rem', '1.3']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
