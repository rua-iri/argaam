import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        splat1: "url('/assets/splat1.png')",
        splat2: "url('/assets/splat2.png')",
        splat3: "url('/assets/splat3.png')",
      },
      colors: {
        limeGreen: "#CDFADB",
        softYellow: "#F6FDC3",
        softOrange: "#FFCF96",
        softRed: "#FF8080",
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#CDFADB",
          secondary: "#FF8080"
        },
      },
    ],

  },
}

