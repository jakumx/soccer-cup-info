import { useMemo } from 'react'
import { buildColorScale } from '../utils/map-utils'

export default function ColorLegend() {
  const scale = useMemo(() => buildColorScale(), [])
  const domain = scale.domain()
  const range = scale.range()
  const steps = domain.length

  return (
    <div className="flex items-center gap-2 text-xs text-neutral-500">
      <span>0</span>
      <div className="flex h-3 overflow-hidden rounded">
        {range.slice(0, steps + 1).map((color: string, i: number) => (
          <div key={i} style={{ backgroundColor: color }} className="w-5" />
        ))}
      </div>
      <span>{steps}</span>
      <span className="ml-1">Copas del Mundo</span>
    </div>
  )
}
