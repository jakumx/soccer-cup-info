import { motion } from 'motion/react'
import type { HistoryEvent } from '../types'

export function TimelineSection({ title, events }: { title?: string; events: HistoryEvent[] }) {
  return (
    <div>
      {title && (
        <h3 className="mb-8 text-center text-lg font-semibold text-neutral-700 dark:text-neutral-300">
          {title}
        </h3>
      )}
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-200 dark:bg-neutral-700 md:block" aria-hidden />
        <div className="space-y-10">
          {events.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative flex flex-col md:flex-row ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1 px-4 md:px-8">
                <div
                  className={`rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <span className="inline-block rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    {event.year}
                  </span>
                  <h4 className="mt-2 text-base font-semibold text-neutral-900 dark:text-white">
                    {event.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:block" aria-hidden>
                <div className="size-3 rounded-full border-2 border-amber-400 bg-white dark:bg-neutral-900" />
              </div>

              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


