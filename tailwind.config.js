/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ["Prompt", "sans-serif"],
        'button': ["Rubik", "sans-serif"],
        'resTitle': ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
}