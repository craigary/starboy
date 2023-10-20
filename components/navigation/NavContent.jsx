'use client'
import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import CmdkButton from '@/components/cmdk/CmdkButton'
import NavSection from '@/components/navigation/NavSection'
import { navigation } from '@/lib/get-navigation'
import { motion } from 'framer-motion'
const NavContent = ({ showCmdBtn, delay = 0, setOpen }) => {
  return (
    <motion.aside
      initial={{ opacity: 0.05 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3, delay }}
      viewport={{ once: true, margin: '36px' }}
      className="relative flex h-full flex-col"
    >
      {/* <div className="flex shrink-0 items-center py-6 md:px-4">
        <Logo size={36} className="mr-3" />
        <p className="text-lg font-bold">CRAiG.wf</p>
      </div> */}
      <div className="relative h-full overflow-y-auto">
        <div className="sticky top-0 flex h-[5.25rem] shrink-0 items-center backdrop-blur-sm md:px-4">
          <Logo size={36} className="mr-3" />
          <p className="w-fit bg-gradient-to-l from-primary/60 to-primary bg-clip-text text-xl font-bold text-transparent">
            CRAIG.<span className="text-sm">wf</span>
          </p>
        </div>
        <div className="space-y-4 md:px-4">
          {navigation.map(navSection => (
            <NavSection
              key={navSection.id}
              name={navSection.name}
              showTitle={navSection.showTitle}
              navItems={navSection.items}
              setOpen={setOpen}
            ></NavSection>
          ))}
        </div>
        <div className="sticky bottom-0 flex w-full justify-between p-4 backdrop-blur-sm">
          <ThemeSwitcher />
          {showCmdBtn && <CmdkButton />}
        </div>
      </div>
    </motion.aside>
  )
}

export default NavContent
