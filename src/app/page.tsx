import type { Metadata } from 'next'
import { DashboardContent } from '@/components/dashboard/DashboardContent'

export const metadata: Metadata = {
  title: 'Wealth Elite Dashboard',
  description: 'Professional financial dashboard for wealth management',
}

export default function Page() {
  return <DashboardContent />
}
