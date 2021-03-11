import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'

const NavBar = () => {
  const links = [
    { id: 1, name: 'Blog', to: BLOG.path || '/' }
    // { id: 2, name: 'Project', to: '/project' },
    // { id: 3, name: 'Lab', to: '/lab' }
  ]
  return (
    <div>
      <ul className="flex flex-row font-title">
        {links.map(link => (
          <li key={link.id} className="block ml-4 uppercase">
            <Link href={link.to}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
        <li className="block ml-4 uppercase">
          <a href="https://twitter.com/craigaryhart">TWITTER</a>
        </li>
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle }) => {
  const navRef = useRef(null)
  const sentinalRef = useRef(null)
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add('sticky-nav-full')
      } else {
        navRef.current.classList.remove('sticky-nav-full')
      }
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className="sticky-nav m-auto max-w-3xl h-6 flex flex-row justify-between items-center mb-1  md:mb-8 px-4 py-8 bg-opacity-60"
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex">
          <Link href="/">
            <div className="h-6">
              <Image src="/logo.svg" width={24} height={24} alt="Craigary" />
            </div>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 italic header-name" style={{ fontWeight: 'bold' }}>
            {navBarTitle}
          </p>
              )
            : (
            <p className="ml-2 italic header-name" style={{ fontWeight: 'bold' }}>
            {'Craig Hart'},{' '}
            <span style={{ fontWeight: '300' }}>
              Just another personal website.
            </span>
          </p>
              )
        }

        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
