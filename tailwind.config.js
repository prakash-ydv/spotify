/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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

