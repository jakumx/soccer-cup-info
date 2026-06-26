import { useEffect, useState } from 'react'
import { geoOrthographic, geoPath, geoMercator, type GeoPath, type GeoProjection } from 'd3-geo'
import { feature, mesh } from 'topojson-client'
import type { GeometryObject, Topology } from 'topojson-specification'
import type { FeatureCollection, Feature, Geometry } from 'geojson'

interface UseWorldMapOptions {
  width: number
  height: number
  projection?: 'mercator' | 'orthographic'
}

interface MapRenderData {
  features: Feature<Geometry, { name: string; iso_a3: string }>[]
  borders: Feature<Geometry, {}> | null
  projection: GeoProjection
  pathGenerator: GeoPath
}

export function useWorldMap({ width, height, projection: projType = 'mercator' }: UseWorldMapOptions) {
  const [renderData, setRenderData] = useState<MapRenderData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadMap() {
      try {
        const res = await fetch('/countries-110m.json')
        if (!res.ok) throw new Error(`Failed to load map data: ${res.statusText}`)
        const topology: Topology = await res.json()

        if (cancelled) return

        const countries = feature(
          topology,
          topology.objects.countries as GeometryObject<{ name: string; iso_a3: string }>
        ) as FeatureCollection<Geometry, { name: string; iso_a3: string }>

        const borders = mesh(
          topology,
          topology.objects.countries as GeometryObject,
          (a, b) => a !== b
        ) as unknown as Feature<Geometry, {}> | null

        const projection: GeoProjection =
          projType === 'orthographic'
            ? geoOrthographic()
                .fitSize([width, height], countries)
                .rotate([-10, -20])
                .precision(0.5)
            : geoMercator()
                .fitSize([width, height], countries)
                .center([0, 20])

        const pathGenerator = geoPath().projection(projection)

        setRenderData({ features: countries.features, borders, projection, pathGenerator })
        setLoading(false)
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Unknown error loading map')
          setLoading(false)
        }
      }
    }

    loadMap()
    return () => { cancelled = true }
  }, [width, height, projType])

  return { renderData, loading, error }
}
