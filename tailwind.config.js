/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        darkbg: '#08090d',
        darkcard: '#101218',
        darkborder: '#1f2430',
        charcoal: {
          950: '#06070a',
          900: '#0a0c12',
          850: '#0f121b',
          800: '#151923',
          700: '#1d2331',
          600: '#2b3345',
          500: '#484f58',
        }
      }
    },
  },
  plugins: [],
}
