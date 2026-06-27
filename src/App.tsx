import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import WorldMap from './components/WorldMap'
import WorldMapTooltip from './components/WorldMapTooltip'
import ColorLegend from './components/ColorLegend'
import ChampionsList from './components/ChampionsList'
import { TimelineSection } from './components/WorldCupHistory'
import { fifaHistory, hostSelection } from './data/history'
import type { TooltipData } from './types'

const tabs = [
  { id: 'map', label: 'Mapa' },
  { id: 'history', label: 'Historia' },
  { id: 'hosts', label: 'Sedes' },
] as const

type TabId = (typeof tabs)[number]['id']

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('map')
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

      <nav className="mx-auto mt-4 flex max-w-md gap-1 rounded-xl border border-neutral-200 bg-neutral-100 p-1 dark:border-neutral-800 dark:bg-neutral-900">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-white'
                : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'map' && (
            <motion.div
              key="map"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
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
            </motion.div>
          )}

          {activeTab === 'history' && (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <h2 className="mb-2 text-center text-2xl font-bold text-neutral-900 dark:text-white">
                Historia de la Copa del Mundo
              </h2>
              <p className="mb-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                Desde la fundación de la FIFA hasta el Mundial de 48 equipos — la evolución del
                torneo más importante del fútbol.
              </p>
              <TimelineSection events={fifaHistory} />
            </motion.div>
          )}

          {activeTab === 'hosts' && (
            <motion.div
              key="hosts"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <h2 className="mb-2 text-center text-2xl font-bold text-neutral-900 dark:text-white">
                ¿Cómo se elige la sede?
              </h2>
              <p className="mb-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
                El proceso de selección del país anfitrión ha evolucionado desde la rotación
                informal hasta el sistema de votación actual.
              </p>
              <TimelineSection events={hostSelection} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-400 dark:border-neutral-800">
        Datos históricos de la Copa del Mundo FIFA · 1930–2022
      </footer>
    </div>
  )
}

export default App
