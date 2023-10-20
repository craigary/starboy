import { cn } from '@/lib/utils'

const Logo = ({ className, size = 18 }) => {
  const iconSize = size * 0.8
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg shadow-[0_0_4px] shadow-[--accent-7]',
        className
      )}
      style={{
        height: size + 'px',
        width: size + 'px'
        // boxShadow: `0px 0px 3px blue, pink 0px 0px 0px inset`
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 1000 1000"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M800.32 688C811.289 688 818.145 676.126 812.661 666.626L512.341 146.379C506.857 136.878 493.143 136.878 487.659 146.379L341.612 399.377C339.067 403.786 339.067 409.217 341.612 413.626L495.885 680.874C498.43 685.284 503.135 688 508.226 688H800.32Z" />
        <path d="M402.655 688C413.624 688 420.48 676.126 414.996 666.626L313.509 490.818C308.024 481.317 294.311 481.317 288.826 490.818L187.339 666.626C181.855 676.126 188.711 688 199.68 688H402.655Z" />
      </svg>
    </div>
  )
}

export default Logo
