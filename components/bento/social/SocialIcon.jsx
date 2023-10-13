'use client'

import { Tooltip } from '@radix-ui/themes'

const SocialIcon = ({ color, children, source }) => {
  return (
    <div className="icon absolute bottom-3 right-2 opacity-30 transition-all hover:opacity-100">
      <style jsx>
        {`
          .icon {
            color: hsl(var(--primary));
          }
          .icon:hover {
            color: ${color};
          }
        `}
      </style>
      <Tooltip content={source}>{children}</Tooltip>
    </div>
  )
}

export default SocialIcon
