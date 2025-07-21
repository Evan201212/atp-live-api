/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tennis: {
          green: '#228B22',
          court: '#2E8B57',
          net: '#F5F5DC'
        }
      }
    },
  },
  plugins: [],
}