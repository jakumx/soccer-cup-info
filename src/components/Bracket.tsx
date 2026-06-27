import { useMemo, useRef, useEffect, useState } from 'react'
import { getKnockout } from '../data/knockout'
import type { BracketRound } from '../data/knockout'

interface BracketProps {
  year: number | null
}

const MATCH_H = 68
const COL_W = 180
const GAP = 24

function MatchBox({ team1, team2, score1, score2, pen, winner }: {
  team1: string
  team2: string
  score1: number
  score2: number
  pen?: string
  winner?: string
}) {
  return (
    <div className="w-full rounded-md border border-neutral-300 bg-white text-xs dark:border-neutral-600 dark:bg-neutral-800">
      <div className={`flex items-center justify-between px-2.5 py-1.5 ${team1 === winner ? 'font-semibold text-green-600 dark:text-green-400' : 'text-neutral-700 dark:text-neutral-300'}`}>
        <span className="truncate">{team1}</span>
        <span className="ml-2 shrink-0 tabular-nums">{score1}{pen && team1 === winner ? ` (${pen.split('-')[0]})` : ''}</span>
      </div>
      <div className={`flex items-center justify-between border-t border-neutral-200 px-2.5 py-1.5 dark:border-neutral-700 ${team2 === winner ? 'font-semibold text-green-600 dark:text-green-400' : 'text-neutral-700 dark:text-neutral-300'}`}>
        <span className="truncate">{team2}</span>
        <span className="ml-2 shrink-0 tabular-nums">{score2}{pen && team2 === winner ? ` (${pen.split('-')[1]})` : ''}</span>
      </div>
    </div>
  )
}

interface Connection {
  x1: number
  y1: number
  x2: number
  y2: number
}

export default function Bracket({ year }: BracketProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const rounds: BracketRound[] = useMemo(() => {
    if (!year) return []
    return getKnockout(year)
  }, [year])

  const numRounds = rounds.length

  const firstRoundMatches = useMemo(() => {
    if (!numRounds) return 0
    return rounds[numRounds - 1].matches.length
  }, [rounds, numRounds])

  const totalHeight = useMemo(() => {
    if (!firstRoundMatches) return 0
    return firstRoundMatches * MATCH_H + (firstRoundMatches - 1) * GAP
  }, [firstRoundMatches])

  const connections: Connection[] = useMemo(() => {
    if (!numRounds || !totalHeight) return []
    const result: Connection[] = []
    const xGap = COL_W + GAP

    for (let r = 0; r < numRounds - 1; r++) {
      const matchesR = 2 ** r
      const matchesR1 = 2 ** (r + 1)
      const leftX = (numRounds - 1 - r) * xGap + COL_W
      const rightX = (numRounds - 2 - r) * xGap

      for (let m = 0; m < matchesR; m++) {
        const yLeft = (m + 0.5) * totalHeight / matchesR
        const yRight0 = (2 * m + 0.5) * totalHeight / matchesR1
        const yRight1 = (2 * m + 1.5) * totalHeight / matchesR1

        result.push({ x1: leftX, y1: yLeft, x2: rightX, y2: yRight0 })
        result.push({ x1: leftX + GAP, y1: yRight0, x2: leftX + GAP, y2: yRight1 })
        result.push({ x1: leftX, y1: yRight1, x2: rightX, y2: yRight1 })
      }
    }
    return result
  }, [numRounds, totalHeight])

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width)
      }
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  if (!rounds.length) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center text-sm text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900/50">
        Formato de grupo, sin cuadro de eliminatorias
      </div>
    )
  }

  const colWidth = Math.max(140, (Math.min(containerWidth, 1100) - GAP * (numRounds - 1)) / numRounds)

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900/50">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: totalHeight + MATCH_H / 2 }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ width: numRounds * (colWidth + GAP), height: totalHeight + MATCH_H / 2 }}
        >
          {connections.map((c, i) => (
            <line
              key={i}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              stroke="#a3a3a3"
              strokeWidth={1.5}
              className="dark:stroke-neutral-600"
            />
          ))}
        </svg>

        <div className="flex gap-4" style={{ gap: GAP }}>
          {rounds.map((round, r) => {
            const numMatches = 2 ** r
            const matchSpace = totalHeight / numMatches

            return (
              <div key={round.name} className="flex flex-col" style={{ width: colWidth }}>
                {Array.from({ length: 2 ** (numRounds - 1 - r) }).map((_, m) => {
                  const match = round.matches[m]
                  if (!match) return null
                  const y = m * matchSpace + (matchSpace - MATCH_H) / 2

                  return (
                    <div
                      key={m}
                      className="absolute"
                      style={{
                        width: colWidth,
                        top: y + MATCH_H / 4,
                        left: r * (colWidth + GAP),
                      }}
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
