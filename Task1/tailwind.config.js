/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'bg-light': '#f0f0f0',
        'bg-dark': '#1a202c',
      },
    },
  },
  plugins: [],
}

