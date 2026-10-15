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
        charcoal: {
          950: '#090d13',
          900: '#0d1117',
          850: '#111722',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
          500: '#484f58',
        }
      }
    },
  },
  plugins: [],
}
