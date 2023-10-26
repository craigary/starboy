import Card from '@/components/bento/card/Card'
import { techStack } from '@/lib/get-tech-stack'
import { cn } from '@/lib/utils'

const TechStackCard = async ({ delay }) => {
  const stackArray = [
    techStack.slice(0, Math.floor(techStack.length / 2)),
    techStack.slice(Math.floor(techStack.length / 2))
  ]

  return (
    <Card
      className="group relative h-full rounded-none p-3 transition-all"
      delay={delay}
    >
      <div className="relative flex h-full shrink-0 flex-col rounded-md border border-border shadow-none transition-shadow  hover:shadow-xl hover:shadow-muted/60">
        <div className="w-full grow">
          <div
            className="flex h-full w-full flex-col justify-around overflow-x-auto"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent, rgba(0,0,0,1) 25%,  rgba(0,0,0,1) 75%, transparent)',
              maskImage:
                'linear-gradient(to right, transparent, rgba(0,0,0,1) 25%,  rgba(0,0,0,1) 75%, transparent)'
            }}
          >
            {stackArray.map((stack, index) => (
              <div
                key={index}
                className={cn(
                  'relative flex gap-[--gap] overflow-hidden [--gap:0.5rem] first:mb-2 first:mt-4 last:mb-4 last:mt-2 md:[--gap:0.5rem]'
                )}
              >
                {Array.from({ length: 2 }).map((_, i) => (
                  <ul
                    className={cn(
                      'flex min-w-full shrink-0 animate-marquee justify-around gap-[--gap] ',
                      index % 2 === 0 ? 'direction-normal' : 'direction-reverse'
                    )}
                    key={i}
                    aria-hidden={i !== 0}
                  >
                    {stack.map(item => {
                      const Icon = item.icon
                      return (
                        <li key={item.id} className="px-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background p-2 shadow shadow-muted/50 md:h-12 md:w-12">
                            <Icon
                              size="28"
                              className="opacity-70 transition-all hover:opacity-100 dark:opacity-90 dark:hover:opacity-100"
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

        <div className="rounded-b bg-background p-4  dark:bg-muted/20">
          <p className="mb-2 text-base font-medium text-primary/90">
            {'>_ '}My Tech Stack
          </p>
          <p className="text-sm text-primary/50">
            I usually prefer React/Next.js for my projects due to its
            evergrowing ecosystem. I love to use Tailwind CSS and Radix UI for
            styling.
          </p>
        </div>
      </div>
    </Card>
  )
}

export default TechStackCard
