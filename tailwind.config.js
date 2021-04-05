const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './layouts/**/*.{js,jsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: '#ffffff'
        },
        night: {
          DEFAULT: '#111827'
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...fontFamily.sans],
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
