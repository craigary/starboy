import Card from '@/components/bento/card/Card'
import { navigation } from '@/lib/get-navigation'
import { IconButton, Tooltip } from '@radix-ui/themes'

const SocialLinkCard = () => {
  const { items: socialLinks } = navigation.find(item => item.id === 'social')
  return (
    <Card className="h-full p-3">
      <ul className="relative flex h-full w-full flex-wrap items-center justify-around rounded-md border border-border bg-muted/20 py-1">
        {socialLinks.map(item => {
          const Icon = item.icon
          return (
            <li key={item.id} className="z-10">
              <Tooltip content={item.name}>
                <IconButton
                  size="1"
                  variant="ghost"
                  color="gray"
                  highContrast
                  className="group"
                >
                  <Icon size="22" stroke="1.5" />
                </IconButton>
              </Tooltip>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default SocialLinkCard
