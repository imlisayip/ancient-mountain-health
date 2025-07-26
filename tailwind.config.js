const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        alternate: "var(--alternate-color)",
        background: "var(--background-color)",
      },
    },
  },
  plugins: [],
};
