import { IconExternalLink } from '@tabler/icons-react'
import Link from 'next/link'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const navbar = () => {
  const navRoutes = [
    { id: 0, name: 'About', target: '/about', external: false },
    { id: 1, name: 'Blog', target: '/blog', external: true }
  ]

  return (
    <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-8 ">
      <div className="flex items-center">
        <Logo />
        <ul className="flex space-x-3 ml-3">
          {navRoutes.map(navItem => (
            <Link key={navItem.id} href={navItem.target}>
              <li className={`font-bold group text-sm inline-block  tracking-widest`}>
                {navItem.name.toUpperCase()}
                {navItem.external && (
                  <IconExternalLink
                    size={16}
                    className="text-gray-400 inline-block group-hover:text-gray-800 dark:group-hover:text-white transition-all ml-0.5 pb-0.5 align-middle"
                  />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <ThemeToggle />
    </nav>
  )
}

export default navbar
