const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            'primary-bg': colors.red[50],
            'primary-text': colors.black
          }
        }
      },
      themes: [
        {
          name: 'deep',
          selectors: ['[data-theme="deep"]'],
          extend: {
            colors: {
              'primary-bg': colors.gray[800],
              'primary-text': colors.white
            }
          }
        }
      ]
    })
  ]
}
