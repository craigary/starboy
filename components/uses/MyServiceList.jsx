import MyServiceIcon from '@/components/uses/MyServiceIcon'
import { Badge, Flex } from '@radix-ui/themes'
import { IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'

const MyServicesList = ({ myServicesList }) => {
  const colorRef = {
    pink: 'pink', // ruby Crimson Pink  Plum
    orange: 'orange', // orange tomato
    blue: 'blue', // Indigo Blue Cyan
    purple: 'violet', // Plum Purple Violet Iris
    green: 'jade', // Teal Jade Green Grass
    default: 'gray' // Gray Mauve Slate Sage Olive  Sand
  }
  return (
    <div>
      <ul>
        {myServicesList.map(item => (
          <li key={item.id}>
            <div className="flex items-center gap-8 rounded-md px-4 hover:bg-primary/5">
              <div className="py-6">
                <MyServiceIcon item={item} />
              </div>
              <div className="grow self-stretch border-b">
                <div className="flex h-full items-center justify-between py-4">
                  <div className="group flex w-full grow items-center justify-between gap-8">
                    <div>
                      <Link href={item.link} target="_blank">
                        <h3 className="mb-2 flex items-center text-lg font-medium">
                          {item.name}
                          <IconArrowUpRight
                            size="18"
                            className="ml-2 opacity-0 transition-all group-hover:opacity-80"
                          />
                        </h3>
                      </Link>
                      <p className="text-sm font-light leading-6">
                        {item.description}
                      </p>
                    </div>
                    <Flex
                      gap="2"
                      justify="end"
                      shrink="0"
                      wrap="wrap"
                      className="hidden w-1/3 md:flex"
                    >
                      {item.platform.map(item => (
                        <Badge
                          size="1"
                          key={item.id}
                          color={colorRef[item.color]}
                        >
                          {item.name}
                        </Badge>
                      ))}
                    </Flex>
                  </div>
                  <p className="hidden w-14 shrink-0 text-right text-sm md:block">
                    ${item.price ?? '?'}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyServicesList
