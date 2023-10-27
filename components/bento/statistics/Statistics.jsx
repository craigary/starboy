import Card from '@/components/bento/card/Card'
import Globe from '@/components/bento/statistics/Globe'
import { Suspense } from 'react'

const StatisticsCard = async () => {
  const id = process.env.UMAMI_WEBSITE_ID
  const url = `https://api.umami.is/v1/websites/${id}/stats?startAt=1685548800&endAt=${new Date().valueOf()}`

  const res = await fetch(url, {
    headers: {
      'x-umami-api-key': process.env.UMAMI_API_KEY
    },
    cache: 'no-store'
  })
  const data = await res.json()

  return (
    <Card className="h-full p-3">
      <div className="group relative h-full w-full overflow-hidden rounded-md border bg-background/50 px-2 shadow-none transition-shadow hover:shadow-xl hover:shadow-muted/60 dark:bg-muted/20">
        <div className="mx-auto mt-5 w-fit font-semibold">
          <Suspense fallback={<span>loading...</span>}>
            <span className="font-normal">views:</span>
            {data.pageviews.value.toLocaleString()}
          </Suspense>
        </div>

        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Globe />
        </div>
      </div>
    </Card>
  )
}

export default StatisticsCard
