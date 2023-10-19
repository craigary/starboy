const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      fontFamily: {
        juventus: [
          'var(--font-juventus-bold)',
          ...defaultTheme.fontFamily.sans
        ],
        sans: ['var(--font-manrope)', ...defaultTheme.fontFamily.sans],
        serif: [
          'var(--font-playfair-display)',
          ...defaultTheme.fontFamily.serif
        ]
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'flip-in': {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(-90deg)' }
        },
        'flip-out': {
          '0%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0)' }
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        },
        'move-ltr': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        marquee: {
          '0%': { transform: 'translateX(calc(-100% - var(--gap)))' },
          '100%': { transform: 'translateX(0)' }
        },
        'marker-pulse': {
          '0%': {
            transform: 'translate(-50%,-50%) scale(1)',
            opacity: 1
          },
          '35%': {
            transform: 'translate(-50%,-50%) scale(8)',
            opacity: 0
          },
          '100%': {
            transform: 'translate(-50%,-50%) scale(8)',
            opacity: 0
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'flip-in': 'flip-in .25s ease-in',
        'flip-out': 'flip-out .25s ease-in',
        gradient: 'gradient 2s ease infinite',
        marquee: 'marquee 35s linear infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
