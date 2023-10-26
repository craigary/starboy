import Card from '@/components/bento/card/Card'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { navigation } from '@/lib/get-navigation'

const SocialLinkCard = () => {
  const { items: socialLinks } = navigation.find(item => item.id === 'social')
  return (
    <Card className="h-full p-3">
      <ul className="relative flex h-full w-full items-center justify-around rounded-md border border-border bg-muted/20 py-1">
        {socialLinks.map(item => {
          const Icon = item.icon
          return (
            <li key={item.id} className="z-10">
              <Tooltip>
                <TooltipTrigger asChild>
                  {/* <IconButton
                    size="1"
                    aria-label={item.name + ' icon'}
                    variant="ghost"
                    color="gray"
                    highContrast
                    className="group"
                  >
                    <Icon size="22" stroke="1.5" />
                  </IconButton> */}

                  <Button
                    size="icon"
                    aria-label={item.name + ' icon'}
                    variant="soft"
                    className="bg-transparent"
                    asChild
                  >
                    <a href={item.link} target="_blank">
                      <Icon size="22" stroke="1.5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default SocialLinkCard
