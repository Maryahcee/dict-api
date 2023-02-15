/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ' white': 'ffffff',
        'lighter-gray': 'F4F4F4',
        'light-gray': 'CECECE',
        'gray': '838383',
        'purple': '#A445ED',
      }
    },
  },
  plugins: [],
}
