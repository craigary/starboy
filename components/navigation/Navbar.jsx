'use client'
import Logo from '@/components/Logo'
import NavContent from '@/components/navigation/NavContent'
import { Button } from '@/components/ui/button'
import { IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'
import { Drawer } from 'vaul'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="-mx-4 h-24 max-w-3xl overflow-hidden px-5 pt-8 transition-all duration-300 md:h-0 md:pt-0">
        <div className="flex h-full w-full items-center justify-between opacity-100 transition-all duration-300 md:opacity-0">
          <div className="flex items-center">
            <Logo size={36} />
          </div>

          <Button
            aria-label={'menu icon'}
            size="icon"
            variant="soft"
            onClick={() => {
              setOpen(open => !open)
            }}
          >
            <IconMenu2 size={18} stroke="1.5" />
          </Button>
        </div>
      </div>
      <Drawer.Root open={open} shouldScaleBackground onOpenChange={setOpen}>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col bg-zinc-100">
            <NavContent showCmdBtn={false} setOpen={setOpen} />
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </>
  )
}

export default Navbar
