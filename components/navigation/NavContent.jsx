'use client'
import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import CmdkButton from '@/components/cmdk/CmdkButton'
import NavSection from '@/components/navigation/NavSection'
import { navigation } from '@/lib/get-navigation'
import { ScrollArea } from '@radix-ui/themes'
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
            <div className="sticky top-0 flex h-[5.25rem] shrink-0 items-center p-1 px-5 backdrop-blur-sm">
              <Logo size={36} className="" />
            </div>
            <div className="space-y-4 px-4">
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
        <div className="absolute bottom-0 flex w-full justify-between px-4 py-4 backdrop-blur-sm">
          <ThemeSwitcher />
          {showCmdBtn && <CmdkButton />}
        </div>
      </div>
    </motion.aside>
  )
}

export default NavContent
