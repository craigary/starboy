import { Badge } from '@/components/ui/badge'
import MyServiceIcon from '@/components/uses/MyServiceIcon'
import { cn } from '@/lib/utils'
import { IconArrowUpRight } from '@tabler/icons-react'

const MyServicesList = ({ myServicesList }) => {
  // Use Map instead.
  const colorMap = new Map([
    [
      'pink',
      'bg-[#f4008c16] text-[#b60074d6] dark:bg-[#fe37cc29] dark:text-[#ff8dcc]'
    ],
    [
      'orange',
      'bg-[#ff9c0029] text-[#cc4e00] dark:bg-[#fb6a0025] dark:text-[#ffa057]'
    ],
    [
      'blue',
      'bg-[#008ff519] text-[#006dcbf2] dark:bg-[#0077ff3a] dark:text-[#70b8ff]'
    ],
    [
      'purple',
      'bg-[#4400ee0f] text-[#1f0099af] dark:bg-[#8354fe36] dark:text-[#baa7ff]'
    ],
    [
      'green',
      'bg-[#00ae4819] text-[#007152df] dark:bg-[#02f99920] dark:text-[#21fec0d6]'
    ],
    [
      'default',
      'bg-[#0000000f] text-[#0000009b] dark:bg-[#ffffff12] dark:text-[#ffffffaf]'
    ]
  ])

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
                      <a href={item.link} target="_blank">
                        <h3 className="mb-2 flex items-center text-lg font-medium">
                          {item.name}
                          <IconArrowUpRight
                            size="18"
                            className="ml-2 opacity-0 transition-all group-hover:opacity-80"
                          />
                        </h3>
                      </a>
                      <p className="text-sm font-light leading-6">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden w-1/3 shrink-0 flex-wrap justify-end gap-2 md:flex ">
                      {item.platform.map(item => (
                        <Badge
                          variant="custom"
                          className={cn(
                            colorMap.get(item.color),
                            'rounded px-2 font-normal leading-none'
                          )}
                          key={item.id}
                        >
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* <p className="hidden w-14 shrink-0 text-right text-sm md:block">
                    {item.price === 0
                      ? item.price
                      : item.price
                      ? item.price
                      : 'free'}
                  </p> */}
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
