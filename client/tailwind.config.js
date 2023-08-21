/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
        epic: ["Wix Madefor Display", "sans-serif"],
        oi: ["Oi", "sans-serif"]
      },
    },
  },
  plugins: [],
}

