import Card from '@/components/bento/card/Card'
import { getTechStack } from '@/lib/sanity/get-tech-stack'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const TechStackCard = async ({ delay }) => {
  const data = await getTechStack()

  const stackArray = [
    data,
    data.reverse(),
    [...[...data].sort(() => Math.random() - 0.5)]
  ]
  return (
    <Card
      className="group relative h-full rounded-none p-0 shadow-[inset_0_4px_6px_0_hsl(var(--muted)/0.5)] transition-all"
      delay={delay}
    >
      <div className="relative flex h-full shrink-0 flex-col">
        <div className="p-2">
          <p className="text-md font-mono  text-sm font-medium text-primary/40">
            {'{/* My Tech Stack */}'}
          </p>
        </div>
        <div className="flex h-full w-full grow flex-col justify-around overflow-x-auto">
          {stackArray.map((stack, index) => (
            <div
              key={index}
              className={cn(
                'relative flex gap-[--gap] overflow-hidden [--gap:0.5rem] md:[--gap:0.5rem]'
              )}
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <ul
                  className={cn(
                    'animate-marquee flex min-w-full shrink-0 justify-around gap-[--gap]',
                    index % 2 === 0 ? 'direction-normal' : 'direction-reverse'
                  )}
                  key={i}
                >
                  {stack.map(item => {
                    const encodedSvg = encodeURIComponent(item.icon.svg)
                    const imgSrc = `data:image/svg+xml,${encodedSvg}`
                    return (
                      <li key={item._id} className={cn('my-4 px-4')}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background p-2 shadow-lg md:h-12 md:w-12">
                          <Image
                            height={32}
                            width={32}
                            alt=""
                            src={imgSrc}
                            className="opacity-70 transition-all hover:opacity-100 dark:opacity-90 dark:invert dark:hover:opacity-100"
                          />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default TechStackCard
