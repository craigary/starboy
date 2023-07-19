import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSiteStore = create(
  persist(
    (set, get) => ({
      theme: 'auto',
      setTheme: theme => {
        if (theme) {
          set({ theme })
        } else {
          const arr = ['auto', 'light', 'dark', 'deep']
          const index = arr.indexOf(get().theme)
          const next = arr[(index + 1) % arr.length]
          set({ theme: next })
        }
      }
    }),
    {
      name: 'site' // unique name
      // storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
)
