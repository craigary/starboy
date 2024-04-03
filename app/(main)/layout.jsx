import ToastProvider from '@/app/(main)/ToastProvider'
import { ThemeProvider } from '@/components/ThemeProvider'
import CardBg from '@/components/bento/card/CardBg'
import NavContent from '@/components/navigation/NavContent'
import Navbar from '@/components/navigation/Navbar'
import { juventusFont, manrope, playfairDisplay, windsong } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Script from 'next/script'

import { ScrollArea } from '@radix-ui/themes'
import 'mapbox-gl/dist/mapbox-gl.css'
import './globals.css'

export default function RootLayout({ children, params }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        'font-sans antialiased',
        juventusFont.variable,
        playfairDisplay.variable,
        manrope.variable
      )}
    >
      <Script
        async
        src="https://analytics.eu.umami.is/script.js"
        data-website-id="51da5491-5516-4d13-a72a-f2ede7a1f612"
      />

      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider />
          <main
            className="relative flex h-full min-h-screen w-full md:py-2"
            vaul-drawer-wrapper=""
          >
            <CardBg className="z-10 opacity-50" />
            <div className="absolute inset-0 z-20 h-full w-full bg-background opacity-95"></div>
            <div
              style={{ backgroundSize: '400% 400%' }}
              className="absolute inset-0 z-0 h-full w-full animate-gradient bg-gradient-to-br from-blue-500 via-orange-400 to-purple-500"
            ></div>

            <div className="relative z-30 h-screen w-0 shrink-0 transition-all md:h-[calc(100vh-16px)] md:w-64">
              <NavContent showCmdBtn={true} />
            </div>
            <div className="relative z-30 h-screen w-full overflow-y-auto bg-gradient-to-t from-secondary/20 to-background md:h-[calc(100vh-16px)] md:rounded-l-lg md:border-y md:border-l">
              {/* <div
                  className="pointer-events-none absolute top-1 z-30 h-14 w-[calc(100%-8px)] select-none opacity-95 backdrop-blur-[5px] after:absolute
                after:left-0 after:top-0 after:bg-gradient-to-b after:from-background
                after:to-transparent after:content-[''] first:top-0
                first:-mb-14 md:sticky md:h-20 md:rounded-tl-lg first:md:-mb-20
                "
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 25%, transparent)',
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 25%, transparent)'
                  }}
                ></div> */}
              <ScrollArea
                size="1"
                type="hover"
                scrollbars="vertical"
                scrollHideDelay={300}
                className="h-full"
              >
                <div className="relative flex min-h-screen flex-col px-4 md:min-h-[calc(100vh-18px)] md:px-6">
                  <Navbar />
                  {children}
                  <div className="mt-4 flex h-24 w-full shrink-0 items-center justify-center justify-self-end border-t border-border/40 text-center text-sm text-primary/60">
                    ©️ {new Date().getFullYear()} Crafted by{' '}
                    <div className={cn('ml-1 text-base', windsong.className)}>
                      Craig Hart
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
