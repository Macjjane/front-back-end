/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-300":"#b5838d",
        "blue-200":"#0096c7",
      }
    },
  },
  plugins: [],
}