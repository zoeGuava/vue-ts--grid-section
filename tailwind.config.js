// const colors = require('tailwindcss/colors')

module.exports = {
  //mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: 'hsl(263, 55%, 52%)',
        grey : 'hsla(217, 19%, 35%, 1)',
        blue: {
          deep: 'hsla(219, 29%, 14%, 1)'
        },
        content: 'hsla(0, 0%, 81%, 1)',
      },
      boxShadow: {
        card: '40px 60px 50px -47px rgba(72, 85, 106, 0.247378);'
      }
    },
  },
  plugins: [],
}
