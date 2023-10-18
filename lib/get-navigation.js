import { SiNotion, SiPocketcasts } from '@icons-pack/react-simple-icons'
import {
  IconBook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandMastodon,
  IconBrandThreads,
  IconBrandWeibo,
  IconBrandX,
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
        link: '/',
        icon: IconTriangle
      },
      {
        name: 'About',
        link: '/about',
        icon: IconRobot
      },
      {
        name: 'Project',
        link: '/work',
        icon: IconIcons
      },
      {
        name: 'Blog',
        link: '/blog',
        icon: IconPencil
      },
      {
        name: 'Guestbook',
        link: '/guestbook',
        icon: IconMessage
      }
      // {
      //   name: 'Store',
      //   link: '/store',
      //   disabled: true,
      //   icon: IconBuildingStore
      // }
    ]
  },
  {
    id: 'tools',
    name: 'More',
    showTitle: true,
    items: [
      // {
      //   name: 'Stack',
      //   link: '/stack',
      //   icon: IconStack2,
      //   external: false
      // },
      {
        name: 'Uses',
        link: '/uses',
        icon: IconTools,
        external: false
      },
      {
        name: 'Books',
        link: '/books',
        icon: IconBook,
        external: false
      },
      {
        name: 'Notion Templates',
        link: '/notion-templates',
        icon: SiNotion,
        disabled: true,
        external: false
      },
      {
        name: 'Podcasts',
        link: '/podcasts',
        icon: SiPocketcasts,
        external: false
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
        id: 'ig',
        name: 'Instagram',
        link: '/ig',
        icon: IconBrandInstagram,
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
