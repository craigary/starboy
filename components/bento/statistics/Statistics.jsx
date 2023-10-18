import Card from '@/components/bento/card/Card'
import Globe from '@/components/bento/statistics/Globe'
import { Badge } from '@radix-ui/themes'
import { client } from '@umami/api-client'

const StatisticsCard = async () => {
  const { ok, data, status, error } = await client.getWebsiteStats(
    process.env.UMAMI_WEBSITE_ID,
    {
      startAt: 1685548800,
      endAt: new Date().valueOf()
      // unit: 'hour',
      // timezone: 'Asia/Shanghai'
    }
  )

  return (
    <Card className={'h-full p-3'}>
      <div className="group relative h-full w-full overflow-hidden rounded-md border bg-background/50 px-2 shadow-none transition-shadow hover:shadow-xl hover:shadow-muted/60 dark:bg-muted/20">
        <div className="relative z-20 my-2 flex w-full flex-col items-center text-center text-sm text-primary">
          <div>
            Views:
            <Badge size="1" variant="soft">
              {ok && data.pageviews.value.toLocaleString()}
            </Badge>
          </div>
          {/* <Separator className="my-1 lg:hidden xl:block" />
          <div>
            Recent:
            <Badge size="1" variant="soft">
              US 🇺🇸
            </Badge>
          </div> */}
        </div>

        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Globe />
        </div>
      </div>
    </Card>
  )
}

export default StatisticsCard
