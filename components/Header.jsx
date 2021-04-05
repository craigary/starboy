import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import SITE from '@/site.config'

const NavBar = () => {
  const links = [
    { id: 0, name: 'Index', to: SITE.path || '/', show: true },
    { id: 1, name: 'About', to: '/about', show: true },
    // { id: 2, name: 'RSS', to: '/feed', show: true },
    { id: 2, name: 'Project', to: '/project', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row font-sans">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, navBarDescription }) => {
  const navRef = useRef(null)
  const sentinalRef = useRef([])
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
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className="sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-6 md:mb-12 py-8 bg-opacity-60 max-w-3xl px-4"
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <div className="h-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  className="fill-current text-black dark:text-white"
                />
                <rect width="24" height="24" fill="url(#paint0_radial)" />
                <defs>
                  <radialGradient
                    id="paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(45) scale(39.598)"
                  >
                    <stop stopColor="#CFCFCF" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#E9E9E9" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </Link>
          <p className="ml-2 font-medium text-gray-500 dark:text-gray-400 header-name">
            {navBarTitle}
            {navBarDescription && (
              <span className="font-normal">, {navBarDescription}</span>
            )}
          </p>
        </div>
        <NavBar />
      </div>
    </>
  )
}

Header.propTypes = {
  navBarTitle: PropTypes.string,
  navBarDescription: PropTypes.string
}

export default Header
