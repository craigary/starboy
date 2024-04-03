'use client'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <Theme>
        <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
      </Theme>
    </NextThemesProvider>
  )
}
