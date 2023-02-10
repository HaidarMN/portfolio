/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        'nav-hov': 'navHov 1s ease-out infinite'
      },

      keyframes: {
        navHov: {
          'from': {
            content: ' ',
            width: '0px',
            height: '2px',
            backgroundColor: '#4C5870',
            borderRadius: '5px'
          },
          'to': {
            content: ' ',
            width: '100%',
            height: '2px',
            backgroundColor: '#4C5870',
            borderRadius: '5px'
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
