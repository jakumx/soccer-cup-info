import { useMemo } from 'react'
import type { GeoPath } from 'd3-geo'
import type { Feature, Geometry } from 'geojson'
import { hostCountries } from '../data/hosts'

interface HostMarkersProps {
  features: Feature<Geometry, { name: string }>[]
  pathGenerator: GeoPath
}

function getRadius(count: number) {
  if (count >= 3) return 8
  if (count === 2) return 6
  return 4
}

function getColor(count: number) {
  if (count >= 3) return '#f59e0b'
  if (count === 2) return '#6b7280'
  return '#7c3aed'
}

export default function HostMarkers({ features, pathGenerator }: HostMarkersProps) {
  const featureMap = useMemo(() => {
    const map = new Map<string, Feature<Geometry, { name: string }>>()
    for (const f of features) {
      map.set(f.properties.name, f)
    }
    return map
  }, [features])

  return (
    <g pointerEvents="none">
      {hostCountries.map((host) => {
        const feature = featureMap.get(host.topoName)
        if (!feature) return null

        const centroid = pathGenerator.centroid(feature)
        if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) return null

        const radius = getRadius(host.count)
        const color = getColor(host.count)

        return (
          <g key={host.country}>
            <circle
              cx={centroid[0]}
              cy={centroid[1]}
              r={radius * 1.8}
              fill="none"
              stroke={color}
              strokeWidth={2}
              className="animate-pulse"
              opacity={0.4}
            />
            <circle
              cx={centroid[0]}
              cy={centroid[1]}
              r={radius}
              fill={color}
              stroke="white"
              strokeWidth={1.5}
            />
          </g>
        )
      })}
    </g>
  )
}
