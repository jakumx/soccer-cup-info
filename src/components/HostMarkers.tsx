import type { GeoPath } from 'd3-geo'
import type { Feature, Geometry } from 'geojson'
import { hostCountries } from '../data/hosts'

interface HostMarkersProps {
  features: Feature<Geometry, { name: string }>[]
  pathGenerator: GeoPath
}

export default function HostMarkers({ features, pathGenerator }: HostMarkersProps) {
  const featureMap = new Map<string, Feature<Geometry, { name: string }>>()
  for (const f of features) {
    featureMap.set(f.properties.name, f)
  }

  return (
    <g pointerEvents="none">
      {hostCountries.map((host) => {
        const feature = featureMap.get(host.topoName)
        if (!feature) return null

        const centroid = pathGenerator.centroid(feature)
        if (!centroid || isNaN(centroid[0]) || isNaN(centroid[1])) return null

        return (
          <circle
            key={host.country}
            cx={centroid[0]}
            cy={centroid[1]}
            r={3}
            fill="#f59e0b"
            stroke="white"
            strokeWidth={1.5}
          />
        )
      })}
    </g>
  )
}
