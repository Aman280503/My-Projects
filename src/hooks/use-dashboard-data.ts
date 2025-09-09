'use client'

import { useState, useEffect, useCallback } from 'react'
import { DashboardStats, ComboChartData, ClientMetrics } from '@/types/dashboard'

interface DashboardData {
  dashboard: DashboardStats
  sipBusiness: ComboChartData
  monthlyMIS: ComboChartData
  clients: ClientMetrics
  timeFilter: string
  timestamp: string
}

export function useDashboardData(initialTimeFilter: string = '7days') {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [timeFilter, setTimeFilter] = useState(initialTimeFilter)

  const fetchData = useCallback(async (filter: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`/api/dashboard?timeFilter=${filter}`)
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data')
      }
      
      const dashboardData = await response.json()
      setData(dashboardData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Dashboard data fetch error:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData(timeFilter)
  }, [timeFilter, fetchData])

  const refreshData = useCallback(() => {
    fetchData(timeFilter)
  }, [timeFilter, fetchData])

  const updateTimeFilter = useCallback((newFilter: string) => {
    setTimeFilter(newFilter)
  }, [])

  return {
    data,
    loading,
    error,
    timeFilter,
    refreshData,
    updateTimeFilter
  }
}
