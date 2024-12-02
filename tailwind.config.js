/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        khand: ['Khand', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },
    },
  },
  plugins: [],
}

