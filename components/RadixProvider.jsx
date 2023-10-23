'use client'
import { manrope, playfairDisplay } from '@/lib/fonts'

const RadixProvider = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-manrope: ${manrope.variable};
          --font-playfair-display: ${playfairDisplay.variable};
      `}</style>
      {children}
      {/* <TooltipProvider delayDuration={300}>{children}</TooltipProvider> */}
    </>
  )
}

export default RadixProvider
