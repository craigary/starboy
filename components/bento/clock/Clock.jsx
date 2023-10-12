'use client'
import { useEffect, useState } from 'react'
import ReactClock from 'react-clock'
// import 'react-clock/dist/Clock.css'

import Card from '@/components/bento/card/Card'
import { useIsClient } from '@uidotdev/usehooks'

const ClockCard = ({ delay }) => {
  const [value, setValue] = useState(new Date())
  const isClient = useIsClient()
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Card className="relative h-full p-3" delay={delay}>
      <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-secondary/20 py-1 transition-all hover:shadow-md hover:shadow-muted/50">
        {isClient && (
          <div className="flex items-center">
            <ReactClock
              renderHourMarks={false}
              renderMinuteMarks={false}
              hourHandWidth={1}
              minuteHandWidth={1}
              secondHandWidth={1}
              size={24}
              value={value}
            />
            <p className="ml-2 text-lg font-medium">
              {value.getHours() > 9 ? value.getHours() : `0${value.getHours()}`}
              :
              {value.getMinutes() > 9
                ? value.getMinutes()
                : `0${value.getMinutes()}`}
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}

export default ClockCard
