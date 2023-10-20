'use client'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut
} from '@/components/ui/command'

import { navigation } from '@/lib/get-navigation'
import {
  IconArrowUpRight,
  IconDeviceLaptop,
  IconMoon,
  IconSun
} from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { toast } from 'sonner'

const CmdkDialog = ({ open, setOpen }) => {
  const router = useRouter()

  const { setTheme, systemTheme } = useTheme()
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
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {navigation.map((navGroup, index) => (
          <Fragment key={navGroup.id}>
            <CommandGroup heading={navGroup.name}>
              {navGroup.items.map((navItem, i) => {
                const Icon = navItem.icon
                return (
                  <CommandItem
                    key={i}
                    onSelect={() => {
                      if (navItem.external) {
                        window.open(
                          window.location.host + navItem.link,
                          '_blank'
                        )
                      } else {
                        router.push(navItem.link)
                      }
                    }}
                  >
                    <Icon size="16" className="mr-2" stroke="1" />
                    <span> {navItem.name}</span>
                    <CommandShortcut>
                      {navItem.external ? (
                        <IconArrowUpRight size="14" stroke="1" />
                      ) : (
                        navItem.link
                      )}
                    </CommandShortcut>
                  </CommandItem>
                )
              })}
            </CommandGroup>
            {/* {navigation.length - 1 !== index && <CommandSeparator />} */}
          </Fragment>
        ))}

        <CommandGroup heading="Appearance">
          <CommandItem onSelect={() => updateTheme('light')}>
            <IconSun size="16" className="mr-2" stroke="1" />
            <span>Light</span>
            <CommandShortcut>
              <IconArrowUpRight size="14" stroke="1" />
            </CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => updateTheme('dark')}>
            <IconMoon size="16" className="mr-2" stroke="1" />
            <span>Dark</span>
            <CommandShortcut>
              <IconArrowUpRight size="14" stroke="1" />
            </CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => updateTheme('system')}>
            <IconDeviceLaptop size="16" className="mr-2" stroke="1" />
            <span>Follow System</span>
            <CommandShortcut>
              <IconArrowUpRight size="14" stroke="1" />
            </CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export default CmdkDialog
