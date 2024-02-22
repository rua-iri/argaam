/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limeGreen: "#CDFADB",
        softYellow: "#F6FDC3",
        softOrange: "#FFCF96",
        softRed: "#FF8080",
      }
    },
  },
  plugins: [],
}

