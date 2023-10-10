'use client'
import { cn, isActivePath } from '@/lib/utils'
import { Badge } from '@radix-ui/themes'
import { IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavSection = ({ name, showTitle, navItems, setOpen }) => {
  const pathname = usePathname()

  const handleNavItemClick = () => {
    setOpen(false)
  }
  return (
    <div>
      {showTitle && (
        <div className="mb-2 text-xs uppercase tracking-wider text-primary">
          {name}
        </div>
      )}
      <ul className="space-y-0.5">
        {navItems.map((navItem, index) => {
          const Icon = navItem.icon
          const isActive = isActivePath(pathname, navItem.link)
          return (
            <li key={index}>
              <Link
                data-disabled={navItem.disabled}
                className={cn(
                  '[data-disabled]:cursor-not-allowed flex cursor-default items-center justify-between rounded-md px-2 py-2 text-sm transition-all hover:bg-[--accent-a3] active:scale-[98%] disabled:opacity-50',
                  isActive && 'bg-[--accent-a3]'
                )}
                onClick={handleNavItemClick}
                href={navItem.link}
                target={navItem.external ? '_blank' : '_self'}
              >
                <div className="flex items-center justify-start">
                  <Icon size="18" className="mr-2" stroke="1.5" />
                  {navItem.name}
                  {navItem.disabled && <Badge className="ml-2">soon</Badge>}
                </div>
                <div className="shrink-0">
                  {navItem.external && <IconArrowUpRight size="16" />}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavSection
