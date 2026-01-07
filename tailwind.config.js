/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
     colors: {
  'primary-color': '#1C1F33',        
  'accent-color': '#75c9a3',         
  'background-light': '#F7F9FC',     
  'text-secondary': '#42393b',       
  'creative-green': '#A9FBD7',      
},

      fontFamily: {
        'font': ["Tektur", 'sans-serif'],
        'font2': ["Rajdhani", 'sans-serif'],
        'font3': ["Poppins", 'sans-serif']
      },
    },
  },
  plugins: [],
}
