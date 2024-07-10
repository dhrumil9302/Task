/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-mode-bg': '#1a202c',
        'light-mode-bg': '#ffffff',
        'custom-gray': '#efefef',   
        'custom-dark-gray': '#2d3748' 
      },
    },
  },
  plugins: [],
}

