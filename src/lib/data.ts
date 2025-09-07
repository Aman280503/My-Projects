import { DashboardStats, ComboChartData, ClientMetrics } from '../types/dashboard'

export const mockDashboardData: DashboardStats = {
  aum: {
    value: 12.19,
    change: 0.77,
    period: 'MoM'
  },
  sip: {
    value: 1.39,
    change: 0,
    period: 'MoM'
  },
  clients: {
    purchases: 0,
    purchasesValue: 0,
    redemptions: 0,
    redemptionsValue: 0,
    rejectedTransactions: 0,
    rejectedValue: 0,
    sipRejections: 0,
    sipRejectionsValue: 0,
    newSip: 0,
    newSipValue: 0
  }
}

export const sipBusinessChartData: ComboChartData = {
  labels: ['Mar', 'Apr', 'May', 'Jun'],
  barData: [0.60, 0.40, 0.20, 0.00],
  lineData: [2.4, 1.6, 0.8, -0.20],
  barLabel: 'SIP Business (Cr)',
  lineLabel: 'Growth Rate'
}

export const monthlyMISData: ComboChartData = {
  labels: ['Mar', 'Apr', 'May', 'Jun'],
  barData: [120, 110, 100, 90],
  lineData: [60, 541, 3824, 2],
  barLabel: 'Monthly Performance',
  lineLabel: 'Transactions'
}

export const clientMetrics: ClientMetrics = {
  online: 0,
  new: 0,
  active: 0,
  inactive: 0
}

export const timeFilters = [
  { value: '3days', label: '3 Days', active: false },
  { value: '7days', label: '7 Days', active: true },
  { value: '10days', label: '10 Days', active: false },
  { value: '30days', label: '30 Days', active: false }
]