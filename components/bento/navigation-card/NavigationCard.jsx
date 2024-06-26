'use client'
import Card from '@/components/bento/card/Card'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'

const NavigationCard = ({ delay, children, className, tiltColor, href }) => {
  return (
    <Card className="relative h-full w-auto p-3" delay={delay}>
      <Link href={href}>
        <Tilt
          glareEnable
          tiltEnable={false}
          scale={1.05}
          glareMaxOpacity={0.8}
          glareColor={tiltColor}
          glarePosition="all"
          className="h-full"
          glareBorderRadius="calc(var(--radius) - 2px)"
        >
          <div
            className={cn(
              'relative z-10 flex h-full w-full items-center justify-between overflow-hidden rounded-md border bg-secondary/20 px-4 py-4 transition-all hover:shadow-md hover:shadow-muted/50 md:py-8',
              className
            )}
          >
            {children}
          </div>
        </Tilt>
      </Link>
    </Card>
  )
}

export default NavigationCard
