import { useRef } from 'react'
import worldcupData from '../data/worldcups.json'

interface YearSelectorProps {
  selected: number | null
  onSelect: (year: number) => void
}

export default function YearSelector({ selected, onSelect }: YearSelectorProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Explorar por edición
      </p>
      <div
        ref={scrollRef}
        className="flex gap-1.5 overflow-x-auto pb-1"
      >
        {worldcupData.tournaments.map((t) => {
          const isSelected = selected === t.year
          return (
            <button
              key={t.year}
              aria-pressed={isSelected}
              onClick={() => onSelect(t.year)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                isSelected
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              {t.year}
            </button>
          )
        })}
      </div>
    </div>
  )
}
