/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          300: '#5eead4',
          700: '#0f766e',
        },
        neutral: {
          100: '#f5f5f5',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
}
