'use client'
export function TimeFilter({
  filters,
  selected,
  onFilterChange,
}: {
  filters: { value: string; label: string }[]
  selected: string
  onFilterChange: (value: string) => void
}) {
  return (
    <div className="flex space-x-1 mb-1">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
            filter.value === selected ? 'bg-red-600 text-white' : 'bg-white text-gray-800 border border-gray-300 hover:bg-red-50'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
