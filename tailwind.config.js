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
    },
  },
  plugins: [],
}

