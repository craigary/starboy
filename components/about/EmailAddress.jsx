'use client'

import { useIsClient } from '@uidotdev/usehooks'

const EmailAddress = ({ initial, domain }) => {
  const isClient = useIsClient()

  return (
    isClient && (
      <p className="text-sm text-primary/60">{initial + '@' + atob(domain)}</p>
    )
  )
}

export default EmailAddress
