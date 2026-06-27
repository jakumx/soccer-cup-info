import worldcupData from '../data/worldcups.json'

const scorers = [...worldcupData.tournaments]
  .sort((a, b) => b.topScorerGoals - a.topScorerGoals)

interface TopScorersProps {
  selectedYear: number | null
  onYearSelect: (year: number) => void
}

export default function TopScorers({ selectedYear, onYearSelect }: TopScorersProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Máximos Goleadores por Edición
      </h3>
      <p className="mt-1 text-xs text-neutral-400">
        Ordenados por goles (todos los torneos)
      </p>

      <div className="mt-4 divide-y divide-neutral-100 dark:divide-neutral-800">
        {scorers.map((t) => {
          const isSelected = selectedYear === t.year
          return (
            <button
              key={t.year}
              onClick={() => onYearSelect(t.year)}
              className={`flex w-full items-center gap-3 px-2 py-2 text-left text-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50 ${
                isSelected ? 'bg-amber-50 dark:bg-amber-900/10' : ''
              }`}
            >
              <span className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-bold ${
                isSelected
                  ? 'bg-amber-500 text-white'
                  : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
              }`}>
                {t.year}
              </span>

              <span className="flex-1 font-medium text-neutral-800 dark:text-neutral-200">
                {t.topScorer}
              </span>

              <span className="shrink-0 text-right text-neutral-500 dark:text-neutral-400">
                {t.host}
              </span>

              <span className="shrink-0 w-12 text-right font-bold text-amber-500">
                {t.topScorerGoals} {t.topScorerGoals === 1 ? 'gol' : 'goles'}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
