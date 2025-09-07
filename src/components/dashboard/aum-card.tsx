'use client'
export function AumCard({
  value,
  change,
  period,
  onViewTrend,
}: {
  value: number
  change: number
  period: string
  onViewTrend?: () => void
}) {
  return (
    <div className="bg-white rounded shadow border p-2 flex flex-col gap-1">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-500 font-medium">Current</span>
        <button className="text-red-600 border border-red-600 px-2 py-0.5 rounded text-[10px] hover:bg-red-50">View Report</button>
      </div>
      <h2 className="text-lg font-bold leading-tight">{value.toFixed(2)} Cr</h2>
      <p className="text-green-600 text-xs font-semibold">▲{change.toFixed(2)}% {period}</p>
      <button 
        className="text-green-600 text-xs hover:underline self-end" 
        onClick={onViewTrend}
      >View Trend</button>
    </div>
  )
}
