'use client'
import Logo from '@/components/Logo'
import CmdkButton from '@/components/cmdk/CmdkButton'
import NavSection from '@/components/navigation/NavSection'
import { navigation } from '@/lib/get-navigation'
import { motion } from 'framer-motion'
const NavContent = ({ showCmdBtn, delay = 1, setOpen }) => {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3, delay }}
      viewport={{ once: true, margin: '36px' }}
      className="relative flex h-full flex-col"
    >
      {/* <div className="flex shrink-0 items-center py-6 md:px-4">
        <Logo size={36} className="mr-2" />
        <p className="text-lg font-bold">CRAiG.wf</p>
      </div> */}
      <div className="relative h-full overflow-y-auto">
        <div className="sticky top-0 flex h-[5.25rem] shrink-0 items-center backdrop-blur-sm md:px-4">
          <Logo size={36} className="mr-2" />
          <p className="text-lg font-bold">CRAiG.wf</p>
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
      </div>
      {showCmdBtn && (
        <div className="absolute bottom-0 left-0 flex w-full justify-end p-4">
          <CmdkButton />
        </div>
      )}
    </motion.aside>
  )
}

export default NavContent
