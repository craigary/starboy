import Card from '@/components/bento/card/Card'
import CardBg from '@/components/bento/card/CardBg'
import { getTechStack } from '@/lib/sanity/get-tech-stack'
import { Tooltip } from '@radix-ui/themes'
import Image from 'next/image'

const TechStackCard = async ({ delay }) => {
  const data = await getTechStack()
  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full rounded border p-2">
        <CardBg />
        <p className="text-md font-mono text-sm font-medium text-primary/40">
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
                    height={32}
                    width={32}
                    alt=""
                    src={imgSrc}
                    className="fill-red-500 opacity-40 transition-all hover:opacity-100 dark:opacity-90 dark:invert dark:hover:opacity-100"
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
