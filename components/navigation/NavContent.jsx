'use client'
import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import CmdkButton from '@/components/cmdk/CmdkButton'
import NavSection from '@/components/navigation/NavSection'
import { ScrollArea } from '@/components/ui/scroll-area'
import { navigation } from '@/lib/get-navigation'
import { motion } from 'framer-motion'
const NavContent = ({ showCmdBtn, delay = 0, setOpen }) => {
  return (
    <motion.aside
      initial={{ opacity: 0.05 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3, delay }}
      viewport={{ once: true, margin: '36px' }}
      className="relative flex h-full flex-col overflow-hidden"
    >
      <div className="h-full">
        <ScrollArea
          size="1"
          type="hover"
          scrollbars="vertical"
          scrollHideDelay={300}
          className="h-full"
        >
          <div className="flex flex-col">
            <div className="sticky top-0 flex h-[5.25rem] shrink-0 items-center p-1 backdrop-blur-sm md:px-5">
              <Logo size={36} className="" />
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
            <div className="h-[66px]"></div>
          </div>
        </ScrollArea>
        <div className="absolute bottom-0 flex w-[calc(100%-8px)] justify-between px-0 py-4 backdrop-blur-sm md:px-4">
          <ThemeSwitcher />
          {showCmdBtn && <CmdkButton />}
        </div>
      </div>
    </motion.aside>
  )
}

export default NavContent
