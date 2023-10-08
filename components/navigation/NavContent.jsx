'use client'
import Logo from '@/components/Logo'
import CmdkButton from '@/components/cmdk/CmdkButton'
import NavSection from '@/components/navigation/NavSection'
import { navigation } from '@/lib/get-navigation'
import { motion } from 'framer-motion'
const NavContent = ({ showCmdBtn, delay = 1 }) => {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3, delay }}
      viewport={{ once: true, margin: '36px' }}
      className="relative h-full"
    >
      <div className="flex items-center py-6">
        <Logo size={36} className="mr-2" />
        <p className="text-lg font-bold">CRAiG.wf</p>
      </div>
      {/* <div className="flex items-center border-t px-2 py-6">
        <Image
          height={42}
          alt="Craig Hart"
          width={42}
          src={avatar.src}
          className="mr-2 rounded-full"
        />
        <div>
          <p className="font-semibold">Craig Hart</p>
          <p className="text-sm font-light">@craigary</p>
        </div>
      </div> */}
      <div className="space-y-4">
        {navigation.map(navSection => (
          <NavSection
            key={navSection.id}
            name={navSection.name}
            showTitle={navSection.showTitle}
            navItems={navSection.items}
          ></NavSection>
        ))}
      </div>
      {showCmdBtn && (
        <div className="absolute bottom-0 left-0 flex w-full justify-end py-4">
          <CmdkButton />
        </div>
      )}
    </motion.aside>
  )
}

export default NavContent
