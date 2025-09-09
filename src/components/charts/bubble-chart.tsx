'use client'

import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  BubbleDataPoint
} from 'chart.js'
import { Bubble } from 'react-chartjs-2'
import { ClientMetrics } from '@/types/dashboard'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

interface BubbleChartProps {
  data: ClientMetrics
  title: string
  height?: number
}

export function BubbleChart({ data, title, height = 300 }: BubbleChartProps) {
  const chartData: ChartData<'bubble', BubbleDataPoint[]> = {
    datasets: [
   {
        label: 'Online',
        data: [{ x: 20, y: 30, r: data.online || 10 }],
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 2,
      },
      {
        label: 'New',
        data: [{ x: 40, y: 25, r: data.new || 10 }],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
      },
      {
        label: 'Active',
        data: [{ x: 30, y: 50, r: data.active || 10 }],
        backgroundColor: 'rgba(251, 191, 36, 0.6)',
        borderColor: 'rgb(251, 191, 36)',
        borderWidth: 2,
      },
      {
        label: 'Inactive',
        data: [{ x: 50, y: 40, r: data.inactive || 10 }],
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
        borderColor: 'rgb(239, 68, 68)',
        borderWidth: 2,
      },
    ],
  }

  const options: ChartOptions<'bubble'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const parsed = context.parsed as unknown as { x: number; y: number; r: number }
            return `${context.dataset.label}: ${parsed.r} clients`
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 70,
        title: { display: true, text: 'Engagement Score' },
      },
      y: {
        beginAtZero: true,
        max: 70,
        title: { display: true, text: 'Activity Level' },
      },
    },
  }

  return (
    <div style={{ height }}>
      <Bubble data={chartData} options={options} />
    </div>
  )
}