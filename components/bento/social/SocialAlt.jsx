import Card from '@/components/bento/card/Card'
import { getLatestSocialPosts } from '@/lib/notion-next/get-latest-social-post'

const SocialAltCard = async ({ delay = 0 }) => {
  const post = await getLatestSocialPosts()

  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full w-full  rounded-md border bg-background p-2 shadow-none transition-shadow hover:shadow-xl hover:shadow-muted/60 dark:bg-muted/20">
        <div className="mx-3 flex h-full items-center justify-center">
          <div className="flex items-end justify-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-full bg-cyan-200"></div>
            <div className="rounded-xl rounded-bl-none border bg-background px-3 py-2 text-sm xl:text-base">
              {post.title}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SocialAltCard
