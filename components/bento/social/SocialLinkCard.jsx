import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import { navigation } from '@/lib/get-navigation'
import { IconButton, Tooltip } from '@radix-ui/themes'

const SocialLinkCard = () => {
  const { items: socialLinks } = navigation.find(item => item.id === 'social')
  return (
    <Card className={'h-full p-3'}>
      <ul className="relative flex h-full w-full items-center justify-around rounded-lg border bg-gradient-to-br from-muted/0 via-muted/40 to-muted/0">
        <CardBg />
        {socialLinks.map(item => {
          const Icon = item.icon
          return (
            <li key={item.id} className="z-10">
              <Tooltip content={item.name}>
                <IconButton size="1" variant="ghost" className="group">
                  <Icon size="24" stroke="1.5" />
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
