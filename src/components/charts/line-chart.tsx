'use client'
import ChartJS from './chart-container'
import { Line } from 'react-chartjs-2'

export default function MultiLineChart() {
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const ds1 = labels.map(() => Math.round(Math.random()*100 + 20))
  const ds2 = labels.map(() => Math.round(Math.random()*60 + 10))
  const ds3 = labels.map(() => Math.round(Math.random()*40 + 5))

  const data = {
    labels,
    datasets: [
      { label: 'Revenue', data: ds1, borderColor: 'rgba(59,130,246,0.9)', tension: 0.3 },
      { label: 'Cost', data: ds2, borderColor: 'rgba(234,88,12,0.9)', tension: 0.3 },
      { label: 'Profit', data: ds3, borderColor: 'rgba(16,185,129,0.9)', tension: 0.3 }
    ]
  }

  const options = { responsive: true }

  return <Line data={data} options={options} />
}
