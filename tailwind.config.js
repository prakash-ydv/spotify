/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'appear-from-bottom': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.65)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'appear-from-bottom': 'appear-from-bottom 0.2s ease-out forwards',
      },

      fontFamily:{
        'poppins':['poppins'],
        'redit':['Reddit+Mono']
      },
  
      colors:{
        'primary':['#121212'],
        'secondary':['#242424'],
      }
    },

  },
  plugins: [],
}

