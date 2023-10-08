'use client'
import { cn } from '@/lib/utils'
const Line = ({ className, fill }) => {
  return (
    <div className={cn('h-full w-full', className)}>
      <style jsx>{`
        div {
          background-color: ${fill};
        }
      `}</style>
    </div>
  )
}

export default Line
