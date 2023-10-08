'use client'
import { IconMoon, IconPhone, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const availableThemes = ['light', 'dark', 'system']
  const updateTheme = () => {
    const currentTheme = availableThemes.indexOf(theme)
    setTheme(availableThemes[(currentTheme + 1) % availableThemes.length])
  }
  return (
    <div className="relative flex items-center rounded-full border border-border/50">
      <div className="mr-0.5 inline-block rounded-full p-1 hover:bg-red-400">
        <IconMoon size="22" stroke="1" />
      </div>
      <div className="mr-0.5 inline-block rounded-full p-1 hover:bg-red-400">
        <IconSun size="22" stroke="1" />
      </div>
      <div className="inline-block rounded-full p-1 hover:bg-red-400">
        <IconPhone size="22" stroke="1" />
      </div>
    </div>
  )
}

export default ThemeSwitcher
