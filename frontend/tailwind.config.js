/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray : "#f3f5f5",
        black1 : "#4b5563"
      }
    },
  },
  plugins: [],
}

