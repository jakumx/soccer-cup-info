import worldcupData from '../data/worldcups.json'
import { getKnockout } from '../data/knockout'

interface BracketProps {
  year: number | null
}

function MatchBox({ team1, team2, score1, score2, pen, winner }: {
  team1: string
  team2: string
  score1?: number
  score2?: number
  pen?: string
  winner?: string
}) {
  return (
    <div className="w-48 rounded-lg border border-neutral-200 bg-white text-sm dark:border-neutral-700 dark:bg-neutral-900">
      <div className={`flex items-center justify-between px-3 py-1.5 ${team1 === winner ? 'font-bold text-green-600 dark:text-green-400' : 'text-neutral-700 dark:text-neutral-300'}`}>
        <span className="truncate">{team1}</span>
        {score1 !== undefined && <span className="ml-2 shrink-0">{score1}{pen && team1 === winner ? ` (${pen.split('-')[0]})` : ''}</span>}
      </div>
      <div className={`border-t border-neutral-100 flex items-center justify-between px-3 py-1.5 dark:border-neutral-800 ${team2 === winner ? 'font-bold text-green-600 dark:text-green-400' : 'text-neutral-700 dark:text-neutral-300'}`}>
        <span className="truncate">{team2}</span>
        {score2 !== undefined && <span className="ml-2 shrink-0">{score2}{pen && team2 === winner ? ` (${pen.split('-')[1]})` : ''}</span>}
      </div>
      {pen && (
        <div className="border-t border-neutral-100 px-3 py-1 text-center text-xs text-neutral-400 dark:border-neutral-800">
          Penales: {pen}
        </div>
      )}
    </div>
  )
}

export default function Bracket({ year }: BracketProps) {
  if (!year) return null

  const t = worldcupData.tournaments.find((t) => t.year === year)
  if (!t) return null

  const semis = getKnockout(year)

  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900/50">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-8">
        <div className="space-y-3">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Semifinales
          </p>
          {semis.length > 0 ? semis.map((m, i) => (
            <MatchBox
              key={i}
              team1={m.team1}
              team2={m.team2}
              score1={m.score1}
              score2={m.score2}
              pen={m.pen}
              winner={i === 0 ? t.champion : t.runnerUp}
            />
          )) : (
            <p className="text-xs text-neutral-400">Formato de grupo, sin eliminatorias</p>
          )}
        </div>

        <div className="hidden md:flex items-center self-center text-neutral-300 dark:text-neutral-600">
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="0" y1="12" x2="24" y2="12" />
            <polyline points="24,4 32,12 24,20" />
          </svg>
        </div>

        <div className="space-y-3">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Final
          </p>
          <MatchBox
            team1={t.champion}
            team2={t.runnerUp}
            winner={t.champion}
          />
          <div className="mt-4">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Tercer lugar
            </p>
            <div className="mt-2">
              <MatchBox
                team1={t.thirdPlace}
                team2={t.fourthPlace}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
