'use client'
import { getCalApi } from '@calcom/embed-react'
import { Button } from '@radix-ui/themes'
import { useEffect } from 'react'

const BookAMeettingBtn = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    })()
  }, [])
  return (
    <Button
      variant="surface"
      data-cal-link="craigary/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      Book a meeting
    </Button>
  )
}

export default BookAMeettingBtn
