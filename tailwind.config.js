/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retreat: {
          bg: '#f5f2eb',
          surface: '#ffffff',
          green: '#1f3b2e',
          greenSoft: '#2f5a45',
          accent: '#c4703a',
          accentSoft: '#e8956a',
          text: '#1a1a12'
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Jost', 'sans-serif']
      }
    },
  },
  plugins: [],
}
