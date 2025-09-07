'use client'
import React from 'react'
import Link from 'next/link'
import {
  HomeIcon,
  UserGroupIcon,
  WrenchIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  ArrowsRightLeftIcon,
  MapIcon,
  ChartBarIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'

const items = [
  { name: 'HOME', icon: HomeIcon, href: '/', active: true },
  { name: 'CRM', icon: UserGroupIcon, href: '/crm' },
  { name: 'UTILITIES', icon: WrenchIcon, href: '/utilities' },
  { name: 'INSURANCE', icon: ShieldCheckIcon, href: '/insurance' },
  { name: 'ASSETS', icon: BuildingOfficeIcon, href: '/assets' },
  { name: 'MUTUAL', icon: PresentationChartLineIcon, href: '/mutual' },
  { name: 'RESEARCH', icon: MagnifyingGlassIcon, href: '/research' },
  { name: 'TRANSACT ONLINE', icon: ArrowsRightLeftIcon, href: '/transact' },
  { name: 'GOAL GPS', icon: MapIcon, href: '/goal-gps' },
  { name: 'FINANCIAL PLANNING', icon: ChartBarIcon, href: '/financial-planning' },
  { name: 'WEALTH REPORT', icon: DocumentTextIcon, href: '/wealth-report' },
  { name: 'OTHER', icon: EllipsisHorizontalIcon, href: '/other' },
]

export function Sidebar() {
  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-white border-r border-gray-200 flex flex-col p-4 space-y-6">
      <div className="mb-7">
        <h1 className="text-2xl font-bold mb-2">Wealth Elite</h1>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span className="text-black">&#9679;</span>
          <span>Live portfolio</span>
        </div>
      </div>
      <nav className="flex-1 flex flex-col space-y-6">
        {items.map(({ name, icon: Icon }) => (
          <Link href="/" key={name} className="flex flex-col items-center gap-2 group">
            <Icon className="w-20 h-20 text-teal-600 group-hover:text-teal-700" />
            <span className="text-sm text-teal-600 font-semibold">{name}</span>
          </Link>
        ))}
      </nav>
      <button className="mt-auto flex items-center justify-center text-sm text-black border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
        <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-2" />
        LOGOUT
      </button>
    </aside>
  )
}