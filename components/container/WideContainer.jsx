'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const WiderContainer = ({ children, className }) => {
  return (
    <motion.main
      initial={{ opacity: 0.1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.1, y: 20 }}
      className={cn('mx-auto max-w-screen-lg grow', className)}
    >
      {children}
    </motion.main>
  )
}

export default WiderContainer
