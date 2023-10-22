import { Playfair_Display, WindSong } from 'next/font/google'
import localFont from 'next/font/local'

export const juventusFont = localFont({
  src: '../assets/JuventusFans--bold.woff2',
  display: 'swap',
  variable: '--font-juventus-bold'
})

export const spaceGrotesk = localFont({
  src: '../assets/SpaceGrotesk[wght].woff2',
  display: 'swap',
  variable: '--font-space-grotesk'
})

// export const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin', 'latin-ext'],
//   variable: '--font-space-grotesk'
// })

export const windsong = WindSong({ subsets: ['latin'], weight: ['500'] })

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
})
