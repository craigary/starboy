'use client'
import { useTheme } from '@/hooks/useTheme'
import {
  IconDeviceIpad,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconMoonFilled,
  IconRipple,
  IconSunFilled
} from '@tabler/icons-react'
import { useMediaQuery } from '@uidotdev/usehooks'
import { AnimatePresence, motion } from 'framer-motion'
import { forwardRef, useEffect } from 'react'

const LightIcon = (props, ref) => <IconSunFilled ref={ref} {...props} />
const DarkIcon = (props, ref) => <IconMoonFilled ref={ref} {...props} />
const DeepIcon = (props, ref) => <IconRipple ref={ref} {...props} />
const AutoIcon = (props, ref) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 769px) and (max-width : 992px)'
  )
  return isSmallDevice ? (
    <IconDeviceMobile className="" ref={ref} {...props} />
  ) : isMediumDevice ? (
    <IconDeviceIpad className="" ref={ref} {...props} />
  ) : (
    <IconDeviceLaptop className="" ref={ref} {...props} />
  )
}

const LightIconComponent = motion(forwardRef(LightIcon))
const DarkIconComponent = motion(forwardRef(DarkIcon))
const DeepIconComponent = motion(forwardRef(DeepIcon))
const AutoIconComponent = motion(forwardRef(AutoIcon))

const ThemeToggle = () => {
  const { theme, setTheme, state } = useTheme()

  useEffect(() => {
    document.documentElement.dataset.theme = state
  }, [state])

  const toggleBtnBackground = {}

  return (
    <div className="h-6 w-6">
      {/* p-1 bg-cyan-500 shadow-inner shadow-slate-500 */}
      <button className=" dark:text-white flex rounded-full" onClick={() => setTheme()}>
        <AnimatePresence initial={false} mode="wait">
          {theme === 'light' && (
            <LightIconComponent
              key="light"
              style={{ originX: '50%', originY: '100%' }}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-amber-400"
            />
          )}
          {theme === 'dark' && (
            <DarkIconComponent
              key="dark"
              style={{ originX: '50%', originY: '100%' }}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            />
          )}
          {theme === 'deep' && (
            <DeepIconComponent
              key="deep"
              style={{ originX: '50%', originY: '100%' }}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {theme === 'auto' && (
            <AutoIconComponent
              key="auto"
              // style={{ originX: '50%', originY: '100%' }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}

export default ThemeToggle
