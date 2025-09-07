'use client'

import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip,
  ChartData,
  ChartOptions,
  ChartDataset,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip
)

interface SIPBarLineChartProps {
  data: {
    labels: string[]
    bar: number[]
    line: number[]
  }
}

export default function SIPBarLineChart({ data }: SIPBarLineChartProps) {
  const labels = data?.labels || ['Jan', 'Feb', 'Mar', 'Apr']
  const bar = data?.bar || [100, 120, 90, 150]
  const line = data?.line || [5, 10, 6, 12]

  const datasets: ChartDataset<'bar' | 'line', number[]>[] = [
    {
      type: 'bar',
      label: 'SIP Amount',
      data: bar,
      backgroundColor: 'rgba(59,130,246,0.7)',
      yAxisID: 'y',
    },
    {
      type: 'line',
      label: 'SIP Growth %',
      data: line,
      borderColor: 'rgba(16,185,129,0.8)',
      tension: 0.3,
      yAxisID: 'y1', // Separate axis for line
    },
  ]

  const chartData: ChartData<'bar' | 'line'> = useMemo(() => ({
    labels,
    datasets,
  }), [labels, bar, line])

  const options: ChartOptions<'bar' | 'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'SIP Business Chart',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        beginAtZero: true,
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        type: 'category',
      },
    },
  }

  // Notice: no `type='bar'` prop here to avoid mismatch errors
 return <Chart<'bar' | 'line'> type={undefined as any} data={chartData} options={options} />

}
