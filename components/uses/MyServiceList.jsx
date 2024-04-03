import MyServiceIcon from '@/components/uses/MyServiceIcon'
import { Badge } from '@radix-ui/themes'
import { IconArrowUpRight } from '@tabler/icons-react'

const MyServicesList = ({ myServicesList }) => {
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
                          color={item.color}
                          variant="soft"
                          radius="medium"
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
