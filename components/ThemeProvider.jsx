'use client'
import { TooltipProvider } from '@/components/ui/tooltip'
import { manrope, playfairDisplay } from '@/lib/fonts'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <style jsx global>{`
        :root {
          --font-manrope: ${manrope.variable};
          --font-playfair-display: ${playfairDisplay.variable};
      `}</style>
      <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
    </NextThemesProvider>
  )
}
