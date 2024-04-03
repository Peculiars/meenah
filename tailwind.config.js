/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titleFont: "Nunito Sans",
        bodyFont: "Poppins",
      },
      screens:{
        'xs':'320px',
        'sm': '375px',
        'sml': '500px',
        'md': '667px',
        'mdl':  '768px',
        'lg':  '960px',
        'lgl': '1024px',
        'xl':  '1280px'
      },
    },
  },
  plugins: [],
}

