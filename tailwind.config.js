/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nuninto: ["Nunito Sans", "sans-serif"]
      },
      colors: {
        primarycolor: "#FFCA1D",
        secondarycolor: "#565656"
      }

    },
  },
  plugins: [],
}