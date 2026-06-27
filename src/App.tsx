import { useState, useCallback } from 'react'
import WorldMap from './components/WorldMap'
import WorldMapTooltip from './components/WorldMapTooltip'
import ColorLegend from './components/ColorLegend'
import ChampionsList from './components/ChampionsList'
import WorldCupHistory from './components/WorldCupHistory'
import type { TooltipData } from './types'

function App() {
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null)

  const handleCountryHover = useCallback((data: TooltipData | null) => {
    setTooltipData(data)
  }, [])

  const handleCountryClick = useCallback((countryName: string, code: string) => {
    console.log(`Clicked: ${countryName} (${code})`)
  }, [])

  return (
    <div className="min-h-svh bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="border-b border-neutral-200 pb-4 pt-6 text-center dark:border-neutral-800">
        <h1 className="font-display text-5xl tracking-tight">
          Copa del Mundo
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Mapa histórico de campeones · 1930–2022
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="relative">
          <div className="rounded-xl border border-neutral-200 bg-white p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <WorldMap
              width={960}
              height={560}
              onCountryHover={handleCountryHover}
              onCountryClick={handleCountryClick}
            />
            <WorldMapTooltip data={tooltipData} />
          </div>

          <div className="mt-4 flex items-center justify-center">
            <ColorLegend />
          </div>
        </div>

        <div className="mt-10">
          <ChampionsList />
        </div>

        <div className="mt-10">
          <WorldCupHistory />
        </div>
      </main>

      <footer className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-400 dark:border-neutral-800">
        Datos históricos de la Copa del Mundo FIFA · 1930–2022
      </footer>
    </div>
  )
}

export default App
