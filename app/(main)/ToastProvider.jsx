'use client'
import { useTheme } from 'next-themes'
import { Toaster } from 'sonner'

const ToastProvider = () => {
  const { resolvedTheme } = useTheme()
  return <Toaster invert={resolvedTheme === 'dark'} />
}

export default ToastProvider
