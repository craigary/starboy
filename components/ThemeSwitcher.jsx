'use client'
import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react'
import { useIsClient } from '@uidotdev/usehooks'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const isClient = useIsClient()

  const { theme, setTheme } = useTheme()
  const availableThemes = ['light', 'dark', 'system']
  const updateTheme = theme => {
    const currentTheme = availableThemes.indexOf(theme)
    if (theme !== currentTheme) {
      setTheme(theme)
    }
  }
  return (
    isClient && (
      <div className="relative flex items-center rounded-full border border-border/50">
        <div
          className="absolute -z-10 h-7 w-7 rounded-full bg-background shadow transition-all dark:shadow-muted"
          style={{
            left:
              theme === 'dark' ? '1px' : theme === 'light' ? '33px' : '65px',
            top: '1px'
          }}
        ></div>
        <div className="mr-0.5 inline-block rounded-full p-1">
          <IconMoon size="22" stroke="1" onClick={() => updateTheme('dark')} />
        </div>
        <div className="mr-0.5 inline-block rounded-full p-1">
          <IconSun size="22" stroke="1" onClick={() => updateTheme('light')} />
        </div>
        <div className="inline-block rounded-full p-1">
          <IconDeviceLaptop
            size="22"
            stroke="1"
            onClick={() => updateTheme('system')}
          />
        </div>
      </div>
    )
  )
}

export default ThemeSwitcher