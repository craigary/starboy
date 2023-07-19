import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandThreads,
  IconBrandTwitter,
  IconBrandWeibo
} from '@tabler/icons-react'
export const socialLinks = [
  {
    title: 'Thread',
    url: 'https://threads.net/@craigaryhart',
    path: '/threads',
    icon: IconBrandThreads
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/craigaryhart',
    path: '/twitter',
    icon: IconBrandTwitter
  },
  {
    title: 'GitHub',
    url: 'https://github.com/craigary',
    path: '/github',
    icon: IconBrandGithub
  },
  {
    title: 'Weibo',
    url: 'https://weibo.com/u/1837470933',
    path: '/weibo',
    icon: IconBrandWeibo
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/craigaryhart',
    path: ['/instagram', '/ig'],
    icon: IconBrandInstagram
  }
]

export default function getRedirects() {
  const links = socialLinks.reduce((prev, curr) => {
    let current = {}
    if (Array.isArray(curr.path)) {
      current = curr.path.map(p => ({
        source: p,
        destination: curr.url,
        permanent: true
      }))
      return [...prev, ...current]
    } else {
      current = {
        source: curr.path,
        destination: curr.url,
        permanent: true
      }
      return [...prev, current]
    }
  }, [])
  return links
}
