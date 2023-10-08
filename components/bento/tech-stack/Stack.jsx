import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import { getTechStack } from '@/lib/sanity/get-tech-stack'
import { Tooltip } from '@radix-ui/themes'
import Image from 'next/image'

const TechStackCard = async ({ delay }) => {
  const data = await getTechStack()
  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full rounded-lg border bg-gradient-to-br from-muted/0 via-muted/40 to-muted/0 p-2">
        <CardBg />
        <p className="text-md font-mono font-medium text-primary/40">
          {'{/* My Tech Stack */}'}
        </p>
        <ul className="flex h-full w-full flex-nowrap items-center justify-between gap-4 py-4">
          {data.map(item => {
            const encodedSvg = encodeURIComponent(item.icon.svg)
            const imgSrc = `data:image/svg+xml,${encodedSvg}`

            return (
              <li key={item._id} className="">
                <Tooltip content={item.title} my="1">
                  <Image
                    height={40}
                    width={40}
                    alt=""
                    src={imgSrc}
                    className="opacity-20 transition-all hover:opacity-100 dark:opacity-90 dark:invert dark:hover:opacity-100"
                  />
                </Tooltip>
              </li>
            )
          })}
        </ul>
      </div>
    </Card>
  )
}

export default TechStackCard
