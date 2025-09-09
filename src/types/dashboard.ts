export interface DashboardStats {
  aum: {
    value: number
    change: number
    period: string
  }
  sip: {
    value: number
    change: number
    period: string
  }
  clients: {
    purchases: number
    purchasesValue: number
    redemptions: number
    redemptionsValue: number
    rejectedTransactions: number
    rejectedValue: number
    sipRejections: number
    sipRejectionsValue: number
    newSip: number
    newSipValue: number
  }
}

export interface ChartDataPoint {
  label: string
  value: number
  date?: string
}

export interface ComboChartData {
  labels: string[]
  barData: number[]
  lineData: number[]
  barLabel: string
  lineLabel: string
}

export interface TimeFilter {
  value: string
  label: string
  active: boolean
}

export interface ClientMetrics {
  online: number
  new: number
  active: number
  inactive: number
}