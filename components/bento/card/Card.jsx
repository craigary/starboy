'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

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
        className="grid-line absolute -top-[0.5px] left-[-8px] h-px w-[calc(100%+16px)] bg-border/20  [--dir:to_right] [--dot-size:5px_1px]"
        style={borderStyle}
      ></div>
      <div
        className="grid-line absolute -bottom-[0.5px] left-[-8px] h-px w-[calc(100%+16px)] bg-border/20  [--dir:to_right] [--dot-size:5px_1px]"
        style={borderStyle}
      ></div>
      <div
        className="grid-line absolute -left-[0.5px] top-[-8px] h-[calc(100%+16px)] w-px bg-border/20  [--dir:to_bottom] [--dot-size:1px_5px]"
        style={borderStyle}
      ></div>
      <div
        className="grid-line absolute -right-[0.5px] top-[-8px] h-[calc(100%+16px)] w-px bg-border/20  [--dir:to_bottom] [--dot-size:1px_5px]"
        style={borderStyle}
      ></div>
      {/* <div className="grid-line absolute left-[-8px] top-0 h-px w-[calc(100%+16px)] opacity-40 [--dir:to_right] [--dot-size:5px_1px]"></div>
      <div className="grid-line absolute bottom-0 left-[-8px] h-px w-[calc(100%+16px)] opacity-4x0 [--dir:to_right] [--dot-size:5px_1px]"></div>
      <div className="grid-line absolute left-0 top-[-8px] h-[calc(100%+16px)] w-px  opacity-40 [--dir:to_bottom] [--dot-size:1px_5px]"></div>
      <div className="grid-line absolute right-0 top-[-8px] h-[calc(100%+16px)] w-px  opacity-40 [--dir:to_bottom] [--dot-size:1px_5px]"></div> */}

      <style jsx>{`
        .grid-line {
          {/* background: linear-gradient(
            var(--dir),
            hsl(var(--border)),
            hsl(var(--border)) 50%,
            transparent 0,
            transparent
          ); */}

          background-size: var(--dot-size);
          -webkit-mask: linear-gradient(
            var(--dir),
           transparent,
            #333 5%,
            #333 95%,
           transparent
          );
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, translateY: 5 }}
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
