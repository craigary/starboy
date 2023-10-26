import { SiApplepodcasts } from '@icons-pack/react-simple-icons'
import {
  IconBook,
  IconBrandGithub,
  IconBrandMastodon,
  IconBrandThreads,
  IconBrandWeibo,
  IconBrandX,
  IconFlask,
  IconIcons,
  IconMessage,
  IconPencil,
  IconRobot,
  IconTools,
  IconTriangle
} from '@tabler/icons-react'

const navigation = [
  {
    id: 'general',
    name: 'General',
    showTitle: false,
    items: [
      {
        name: 'Home',
        description:
          '▲ Country Music Lover · Juventino · Front End Dev · Notion Ambassador, I love to craft delightful projects with elegance, bringing joy to everyone and myself.',
        link: '/',
        icon: IconTriangle,
        frequency: 'daily'
      },
      {
        name: 'About',
        description:
          '▲ Country Music Lover · Juventino · Front End Dev · Notion Ambassador, I love to craft delightful projects with elegance, bringing joy to everyone and myself.',
        link: '/about',
        icon: IconRobot,
        frequency: 'monthly'
      },
      {
        name: 'Project',
        description: 'See my latest work',
        link: '/work',
        icon: IconIcons,
        frequency: 'weekly'
      },
      {
        name: 'Blog',
        description: 'Read my latest posts',
        link: '/blog',
        icon: IconPencil,
        frequency: 'weekly'
      }
    ]
  },
  {
    id: 'tools',
    name: 'More',
    showTitle: true,
    items: [
      {
        name: 'Uses',
        description: 'The tools and services I use',
        link: '/uses',
        icon: IconTools,
        external: false,
        frequency: 'monthly'
      },
      {
        name: 'Books',
        description: 'Books I read',
        link: '/books',
        icon: IconBook,
        external: false,
        frequency: 'monthly'
      },
      {
        name: 'Podcasts',
        description: 'Podcasts I listen to',
        link: '/podcasts',
        icon: SiApplepodcasts,
        external: false,
        frequency: 'monthly'
      },
      {
        name: 'Lab',
        link: '/lab',
        icon: IconFlask,
        external: true,
        frequency: 'weekly'
      },
      {
        name: 'Guestbook',
        description: 'Leave a message here',
        link: '/guestbook',
        icon: IconMessage,
        frequency: 'monthly'
      }
    ]
  },
  {
    id: 'social',
    name: 'Social',
    showTitle: true,
    items: [
      {
        id: 'threads',
        name: 'Threads',
        link: '/threads',
        icon: IconBrandThreads,
        external: true
      },
      {
        id: 'weibo',
        name: 'Weibo',
        link: '/weibo',
        icon: IconBrandWeibo,
        external: true
      },
      {
        id: 'gh',
        name: 'GitHub',
        link: '/github',
        icon: IconBrandGithub,
        external: true
      },
      {
        id: 'mastodon',
        name: 'Mastodon',
        link: '/mastodon',
        icon: IconBrandMastodon,
        external: true
      },
      {
        id: 'x',
        name: 'X (Twitter)',
        link: '/x',
        icon: IconBrandX,
        external: true
      }
    ]
  }
]

export { navigation }
