/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Lato, sans-serif',
        serif: 'Crimson Pro, serif',
      },
    },
  },
  plugins: [],
}
