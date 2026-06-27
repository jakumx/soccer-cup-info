import { useMemo } from 'react'
import { getKnockout } from '../data/knockout'
import type { BracketRound } from '../data/knockout'

interface BracketProps {
  year: number | null
}

const MATCH_H = 80
const GAP = 32
const ARM = 16

function MatchBox({ team1, team2, score1, score2, pen }: {
  team1: string; team2: string; score1: number; score2: number; pen?: string
}) {
  return (
    <div className="w-full rounded-lg border border-neutral-300 bg-white text-sm dark:border-neutral-600 dark:bg-neutral-800">
      <div className="flex items-center justify-between px-3 py-2 text-neutral-700 dark:text-neutral-300">
        <span className="truncate font-medium">{team1}</span>
        <span className="ml-3 shrink-0 tabular-nums font-semibold">
          {score1}{pen ? ` (${pen.split('-')[0]})` : ''}
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-200 px-3 py-2 dark:border-neutral-700">
        <span className="truncate text-neutral-700 dark:text-neutral-300">{team2}</span>
        <span className="ml-3 shrink-0 tabular-nums font-semibold">
          {score2}{pen ? ` (${pen.split('-')[1]})` : ''}
        </span>
      </div>
    </div>
  )
}

interface Line { x1: number; y1: number; x2: number; y2: number }

export default function Bracket({ year }: BracketProps) {
  const rounds: BracketRound[] = useMemo(() => {
    if (!year) return []
    return getKnockout(year)
  }, [year])

  const numRounds = rounds.length

  const layout = useMemo(() => {
    if (!numRounds) return null

    const firstN = rounds[0].matches.length
    const th = firstN * MATCH_H + (firstN - 1) * GAP
    const cw = 200
    const xg = cw + GAP
    const w = numRounds * xg
    const h = th + MATCH_H
    const pt = MATCH_H / 2
    const ls: Line[] = []

    for (let i = 0; i < numRounds - 1; i++) {
      const leftN = rounds[i].matches.length
      const pairN = leftN / 2
      const lx = i * xg + cw
      const ax = lx + ARM
      const rx = (i + 1) * xg

      for (let p = 0; p < pairN; p++) {
        const yE = pt + (2 * p + 0.5) * th / leftN
        const yO = pt + (2 * p + 1.5) * th / leftN
        const yM = (yE + yO) / 2
        ls.push({ x1: lx, y1: yE, x2: ax, y2: yE })
        ls.push({ x1: lx, y1: yO, x2: ax, y2: yO })
        ls.push({ x1: ax, y1: yE, x2: ax, y2: yO })
        ls.push({ x1: ax, y1: yM, x2: rx, y2: yM })
      }
    }

    return { rounds, th, cw, xg, w, h, ls, pt }
  }, [rounds, numRounds])

  if (!layout) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center text-sm text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900/50">
        Formato de grupo, sin cuadro de eliminatorias disponibles
      </div>
    )
  }

  const { rounds: rds, th, cw, w, h, ls, pt } = layout

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 py-8 dark:border-neutral-700 dark:bg-neutral-900/50">
      <div className="relative mx-auto" style={{ width: w, height: h }}>
        <svg
          className="absolute top-0 left-0 pointer-events-none"
          width={w}
          height={h}
        >
          {ls.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#737373"
              strokeWidth={2}
            />
          ))}
        </svg>

        <div className="flex" style={{ gap: GAP }}>
          {rds.map((round) => {
            const matchCount = round.matches.length
            const matchSpace = th / matchCount

            return (
              <div key={round.name} style={{ width: cw, position: 'relative' }}>
                {round.matches.map((match, m) => {
                  const top = pt + m * matchSpace + (matchSpace - MATCH_H) / 2
                  return (
                    <div
                      key={m}
                      style={{ position: 'absolute', width: cw, top, left: 0 }}
                    >
                      <MatchBox
                        team1={match.team1}
                        team2={match.team2}
                        score1={match.score1}
                        score2={match.score2}
                        pen={match.pen}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
