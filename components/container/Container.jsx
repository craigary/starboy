'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
const Container = ({ children, className }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn('mx-auto max-w-screen-md grow', className)}
    >
      {children}
    </motion.main>
  )
}

export default Container
