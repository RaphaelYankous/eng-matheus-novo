/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        engine: {
          dark: '#1a1a1a',    // Fundo escuro (Header/Footer)
          primary: '#2D3748', // Cor principal dos elementos
          accent: '#4A5568',  // Detalhes
          light: '#F7FAFC',   // Fundo das seções claras
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Vamos garantir uma fonte clean
      }
    },
  },
  plugins: [],
}