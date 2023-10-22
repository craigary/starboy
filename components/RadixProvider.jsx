'use client'
import { TooltipProvider } from '@/components/ui/tooltip'
import { playfairDisplay, spaceGrotesk } from '@/lib/fonts'

const RadixProvider = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-space-grotesk: ${spaceGrotesk.variable};
          --font-playfair-display: ${playfairDisplay.variable};
      `}</style>
      <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
    </>
  )
}

export default RadixProvider
