import Card from '@/components/bento/card/Card'
import SocialIcon from '@/components/bento/social/SocialIcon'
import SocialTimeDuration from '@/components/bento/social/SocialTimeDuration'
import { getLatestSocialPosts } from '@/lib/notion-next/get-latest-social-post'
import {
  SiMastodon,
  SiMastodonHex,
  SiSinaweibo,
  SiSinaweiboHex,
  SiThreads,
  SiTwitter
} from '@icons-pack/react-simple-icons'

const SocialCard = async () => {
  const post = await getLatestSocialPosts()

  const socialMap = new Map()
  socialMap.set('Mastodon', {
    color: SiMastodonHex,
    name: 'Craig Hart',
    showName: true,
    icon: SiMastodon
  })
  socialMap.set('Weibo', {
    color: SiSinaweiboHex,
    name: null,
    showName: false,
    icon: '',
    icon: SiSinaweibo
  })
  socialMap.set('Jike', {
    color: '#ffe411',
    name: null,
    showName: false,
    icon: null
  })
  socialMap.set('X', {
    color: '#000000',
    name: 'Craig Hart',
    showName: true,
    icon: SiTwitter
  })
  socialMap.set('Threads', {
    color: '#000000',
    name: 'Craig Hart',
    showName: true,
    icon: SiThreads
  })

  // const socialRef = {
  //   Mastodon: {
  //     color: SiMastodonHex,
  //     name: 'Craig Hart',
  //     showName: true,
  //     icon: SiMastodon
  //   },
  //   Weibo: {
  //     color: SiSinaweiboHex,
  //     name: null,
  //     showName: false,
  //     icon: '',
  //     icon: SiSinaweibo
  //   },
  //   Jike: { color: '#ffe411', name: null, showName: false, icon: null },
  //   X: {
  //     color: '#000000',
  //     name: 'Craig Hart',
  //     showName: true,
  //     icon: SiTwitter
  //   },
  //   Threads: {
  //     color: '#000000',
  //     name: 'Craig Hart',
  //     showName: true,
  //     icon: SiThreads
  //   }
  // }

  const Icon = socialMap.get(post.source).icon
  const IconColor = socialMap.get(post.source).color

  return (
    <Card className="group relative h-full min-h-[16rem] rounded-none p-3 pb-10 shadow-[inset_0_4px_6px_0_hsl(var(--muted)/0.5)] transition-all">
      <div
        className="relative flex h-full w-full flex-col rounded border bg-background shadow-md shadow-muted/50"
        style={{
          backgroundImage: `radial-gradient(circle at right bottom, ${
            IconColor + '22'
          } 0%, hsl(var(--background)) 40%, hsl(var(--background)) 100%)`
        }}
      >
        <div
          className="relative z-10 box-content flex h-12 items-center justify-between rounded-t-lg border-b px-3
         "
        >
          <div className="flex items-center">
            <div className="mr-2 h-8 w-8 rounded-full bg-amber-500"></div>
            <div className="leading-4">
              {socialMap.get(post.source)?.showName ? (
                <>
                  <p className="text-sm font-semibold leading-4">
                    {socialMap.get(post.source).name}
                  </p>
                  <p className="text-xs leading-3 text-primary/30">
                    {post.handle}
                  </p>
                </>
              ) : (
                <p className="text-base font-semibold lowercase">
                  {post.handle}
                </p>
              )}
            </div>
          </div>
          <SocialTimeDuration date={post.date} />
        </div>

        <div className="relative flex grow flex-col items-start justify-center px-3">
          <div className="py-4 text-primary/80">
            {/* <p>{post.title}</p> */}
            <p>{post.title}</p>
          </div>
          <SocialIcon color={IconColor} source={post.source}>
            <Icon size="18" />
          </SocialIcon>
        </div>
      </div>
      <div className="absolute -bottom-4 left-0 h-4 w-full px-4 transition-all ">
        <div className="h-full w-full rounded-b border-x border-b shadow-muted/70"></div>
      </div>
      <div className="absolute -bottom-7 left-0 h-3 w-full px-8 transition-all">
        <div className="h-full w-full rounded-b border-x border-b shadow-muted/70"></div>
      </div>
    </Card>
  )
}

export default SocialCard
