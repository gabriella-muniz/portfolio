/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#003838',
      },
      fontFamily: {
        'font': ["Tektur", 'sans-serif'],
        'font2': ["Rajdhani", 'sans-serif']
      },
    },
  },
  plugins: [],
}
