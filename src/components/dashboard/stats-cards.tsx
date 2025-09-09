'use client'

import {
  RectangleStackIcon,
  ArrowDownTrayIcon,
  NoSymbolIcon,
  ArrowUturnLeftIcon,
  ChartBarSquareIcon,
} from '@heroicons/react/24/outline'

const statIcons = [
  ArrowDownTrayIcon,
  RectangleStackIcon,
  NoSymbolIcon,
  ArrowUturnLeftIcon,
  ChartBarSquareIcon,
]

const statLabels = [
  'Purchases',
  'Redemptions',
  'Rejected Transactions',
  'SIP Rejections',
  'New SIP',
]

export function StatsCards({ data }: { data: Record<string, number> }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 mb-2">
      {statLabels.map((label, idx) => {
        const Icon = statIcons[idx]
        return (
          <div key={label} className="bg-white rounded shadow border p-2 flex flex-col items-center">
            <Icon className="w-5 h-5 text-red-600 mb-0.5" />
            <span className="text-xs font-bold">{data[label] || 0}</span>
            <span className="text-[8px] text-gray-700">{label}</span>
            <span className="text-[8px] text-gray-500">0.00 INR</span>
            <button className="text-red-600 text-xs hover:underline mt-0.5">View Report</button>
          </div>
        )
      })}
    </div>
  )
}
