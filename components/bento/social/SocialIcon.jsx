'use client'

import { Tooltip } from '@radix-ui/themes'

const SocialIcon = ({ color, children, source }) => {
  return (
    <div
      className="icon absolute bottom-3 right-2 opacity-100 transition-all hover:opacity-100"
      style={{ color: color }}
    >
      <Tooltip content={source}>{children}</Tooltip>
    </div>
  )
}

export default SocialIcon
