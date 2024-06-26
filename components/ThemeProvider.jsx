'use client'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <Theme>{children}</Theme>
    </NextThemesProvider>
  )
}
