'use client'
import { TooltipProvider } from '@/components/ui/tooltip'
import { playfairDisplay, spaceGrotesk } from '@/lib/fonts'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <style jsx global>{`
        :root {
          --font-space-grotesk: ${spaceGrotesk.variable};
          --font-playfair-display: ${playfairDisplay.variable};
          font-feature-settings: 'ss04' 1;
      `}</style>
      <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
    </NextThemesProvider>
  )
}
