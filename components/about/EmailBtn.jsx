'use client'
import { Button } from '@radix-ui/themes'
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
        variant="surface"
        className="!rounded-r-none"
        onClick={() => composeMail()}
      >
        Compose
      </Button>
      <Button
        variant="surface"
        className="!-ml-px !rounded-l-none"
        onClick={() => copyEmailAddress()}
      >
        Copy
      </Button>
    </>
  )
}

export default EmailBtn
