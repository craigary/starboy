const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      title: ['Oswald', ...fontFamily.sans],
      sans: ['Inter', ...fontFamily.sans]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
