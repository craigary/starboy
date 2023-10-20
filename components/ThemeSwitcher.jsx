'use client'
import { cn } from '@/lib/utils'
import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react'
import { useIsClient } from '@uidotdev/usehooks'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'

const ThemeSwitcher = () => {
  const isClient = useIsClient()

  const { theme: selectedTheme, setTheme, systemTheme } = useTheme()
  const availableThemes = ['light', 'dark', 'system']

  const updateTheme = theme => {
    const currentTheme = availableThemes.indexOf(theme)
    if (theme !== currentTheme) {
      setTheme(theme)
      const invert =
        theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
      toast.success(`Use ${theme} theme.`, { invert })
    }
  }
  return (
    isClient && (
      <div className="relative flex items-center rounded-full border border-border p-0.5">
        {/* <div
          className="absolute -z-10 h-7 w-7 rounded-full bg-background shadow transition-all dark:shadow-muted"
          style={{
            left:
              theme === 'dark' ? '1px' : theme === 'light' ? '33px' : '65px',
            top: '1px'
          }}
        ></div> */}
        <div
          className={cn(
            'mr-0.5 inline-block rounded-full p-1 shadow-none',
            selectedTheme === 'dark' && 'bg-[--gray-3] shadow-md shadow-muted '
          )}
        >
          <IconMoon size="20" stroke="1" onClick={() => updateTheme('dark')} />
        </div>
        <div
          className={cn(
            'mr-0.5 inline-block rounded-full p-1 shadow-none',
            selectedTheme === 'light' &&
              'bg-[--gray-3] shadow-md shadow-muted  '
          )}
        >
          <IconSun size="20" stroke="1" onClick={() => updateTheme('light')} />
        </div>
        <div
          className={cn(
            'inline-block rounded-full p-1 shadow-none',
            selectedTheme === 'system' &&
              'bg-[--gray-3] shadow-md shadow-muted '
          )}
        >
          <IconDeviceLaptop
            size="20"
            stroke="1"
            onClick={() => updateTheme('system')}
          />
        </div>
      </div>
    )
  )
}

export default ThemeSwitcher
