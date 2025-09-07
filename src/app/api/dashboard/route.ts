import { NextResponse } from 'next/server'
import { mockDashboardData, sipBusinessChartData, monthlyMISData, clientMetrics } from '@/lib/data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const timeFilter = searchParams.get('timeFilter') || '7days'
  
  try {
    // Simulate data fetching based on time filter
    // In a real application, you would fetch data from a database
    const data = {
      dashboard: mockDashboardData,
      sipBusiness: sipBusinessChartData,
      monthlyMIS: monthlyMISData,
      clients: clientMetrics,
      timeFilter: timeFilter,
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Handle data updates here
    // This could be used for real-time updates or data modifications
    console.log('Dashboard data update:', body)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Data updated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error updating dashboard data:', error)
    return NextResponse.json(
      { error: 'Failed to update dashboard data' },
      { status: 500 }
    )
  }
}