'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import styles from './styles.module.css'

const Card = ({ className, children, delay = 0, borderStyle }) => {
  return (
    // <div
    //   className={cn(
    //     'relative rounded-lg p-4 before:absolute before:inset-0 before:top-1/2 before:h-[calc(100%+16px)] before:w-full before:-translate-y-1/2 before:border-x before:border-dashed before:border-border/80 after:absolute after:inset-0 after:left-1/2 after:h-full after:w-[calc(100%+16px)] after:-translate-x-1/2 after:border-y after:border-dashed after:border-border/80',
    //     className
    //   )}
    // >
    <div className={cn('relative rounded-lg p-4', className)}>
      <div
        className={cn(
          styles.grid_line,
          'absolute -top-[0.5px] left-[-8px] h-px w-[calc(100%+16px)] bg-[length:5px_1px] [--dir:to_right]'
        )}
        style={borderStyle}
      ></div>
      <div
        className={cn(
          styles.grid_line,
          'absolute -bottom-[0.5px] left-[-8px] h-px w-[calc(100%+16px)]  bg-[length:5px_1px] [--dir:to_right]'
        )}
        style={borderStyle}
      ></div>
      <div
        className={cn(
          styles.grid_line,
          'absolute -left-[0.5px] top-[-8px] h-[calc(100%+16px)] w-px  bg-[length:1px_5px] [--dir:to_bottom]'
        )}
        style={borderStyle}
      ></div>
      <div
        className={cn(
          styles.grid_line,
          'absolute -right-[0.5px] top-[-8px] h-[calc(100%+16px)] w-px  bg-[length:1px_5px] [--dir:to_bottom]'
        )}
        style={borderStyle}
      ></div>
      <motion.div
        initial={{ opacity: 0.05, translateY: 5 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.25, delay: delay }}
        viewport={{ once: true }}
        className={cn('relative z-20 h-full w-full')}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Card
