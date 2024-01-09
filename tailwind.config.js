/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Akira: ["Akira", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}