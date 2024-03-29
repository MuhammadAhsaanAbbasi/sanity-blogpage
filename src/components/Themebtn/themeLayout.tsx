"use client"
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '../ThemeContent/themeContent'

const ThemeLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const [themeMode, setthemeMode] = useState("light")
    const lightMode = () => {
      setthemeMode("light")
    }
    const darkMode = () => {
      setthemeMode("dark")
    }
    useEffect(() => {
      document.querySelector("html")?.classList.remove("light", "dark")
      document.querySelector("html")?.classList.add(themeMode)
    }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }} >
    {children}
    </ThemeProvider>
  )
}

export default ThemeLayout