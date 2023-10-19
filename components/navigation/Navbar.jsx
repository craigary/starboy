'use client'
import Logo from '@/components/Logo'
import NavSheet from '@/components/navigation/NavSheet'
import { IconButton } from '@radix-ui/themes'
import { IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  // const { width } = useWindowSize()

  // const opacity = useMemo(() => new SpringValue(1), [])

  // useEffect(() => {
  //   if (width < 768) {
  //     opacity.set(1)
  //   } else {
  //     opacity.set(0)
  //   }
  // }, [width, opacity])

  return (
    <>
      <div className="mx-auto h-16 w-full max-w-3xl overflow-hidden pt-8 transition-all duration-300 md:h-0 md:pt-0">
        <div className="flex h-full w-full items-center justify-between opacity-100 transition-all duration-300 md:opacity-0">
          <div className="flex items-end">
            <Logo size={36} className="mr-2 rounded border" />
            <p className="text-lg font-extrabold">CRAiG.wf</p>
          </div>
          <IconButton variant="soft" onClick={() => setOpen(open => !open)}>
            <IconMenu2 />
          </IconButton>
        </div>
      </div>
      <NavSheet open={open} setOpen={setOpen} />
    </>
  )
}

export default Navbar
