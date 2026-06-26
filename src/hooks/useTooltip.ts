import { useState, useCallback } from 'react'
import type { TooltipData } from '../types'

export function useTooltip() {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)

  const show = useCallback((data: TooltipData) => setTooltip(data), [])
  const hide = useCallback(() => setTooltip(null), [])

  return { tooltip, show, hide }
}
