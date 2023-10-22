'use client'
import { Button } from '@/components/ui/button'
import { getCalApi } from '@calcom/embed-react'
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
      data-cal-link="craigary/30min"
      data-cal-config='{"layout":"month_view"}'
      size="sm"
      variant="surface"
    >
      Book a meeting
    </Button>
  )
}

export default BookAMeettingBtn
