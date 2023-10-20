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
      <div className="-mx-3 h-24 max-w-3xl overflow-hidden px-3 pt-8 transition-all duration-300 md:h-0 md:pt-0">
        <div className="flex h-full w-full items-center justify-between opacity-100 transition-all duration-300 md:opacity-0">
          <div className="flex items-center">
            <Logo size={36} className="mr-3" />
            <p className="w-fit bg-gradient-to-l from-primary/60 to-primary bg-clip-text text-xl font-bold text-transparent">
              CRAIG.<span className="text-sm">wf</span>
            </p>
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
