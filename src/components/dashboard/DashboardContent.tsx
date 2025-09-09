'use client'

import React, { useState } from 'react'
import { AumCard } from './aum-card'
import { SipCard } from './sip-card'
import { StatsCards } from './stats-cards'
import { TimeFilter } from './time-filter'
import { ComboChart } from '@/components/charts/combo-chart'
import { BubbleChart } from '@/components/charts/bubble-chart'
import { DashboardHeader } from './dashboard-header'
import { PDFGenerator } from '@/components/pdf/pdf-generator'
import {
  mockDashboardData,
  sipBusinessChartData,
  monthlyMISData,
  clientMetrics,
  timeFilters,
} from '@/lib/data'

export function DashboardContent() {
  const [selectedFilter, setSelectedFilter] = useState('3days')
  const [dashboard, setDashboard] = useState(mockDashboardData)

  const onFilterChange = (value: string) => {
    setSelectedFilter(value)
    // TODO: update dashboard data here!
  }

  return (
    <div>
      <DashboardHeader
        title="Wealth Dashboard"
        subtitle="Overview of assets, business and clients"
        actions={<PDFGenerator targetId="dashboard-content" buttonText="Download PDF" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
        <AumCard {...dashboard.aum} onViewTrend={() => {}} />
        <SipCard {...dashboard.sip} onViewTrend={() => {}} />
      </div>
      <TimeFilter filters={timeFilters} selected={selectedFilter} onFilterChange={onFilterChange} />
      <StatsCards data={dashboard.clients} />
      <div id="dashboard-content" className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-1">
        <div className="bg-white rounded shadow border p-2">
          <div className="flex justify-between mb-1">
            <h3 className="text-xs font-semibold">CLIENTS</h3>
            <button className="text-red-600 text-xs">Download Report</button>
          </div>
          <BubbleChart data={clientMetrics} title="" />
        </div>
        <div className="bg-white rounded shadow border p-2">
          <div className="flex justify-between mb-1">
            <h3 className="text-xs font-semibold">SIP BUSINESS CHART</h3>
            <button className="text-red-600 text-xs">View Report</button>
          </div>
          <ComboChart data={sipBusinessChartData} title="" />
        </div>
        <div className="bg-white rounded shadow border p-2">
          <div className="flex justify-between mb-1">
            <h3 className="text-xs font-semibold">MONTHLY MIS</h3>
            <button className="text-red-600 text-xs">View Report</button>
          </div>
          <ComboChart data={monthlyMISData} title="" />
        </div>
      </div>
    </div>
  )
}
