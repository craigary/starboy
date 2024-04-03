'use client'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'

const SocialIcon = ({ color, children, source }) => {
  return (
    <div
      className="icon absolute bottom-3 right-2 opacity-100 transition-all hover:opacity-100"
      style={{ color: color }}
    >
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{source}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default SocialIcon
