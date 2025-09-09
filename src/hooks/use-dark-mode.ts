'use client'

import { useState, useEffect, useCallback } from 'react'

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialDarkMode = savedMode !== null 
      ? JSON.parse(savedMode) 
      : systemPrefersDark

    setIsDarkMode(initialDarkMode)
    updateDocumentClass(initialDarkMode)
    setIsLoading(false)
  }, [])

  const updateDocumentClass = useCallback((darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    updateDocumentClass(newDarkMode)
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
  }, [isDarkMode, updateDocumentClass])

  const setDarkMode = useCallback((darkMode: boolean) => {
    setIsDarkMode(darkMode)
    updateDocumentClass(darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [updateDocumentClass])

  return {
    isDarkMode,
    isLoading,
    toggleDarkMode,
    setDarkMode
  }
}
