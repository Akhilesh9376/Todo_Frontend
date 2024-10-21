import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [], // we will add number of themes here
  },
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
}