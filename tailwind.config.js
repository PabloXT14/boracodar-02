/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Lato, sans-serif',
        serif: 'Crimson Pro, serif',
      },
      colors: {
        primary: '#D9CDF7',
        secondary: '#271A45',
      },
    },
  },
  plugins: [],
}
