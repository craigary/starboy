import Card from '@/components/bento/card/Card'
import { getLatestSocialPosts } from '@/lib/notion-next/get-latest-social-post'

const SocialAltCard = async ({ delay = 0 }) => {
  const post = await getLatestSocialPosts()

  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full w-full">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-2">
            <div className="rounded-xl rounded-bl-none border bg-background p-2 text-sm">
              {post.title}
            </div>
            <div className="h-8 w-8 shrink-0 rounded-full bg-cyan-200"></div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SocialAltCard
