'use client'
import { useMediaQuery } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { useSiteStore } from '../store'

export const useTheme = initial => {
  const [themeState, setThemeState] = useState()

  const theme = useSiteStore(state => state.theme)
  const setTheme = useSiteStore(state => state.setTheme)

  if (initial) {
    setTheme(initial)
  }

  const isDeviceInDarkMode = useMediaQuery('(prefers-color-scheme : dark)')

  useEffect(() => {
    if (theme === 'auto') {
      isDeviceInDarkMode ? setThemeState('dark') : setThemeState('light')
    } else {
      setThemeState(theme)
    }
  }, [isDeviceInDarkMode, theme])

  return {
    theme,
    setTheme,
    state: themeState
  }
}
