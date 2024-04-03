'use client'

import CmdkDialog from '@/components/cmdk/CmdkDialog'
import { Button } from '@/components/ui/button'
import { Kbd, Theme, Tooltip } from '@radix-ui/themes'

import { IconCommand } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const CmdkButton = () => {
  const { resolvedTheme } = useTheme()

  const [isAppleDevice, setIsAppleDevice] = useState(false)

  useEffect(() => {
    // Check user's device is made by Apple
    const madeByApple = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent)
    setIsAppleDevice(madeByApple)
  }, [])

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = e => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Tooltip
        content={
          <span className="inline-flex items-center">
            Press
            <Theme
              asChild
              appearance={resolvedTheme === 'dark' ? 'light' : 'dark'}
            >
              <Kbd className="ml-2">{isAppleDevice ? '⌘' : '^'} + K</Kbd>
            </Theme>
          </span>
        }
      >
        <Button
          size="icon"
          variant="soft"
          aria-label={'Command icon'}
          onClick={() => setOpen(open => !open)}
        >
          <IconCommand size={18} stroke="1.5" />
        </Button>
      </Tooltip>
      <CmdkDialog open={open} setOpen={setOpen} />
    </>
  )
}

export default CmdkButton
