'use client'

import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

const GitHubCard = () => {
  const { resolvedTheme } = useTheme()

  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const shownMonths = 6

    return contributions.filter(activity => {
      const date = new Date(activity.date)
      const monthOfDay = date.getMonth()

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      )
    })
  }

  return (
    <div
      className="flex grow items-center justify-center border-b
    px-4 py-6 shadow-[inset_0_4px_6px_0_hsl(var(--muted)/0.5)]"
    >
      <GitHubCalendar
        hideTotalCount
        hideColorLegend
        transformData={selectLastHalfYear}
        username="craigary"
      />
    </div>
  )
}

export default GitHubCard
