import { motion } from 'motion/react'
import worldcupData from '../data/worldcups.json'

interface TournamentDetailsProps {
  year: number | null
}

export default function TournamentDetails({ year }: TournamentDetailsProps) {
  if (!year) return null

  const t = worldcupData.tournaments.find((t) => t.year === year)
  if (!t) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
          {t.host} {t.year}
        </h3>
        <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
          {t.year}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-xs text-neutral-400">Campeón</p>
          <p className="font-bold text-green-600 dark:text-green-400">{t.champion}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-400">Subcampeón</p>
          <p className="font-semibold text-neutral-700 dark:text-neutral-300">{t.runnerUp}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-400">Tercer lugar</p>
          <p className="text-neutral-600 dark:text-neutral-400">{t.thirdPlace}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-400">Cuarto lugar</p>
          <p className="text-neutral-600 dark:text-neutral-400">{t.fourthPlace}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 border-t border-neutral-100 pt-4 text-center text-sm dark:border-neutral-800">
        <div>
          <p className="text-lg font-bold text-neutral-800 dark:text-white">{t.teams}</p>
          <p className="text-xs text-neutral-400">Equipos</p>
        </div>
        <div>
          <p className="text-lg font-bold text-neutral-800 dark:text-white">{t.matches}</p>
          <p className="text-xs text-neutral-400">Partidos</p>
        </div>
        <div>
          <p className="text-lg font-bold text-neutral-800 dark:text-white">{t.goalsScored}</p>
          <p className="text-xs text-neutral-400">Goles</p>
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
        Máximo goleador: <span className="font-semibold text-neutral-700 dark:text-neutral-300">{t.topScorer}</span> ({t.topScorerGoals} goles)
      </div>
    </motion.div>
  )
}
