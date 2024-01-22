/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('./public/banner-bg.png')",
      },
      fontFamily: {
        game: ["Pixelify Sans", "sans-serif"],
        cur: ["Grape Nuts", "cursive", "Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
