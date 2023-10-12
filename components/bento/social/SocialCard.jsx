import Card from '@/components/bento/card/Card'
import { getThreadsPosts } from '@/lib/social/get-latest-social-post'

const SocialCard = async () => {
  const { rss } = await getThreadsPosts()
  console.log(JSON.stringify(rss, null, 2))

  return (
    <Card className="relative h-full min-h-[16rem] rounded-none p-3 pb-5 shadow-[inset_0_4px_6px_0_hsl(var(--muted)/0.5)]">
      <div className="relative h-full w-full rounded-lg border bg-background px-2 shadow-md shadow-primary/10">
        <div className="flex w-full items-center justify-between border-b px-1 py-3">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-8 rounded-full bg-amber-500"></div>
            <div className="leading-4">
              <p className="text-sm font-semibold">Craig Hart</p>
              <p className="text-xs text-primary/30">craigaryhart</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SocialCard
