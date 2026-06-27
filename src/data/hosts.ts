import worldcupData from './worldcups.json'
import { getTopoName, getDataKey } from '../utils/map-utils'

export interface HostInfo {
  country: string
  topoName: string
  years: number[]
  count: number
}

const hostMap = new Map<string, number[]>()

for (const t of worldcupData.tournaments) {
  const parts = t.host.split(' / ')
  for (const h of parts) {
    const existing = hostMap.get(h) ?? []
    existing.push(t.year)
    hostMap.set(h, existing)
  }
}

export function getHostYears(featureName: string): number[] {
  const key = getDataKey(featureName)
  return hostMap.get(key) ?? []
}

export const hostCountries: HostInfo[] = Array.from(hostMap.entries())
  .map(([country, years]) => ({
    country,
    topoName: getTopoName(country),
    years: years.sort((a, b) => a - b),
    count: years.length,
  }))
  .sort((a, b) => b.count - a.count)
