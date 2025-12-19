/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#09090b',    // Equivalente ao zinc-950
          secondary: '#18181b', // Equivalente ao zinc-900
          accent: '#3b82f6',  // Equivalente ao blue-500 (A cor principal)
          text: '#e4e4e7',    // Equivalente ao gray-200
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Adicionando a animação personalizada que vi no seu código
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}