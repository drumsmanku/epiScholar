/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "default-colors-black": "#3a3a3a",
        "dark-blue": "#02347d",
      },
      spacing: {},
      fontFamily: {
        "heading-4-bold": "Sarabun",
        inherit: "inherit",
      },
      borderRadius: {
        "981xl": "1000px",
      },
    },
    fontSize: {
      "17xl": "36px",
      xs: "12px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
