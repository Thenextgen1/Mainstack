/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainstackOrange": "#FF5403",
        "mainstackGray": "#4D5760",
        "mainstackBlack": "#131316"
      }
    },
  },
  plugins: [],
}
