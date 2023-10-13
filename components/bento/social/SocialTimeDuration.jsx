'use client'
import { differenceInCalendarDays, intervalToDuration } from 'date-fns'
import { memo, useCallback, useMemo } from 'react'

const SocialTimeDuration = ({ date }) => {
  const diff = useMemo(() => {
    const now = new Date()
    const then = new Date(date)

    const daysDiff = differenceInCalendarDays(now, then)
    const { days, hours, minutes, seconds } = intervalToDuration({
      start: then,
      end: now
    })

    return {
      weeks: Math.floor(daysDiff / 7),
      days,
      hours,
      minutes,
      seconds
    }
  }, [date])

  const formatDiff = useCallback(() => {
    const ref = {
      weeks: 'w',
      days: 'd',
      hours: 'h',
      minutes: 'm',
      seconds: 's'
    }

    for (let unit in diff) {
      if (diff[unit] !== 0) {
        return `${diff[unit]}${ref[unit]}`
      }
    }
  }, [diff])

  return <p className="text-sm text-primary/50">{formatDiff()}</p>
}

export default memo(SocialTimeDuration)
