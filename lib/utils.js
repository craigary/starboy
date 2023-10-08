import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function isActivePath(pathname, path) {
  if (path === '/' && pathname !== path) {
    return false
  }
  return pathname.startsWith(path)
}
