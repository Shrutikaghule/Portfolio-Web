/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#000814',
        customText:'#ffc300',
        custombtn1:'#003566',
        custombtn2:'#001d3d',
        customIcon:'#e0e1dd'
      },
    },
  },
  plugins: [],
}