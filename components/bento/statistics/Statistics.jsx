import Card from '@/components/bento/card/Card'
import Globe from '@/components/bento/statistics/Globe'

import { Badge, Separator } from '@radix-ui/themes'

const StatisticsCard = () => {
  return (
    <Card className={'h-full p-3'}>
      <div className="group relative  h-full w-full overflow-hidden rounded-lg border bg-gradient-to-br from-muted via-muted/40 to-muted/0 px-2">
        <div className="relative z-20 flex w-full flex-col items-center pt-4 text-center text-primary drop-shadow">
          <div className="text-sm uppercase">
            Views:
            <Badge size="1" variant="soft" className="text-sm">
              103,000
            </Badge>
          </div>
          <Separator className="my-2" />
          <div className="text-sm uppercase">
            Recent visitors:
            <Badge size="1" variant="soft" className="text-sm">
              US 🇺🇸
            </Badge>
          </div>
        </div>

        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Globe />
        </div>
      </div>
    </Card>
  )
}

export default StatisticsCard
