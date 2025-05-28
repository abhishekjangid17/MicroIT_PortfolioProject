/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: 'class', // <- Add this line
  theme: {
    extend: {
      fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
    },
  },
  plugins: [],
}


