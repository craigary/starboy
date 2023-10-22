'use client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const EmailBtn = ({ initial, domain }) => {
  const copyEmailAddress = () => {
    try {
      navigator.clipboard.writeText(initial + '@' + atob(domain))
      toast.success('Copied to clipboard')
    } catch (error) {
      toast.error(
        'Please copy the email manually: ' + initial + '@' + atob(domain)
      )
    }
  }

  const composeMail = () => {
    window.open('mailto:' + initial + '@' + atob(domain), '_blank')
  }

  return (
    <>
      <Button
        className="rounded-r-none"
        onClick={() => composeMail()}
        size="sm"
        variant="surface"
      >
        Compose
      </Button>
      <Button
        onClick={() => copyEmailAddress()}
        size="sm"
        className="-ml-px rounded-l-none"
        variant="surface"
      >
        Copy
      </Button>
    </>
  )
}

export default EmailBtn
