'use client'

import { useState, useCallback } from 'react'

export interface TimeFilterOption {
  value: string
  label: string
  active: boolean
}

const defaultFilters: TimeFilterOption[] = [
  { value: '3days', label: '3 Days', active: false },
  { value: '7days', label: '7 Days', active: true },
  { value: '10days', label: '10 Days', active: false },
  { value: '30days', label: '30 Days', active: false }
]

export function useTimeFilter(
  initialFilter: string = '7days',
  onFilterChange?: (filter: string) => void
) {
  const [activeFilter, setActiveFilter] = useState(initialFilter)
  const [filters, setFilters] = useState(
    defaultFilters.map(filter => ({
      ...filter,
      active: filter.value === initialFilter
    }))
  )

  const handleFilterChange = useCallback((filterValue: string) => {
    setActiveFilter(filterValue)
    
    // Update filters array
    setFilters(prevFilters =>
      prevFilters.map(filter => ({
        ...filter,
        active: filter.value === filterValue
      }))
    )

    // Call external callback if provided
    if (onFilterChange) {
      onFilterChange(filterValue)
    }
  }, [onFilterChange])

  const getActiveFilter = useCallback(() => {
    return filters.find(filter => filter.active) || filters[1] // Default to '7days'
  }, [filters])

  return {
    filters,
    activeFilter,
    handleFilterChange,
    getActiveFilter
  }
}
