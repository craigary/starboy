import { cn } from '@/lib/utils'
const Line = ({ className, fill }) => {
  return (
    <div
      className={cn('h-full w-full', className)}
      style={{
        backgroundColor: fill
      }}
    ></div>
  )
}

export default Line
