import { Manrope, Playfair_Display, WindSong } from 'next/font/google'
import localFont from 'next/font/local'

export const juventusFont = localFont({
  src: '../assets/JuventusFans--bold.woff2',
  display: 'swap',
  variable: '--font-juventus-bold'
})

export const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-manrope'
})

export const windsong = WindSong({ subsets: ['latin'], weight: ['500'] })

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
})
