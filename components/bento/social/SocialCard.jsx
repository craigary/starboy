import Card from '@/components/bento/card/Card'
import getLatestSocialPost from '@/lib/social/get-latest-social-post'

const SocialCard = async () => {
  const data = await getLatestSocialPost()

  const post = data.items[0]

  return (
    <Card className="h-full p-3">
      <div className="flex h-full w-full items-center rounded-lg border p-4 text-3xl text-primary/30">
        {post.title}
      </div>
    </Card>
  )
}

export default SocialCard
