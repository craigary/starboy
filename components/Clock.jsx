'use client'
import { useEffect, useState } from 'react'
import ReactClock from 'react-clock'
import 'react-clock/dist/Clock.css'

import { useIsClient } from '@uidotdev/usehooks'

const Clock = () => {
  const [value, setValue] = useState(new Date())
  const isClient = useIsClient()
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    isClient && (
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
        <p className="ml-1">
          {value.getHours() > 9 ? value.getHours() : `0${value.getHours()}`}:
          {value.getMinutes() > 9
            ? value.getMinutes()
            : `0${value.getMinutes()}`}
        </p>
      </div>
    )
  )
}

export default Clock
