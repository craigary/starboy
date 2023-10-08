import { cn } from '@/lib/utils'

const Logo = ({ className, size = 18 }) => {
  const iconSize = size
  return (
    <div
      className={cn(
        'rounded flex items-center justify-center text-gray-12',
        className
      )}
      style={{ height: size + 'px', width: size + 'px' }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 1000 1000"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M764.138 667.5C775.685 667.5 782.902 655 777.128 645L512.99 187.5C507.217 177.5 492.783 177.5 487.01 187.5L359.27 408.751C356.591 413.392 356.591 419.11 359.27 423.751L495.669 660C498.348 664.641 503.3 667.5 508.659 667.5H764.138Z" />
        <path d="M409.153 667.5C420.7 667.5 427.917 655 422.144 645L335.498 494.926C329.725 484.926 315.291 484.926 309.517 494.926L222.872 645C217.098 655 224.315 667.5 235.862 667.5H409.153Z" />
      </svg>
    </div>
  )
}

export default Logo
