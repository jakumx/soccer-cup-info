import { useMemo, useRef, useEffect, useState } from 'react'
import { getKnockout } from '../data/knockout'
import type { BracketRound } from '../data/knockout'

interface BracketProps {
  year: number | null
}

const MATCH_H = 68
const GAP = 24
const ARM = 10

function MatchBox({ team1, team2, score1, score2, pen }: {
  team1: string
  team2: string
  score1: number
  score2: number
  pen?: string
}) {
  return (
    <div className="w-full rounded-md border border-neutral-300 bg-white text-xs dark:border-neutral-600 dark:bg-neutral-800">
      <div className="flex items-center justify-between px-2.5 py-1.5 text-neutral-700 dark:text-neutral-300">
        <span className="truncate">{team1}</span>
        <span className="ml-2 shrink-0 tabular-nums">{score1}{pen ? ` (${pen.split('-')[0]})` : ''}</span>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-200 px-2.5 py-1.5 dark:border-neutral-700">
        <span className="truncate text-neutral-700 dark:text-neutral-300">{team2}</span>
        <span className="ml-2 shrink-0 tabular-nums">{score2}{pen ? ` (${pen.split('-')[1]})` : ''}</span>
      </div>
    </div>
  )
}

interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
}

export default function Bracket({ year }: BracketProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setContainerWidth(entry.contentRect.width)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const rounds: BracketRound[] = useMemo(() => {
    if (!year) return []
    return getKnockout(year)
  }, [year])

  const numRounds = rounds.length

  const { reversed, totalHeight, colWidth, xGap, lines } = useMemo(() => {
    if (!numRounds) return { reversed: [] as BracketRound[], totalHeight: 0, colWidth: 0, xGap: 0, lines: [] as Line[] }
    const rev = [...rounds].reverse()
    const fmc = rev[0].matches.length
    const th = fmc * MATCH_H + (fmc - 1) * GAP
    const cw = Math.max(140, (Math.min(containerWidth || 900, 1100) - GAP * (numRounds - 1)) / numRounds)
    const xg = cw + GAP
    const ls: Line[] = []

    for (let i = 0; i < numRounds - 1; i++) {
      const leftN = 2 ** (numRounds - 1 - i)
      const pairN = leftN / 2
      const lx = i * xg + cw
      const rx = (i + 1) * xg
      const ax = lx + ARM

      for (let p = 0; p < pairN; p++) {
        const yEven = (2 * p + 0.5) * th / leftN
        const yOdd = (2 * p + 1.5) * th / leftN
        const yMid = (yEven + yOdd) / 2
        ls.push({ x1: lx, y1: yEven, x2: ax, y2: yEven })
        ls.push({ x1: lx, y1: yOdd, x2: ax, y2: yOdd })
        ls.push({ x1: ax, y1: yEven, x2: ax, y2: yOdd })
        ls.push({ x1: ax, y1: yMid, x2: rx, y2: yMid })
      }
    }

    return { reversed: rev, totalHeight: th, colWidth: cw, xGap: xg, lines: ls }
  }, [rounds, numRounds, containerWidth])

  if (!numRounds) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center text-sm text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900/50">
        Formato de grupo, sin cuadro de eliminatorias disponibles
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900/50">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: totalHeight + MATCH_H / 2, minWidth: numRounds * xGap }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          width={numRounds * xGap}
          height={totalHeight + MATCH_H / 2}
        >
          {lines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#a3a3a3"
              strokeWidth={1.5}
              className="dark:stroke-neutral-600"
            />
          ))}
        </svg>

        <div className="flex" style={{ gap: GAP }}>
          {reversed.map((round, i) => {
            const matchCount = 2 ** (numRounds - 1 - i)
            const matchSpace = totalHeight / matchCount

            return (
              <div key={round.name} className="relative flex-col" style={{ width: colWidth }}>
                {round.matches.map((match, m) => {
                  const top = m * matchSpace + (matchSpace - MATCH_H) / 2
                  return (
                    <div
                      key={m}
                      className="absolute"
                      style={{ width: colWidth, top, left: 0 }}
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
