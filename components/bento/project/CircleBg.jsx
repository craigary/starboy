import { cn } from '@/lib/utils'

const CircleBg = ({ className }) => {
  return (
    <div
      className={cn('absolute left-0 top-0 z-0 h-full w-full', className)}
      style={{
        WebkitMaskImage: 'radial-gradient(circle, transparent,  rgba(0,0,0,1))',
        maskImage: 'radial-gradient(circle, transparent,  rgba(0,0,0,1))'
      }}
    >
      <svg
        className="h-full w-full object-cover"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="500" cy="500" r="667.5" className="stroke-primary/50" />
        <circle cx="500" cy="500" r="567.5" className="stroke-primary/50" />
        <circle cx="500" cy="500" r="479.5" className="stroke-primary/50" />
        <circle cx="500" cy="500" r="399.5" className="stroke-primary/50" />
        <circle cx="500" cy="500" r="324.5" className="stroke-primary/50" />
        <circle cx="500" cy="500" r="267.5" className="stroke-primary/50" />
        <circle cx="500" cy="500" r="208.5" className="stroke-primary/50" />
        <circle cx="500" cy="500" r="138.5" className="stroke-primary/50" />
      </svg>
    </div>
  )
}

export default CircleBg
