import avatar from '@/assets/avatar.png'
import Card from '@/components/bento/card/Card'
import { getLatestSocialPosts } from '@/lib/notion-next/get-latest-social-post'
import Image from 'next/image'

const SocialAltCard = async ({ delay = 0 }) => {
  const post = await getLatestSocialPosts()

  return (
    <Card className="h-full p-3" delay={delay}>
      <div className="relative h-full w-full">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="relative rounded-xl rounded-bl-none border bg-background px-3 py-3 text-sm text-primary/70 before:absolute before:-bottom-3 before:left-0 before:z-10 before:h-3 before:w-3 before:bg-gradient-to-br before:content-[''] before:[--tw-gradient-stops:hsl(var(--background)),hsl(var(--background))_50%,transparent_50%,transparent] after:absolute after:-bottom-[14px] after:-left-px after:z-0 after:h-[14px] after:w-[14px] after:bg-gradient-to-br after:content-[''] after:[--tw-gradient-stops:hsl(var(--border)),hsl(var(--border))_50%,transparent_50%,transparent]">
              {post.title}
            </div>
            <div className="flex items-center text-xs">
              <Image
                height={32}
                alt="Craig Hart"
                width={32}
                src={avatar.src}
                priority
                className="shrink-0 rounded-full"
              />
              <p className="ml-2">{post.handle}</p>
              <a
                href={post.link}
                target="_blank"
                className="ml-2 text-primary/30"
              >
                {new Date(post.date).toLocaleDateString()}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SocialAltCard
