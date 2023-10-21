'use client'

import CmdkDialog from '@/components/cmdk/CmdkDialog'

import { IconButton, Tooltip } from '@radix-ui/themes'
import { IconChevronUp, IconCommand } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

const CmdkButton = () => {
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
          <p className="inline-flex items-center text-xs">
            Press
            <span className="ml-2 inline-flex items-center rounded bg-muted/10 p-1 font-mono text-xs tracking-tighter">
              {isAppleDevice ? (
                <IconCommand size={12} stroke="1.5" className="mr-1" />
              ) : (
                <IconChevronUp size={12} stroke="1.5" className="mr-1" />
              )}
              + K
            </span>
          </p>
        }
      >
        <IconButton
          variant="soft"
          size="2"
          aria-label={'command palate icon'}
          onClick={() => setOpen(open => !open)}
        >
          <IconCommand size={18} stroke="1.5" />
        </IconButton>
      </Tooltip>
      <CmdkDialog open={open} setOpen={setOpen} />
    </>
  )
}

export default CmdkButton
