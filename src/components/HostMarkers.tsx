import type { GeoPath } from 'd3-geo'
import type { Feature, Geometry } from 'geojson'
import { hostCountries } from '../data/hosts'

interface HostMarkersProps {
  features: Feature<Geometry, { name: string }>[]
  pathGenerator: GeoPath
}

const hostScale = (count: number) => {
  if (count === 1) return 6
  if (count === 2) return 8
  return 10
}

export default function HostMarkers({ features, pathGenerator }: HostMarkersProps) {
  const featureMap = new Map<string, Feature<Geometry, { name: string }>>()
  for (const f of features) {
    featureMap.set(f.properties.name, f)
  }

  return (
    <g>
      {hostCountries.map((host) => {
        const feature = featureMap.get(host.topoName)
        if (!feature) return null

        const centroid = pathGenerator.centroid(feature)
        if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) return null

        const r = hostScale(host.count)
        const fill = host.count >= 3 ? '#f59e0b' : host.count === 2 ? '#94a3b8' : '#a78bfa'

        return (
          <g key={host.country}>
            <circle
              cx={centroid[0]}
              cy={centroid[1]}
              r={r}
              fill={fill}
              stroke="white"
              strokeWidth={2}
              className="cursor-pointer"
            />
            <circle
              cx={centroid[0]}
              cy={centroid[1]}
              r={r + 4}
              fill="none"
              stroke={fill}
              strokeWidth={1}
              className="animate-pulse"
              opacity={0.4}
            />
            <title>
              {`${host.country} (${host.count}x): ${host.years.join(', ')}`}
            </title>
          </g>
        )
      })}
    </g>
  )
}
