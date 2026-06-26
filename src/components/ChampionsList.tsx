import worldcupData from '../data/worldcups.json'

export default function ChampionsList() {
  const champions = Object.entries(worldcupData.countries)
    .filter(([, stats]) => stats.titles > 0)
    .sort(([, a], [, b]) => b.titles - a.titles)

  const medals = ['🥇', '🥈', '🥉']

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Países Campeones
      </h3>
      <div className="mt-3 space-y-1.5">
        {champions.map(([name, stats], i) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 text-center text-sm">
                {i < 3 ? medals[i] : ''}
              </span>
              <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-amber-500">{stats.titles}</span>
              <span className="text-xs text-neutral-400">
                {stats.yearsWon.join(', ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
