import Card from '@/components/bento/card/Card'
import Globe from '@/components/bento/statistics/Globe'

import { Badge, Separator } from '@radix-ui/themes'

const StatisticsCard = () => {
  return (
    <Card className={'h-full p-3'}>
      <div className="group relative h-full w-full overflow-hidden rounded border bg-muted/20 px-2 ">
        <div className="relative z-20 flex w-full flex-col items-center my-2 text-center text-sm text-primary">
          <div className="uppercase">
            Views:
            <Badge size="1" variant="soft" >
              103,000
            </Badge>
          </div>
          <Separator className="my-1 lg:hidden xl:block" />
          <div className="uppercase">
            Recent:
            <Badge size="1" variant="soft" >
              US 🇺🇸
            </Badge>
          </div>
        </div>

        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden lg:hidden xl:block">
          <Globe />
        </div>
      </div>
    </Card>
  )
}

export default StatisticsCard
