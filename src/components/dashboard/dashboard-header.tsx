'use client'
export function DashboardHeader({
  title,
  subtitle,
  actions,
}: {
  title: string
  subtitle?: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-base md:text-lg font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
      </div>
      {actions && <div>{actions}</div>}
    </div>
  )
}
