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
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '120%': '120%'
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: ['2.5rem', '1.3'],
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      "2xl": ['1.563rem', '2rem'],
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
