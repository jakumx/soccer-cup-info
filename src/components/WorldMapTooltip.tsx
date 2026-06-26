import { motion, AnimatePresence } from 'motion/react'
import type { TooltipData } from '../types'

interface WorldMapTooltipProps {
  data: TooltipData | null
}

export default function WorldMapTooltip({ data }: WorldMapTooltipProps) {
  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none absolute z-50 rounded-lg border border-neutral-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/90"
          style={{ left: data.x + 12, top: data.y - 10 }}
        >
          <p className="font-semibold text-neutral-900 dark:text-white">{data.name}</p>
          <div className="mt-1 space-y-0.5 text-sm text-neutral-600 dark:text-neutral-300">
            <p>
              Copas del Mundo:{' '}
              <span className="font-bold text-amber-500">{data.titles}</span>
            </p>
            {data.runnerUps > 0 && (
              <p>
                Subcampeonatos:{' '}
                <span className="font-semibold text-neutral-500">{data.runnerUps}</span>
              </p>
            )}
            {data.yearsWon.length > 0 && (
              <p className="text-xs text-neutral-400">
                {data.yearsWon.join(' · ')}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
