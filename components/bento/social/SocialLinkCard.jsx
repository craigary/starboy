'use client'
import Card from '@/components/bento/card/Card'
import { Button } from '@/components/ui/button'
import { navigation } from '@/lib/get-navigation'
import { cn } from '@/lib/utils'

const SocialLinkCard = () => {
  const { items: socialLinks } = navigation.find(item => item.id === 'social')

  return (
    <Card className="h-full p-3">
      <div className="flex h-full w-full items-center overflow-x-auto rounded-md border border-border bg-muted/20">
        <div className="flex gap-[--gap] overflow-x-hidden [--gap:0.5rem] md:[--gap:0.5rem]">
          {Array.from({ length: 2 }).map((_, i) => (
            <ul
              className={cn(
                'flex min-w-full shrink-0 animate-marquee justify-around gap-[--gap] direction-reverse'
              )}
              key={i}
              aria-hidden={i !== 0}
            >
              {socialLinks.map(item => {
                const Icon = item.icon
                return (
                  <li
                    key={item.id}
                    className="mr-4 flex h-full w-fit min-w-0 shrink-0 grow-0 items-center"
                  >
                    <Button
                      aria-label={item.name + ' icon'}
                      variant="soft"
                      className="bg-transparent"
                    >
                      <a href={item.link} target="_blank">
                        <Icon size="22" stroke="1.5" />
                      </a>
                      <span className="text-sm">{item.name}</span>
                    </Button>
                  </li>
                )
              })}
            </ul>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default SocialLinkCard
