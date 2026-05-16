'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { DrawerProvider } from '@/context/DrawerContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DrawerProvider>
        {children}
      </DrawerProvider>
    </ThemeProvider>
  )
}