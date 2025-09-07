'use client'

import React from 'react'
import {
  HomeIcon, UserGroupIcon, WrenchIcon, ShieldCheckIcon,
  BuildingOfficeIcon, PresentationChartLineIcon, MagnifyingGlassIcon,
  ArrowsRightLeftIcon, MapIcon, ChartBarIcon, DocumentTextIcon,
  EllipsisHorizontalIcon, ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navItems = [
  { label: 'HOME', icon: HomeIcon, href: '/' },
  { label: 'CRM', icon: UserGroupIcon, href: '/crm' },
  { label: 'UTILITIES', icon: WrenchIcon, href: '/utilities' },
  { label: 'INSURANCE', icon: ShieldCheckIcon, href: '/insurance' },
  { label: 'ASSETS', icon: BuildingOfficeIcon, href: '/assets' },
  { label: 'MUTUAL', icon: PresentationChartLineIcon, href: '/mutual' },
  { label: 'RESEARCH', icon: MagnifyingGlassIcon, href: '/research' },
  { label: 'TRANSACT ONLINE', icon: ArrowsRightLeftIcon, href: '/transact' },
  { label: 'GOAL GPS', icon: MapIcon, href: '/goalgps' },
  { label: 'FINANCIAL PLANNING', icon: ChartBarIcon, href: '/planning' },
  { label: 'WEALTH REPORT', icon: DocumentTextIcon, href: '/report' },
  { label: 'OTHER', icon: EllipsisHorizontalIcon, href: '/other' },
]

export function Navbar() {
  return (
    <nav className="w-full bg-red-600 flex items-center px-1 h-16 sticky top-0 z-10 overflow-x-auto">
      {navItems.map(({ label, icon: Icon, href }) => (
        <Link key={label} href={href} className="flex flex-col items-center mx-2 text-white hover:bg-red-700 px-2 py-1 rounded transition-all min-w-[58px]">
          <Icon className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold leading-tight">{label}</span>
        </Link>
      ))}
      <div className="flex-grow" />
      <button className="flex items-center text-white hover:bg-red-700 px-2 py-1 rounded ml-2">
        <ArrowLeftOnRectangleIcon className="w-4 h-4 mr-1" />
        <span className="text-xs">LOGOUT</span>
      </button>
    </nav>
  )
}
