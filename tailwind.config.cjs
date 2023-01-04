/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#eafbf5",
          200: "#bff3e0",
          300: "#94eacc",
          400: "#69e2b8",
          500: "#3edaa3",
          600: "#1d976c",
          700: "#156b4c",
          800: "#0c402e",
          900: "#04150f",
        },
        secondary: "#93f9b9",
        fontColor: "#3a3a3a",
      },
      fontFamily: {
        display: ["Comfortaa", "cursive"],
        body: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

