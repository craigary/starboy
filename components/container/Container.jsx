'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
const Container = ({ className, children }) => {
  return (
    <motion.main
      initial={{ opacity: 0.1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.1, y: 20 }}
      className={cn('mx-auto w-full max-w-screen-md grow', className)}
    >
      {children}
    </motion.main>
  )
}

export default Container
