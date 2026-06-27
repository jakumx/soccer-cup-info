import { useMemo } from 'react'
import { useWorldMap } from '../hooks/useWorldMap'
import { getCountryData, buildColorScale, buildTooltipData, getTopoName } from '../utils/map-utils'
import { getHostYears } from '../data/hosts'
import HostMarkers from './HostMarkers'
import type { TooltipData } from '../types'
import type { Feature, Geometry } from 'geojson'

interface WorldMapProps {
  width?: number
  height?: number
  onCountryHover?: (data: TooltipData | null) => void
  onCountryClick?: (countryName: string, code: string) => void
  highlightedCountry?: string | null
}

export default function WorldMap({
  width = 960,
  height = 600,
  onCountryHover,
  onCountryClick,
  highlightedCountry,
}: WorldMapProps) {
  const { renderData, loading, error } = useWorldMap({ width, height })

  const colorScale = useMemo(() => buildColorScale(), [])
  const maxTitles = useMemo(() => colorScale.domain().length - 1, [colorScale])
  const highlightTopoName = useMemo(() => {
    if (!highlightedCountry || highlightedCountry.includes('/')) return null
    return getTopoName(highlightedCountry)
  }, [highlightedCountry])

  if (loading) {
    return (
      <div className="flex items-center justify-center" style={{ width, height }}>
        <div className="text-lg text-neutral-500 animate-pulse">Cargando mapa...</div>
      </div>
    )
  }

  if (error || !renderData) {
    return (
      <div className="flex items-center justify-center" style={{ width, height }}>
        <div className="text-lg text-red-500">Error: {error ?? 'No se pudo cargar el mapa'}</div>
      </div>
    )
  }

  const { features, borders, pathGenerator } = renderData

  const handleMouseEnter = (featureName: string, event: MouseEvent) => {
    const countryData = getCountryData(featureName)
    const svg = (event.target as SVGElement).closest('svg')
    if (!svg) return
    const rect = svg.getBoundingClientRect()

    onCountryHover?.(
      buildTooltipData(featureName, countryData, getHostYears(featureName), event.clientX - rect.left, event.clientY - rect.top)
    )
  }

  const handleMouseLeave = () => {
    onCountryHover?.(null)
  }

  const handleClick = (feature: Feature<Geometry, { name: string }>) => {
    onCountryClick?.(feature.properties.name, feature.properties.name)
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" style={{ maxHeight: height }}>
      <g>
        {features.map((feature) => {
          const name = feature.properties.name
          const countryData = getCountryData(name)
          const fill = countryData.titles > 0 ? colorScale(Math.min(countryData.titles, maxTitles)) : '#e5e5e5'
          const strokeW = countryData.titles > 0 ? 1.5 : 0.5
          const strokeC = countryData.titles > 0 ? '#1a1a1a' : '#ccc'

          const isHighlighted = highlightTopoName === name
          const finalStroke = isHighlighted ? '#f59e0b' : strokeC
          const finalStrokeW = isHighlighted ? 3 : strokeW
          const finalFill = isHighlighted ? '#fcd34d' : fill

          return (
            <path
              key={feature.id ?? name}
              d={pathGenerator(feature) ?? undefined}
              fill={finalFill}
              stroke={finalStroke}
              strokeWidth={finalStrokeW}
              className="cursor-pointer transition-opacity hover:opacity-80"
              onMouseEnter={(e) => handleMouseEnter(name, e.nativeEvent)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(feature)}
            />
          )
        })}
      </g>
      {borders && (
        <path
          d={pathGenerator(borders) ?? undefined}
          fill="none"
          stroke="#999"
          strokeWidth={0.3}
          pointerEvents="none"
        />
      )}
      <HostMarkers features={features} pathGenerator={pathGenerator} />
    </svg>
  )
}
