/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'special': ['Special Elite', 'cursive'],
        'lora': ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}