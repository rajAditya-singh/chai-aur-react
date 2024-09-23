/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      translate: {
        '-50%': '-50%',
      },
      colors: {
        customNavy: '#1e293b',
        customSlate: '#262B40',
        customSky: '#59b2f4',
      },
    },
  },
  plugins: [],
}