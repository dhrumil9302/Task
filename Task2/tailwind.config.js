/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightModeBg: '#f7fafc', 
        darkModeBg: '#1a202c',  
        switchDark: '#4a5568',  
        switchLight: '#cbd5e0', 
        hoverRow: '#f1f5f9',    
        tableHeader: '#edf2f7'  
      },
    },
  },
  plugins: [],
}

