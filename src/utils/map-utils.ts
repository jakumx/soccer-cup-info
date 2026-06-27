import { scaleThreshold } from 'd3-scale'
import type { TooltipData } from '../types'
import worldcupData from '../data/worldcups.json'

export interface CountryData {
  titles: number
  runnerUps: number
  yearsWon: number[]
  code: string
}

const topoNameToDataKey: Record<string, string> = {
  'United States of America': 'USA',
  'United Kingdom': 'England',
  'Czechia': 'Czechoslovakia',
  'Russia': 'Soviet Union',
  'Serbia': 'Yugoslavia',
}

const dataKeyToTopoName: Record<string, string> = {}
for (const [topo, data] of Object.entries(topoNameToDataKey)) {
  dataKeyToTopoName[data] = topo
}

function getDataKey(featureName: string): string {
  return topoNameToDataKey[featureName] ?? featureName
}

export function getTopoName(dataCountryName: string): string {
  return dataKeyToTopoName[dataCountryName] ?? dataCountryName
}

export function getCountryData(featureName: string): CountryData {
  const dataKey = getDataKey(featureName)
  const entry = worldcupData.countries[dataKey as keyof typeof worldcupData.countries]

  if (!entry) return { titles: 0, runnerUps: 0, yearsWon: [], code: '' }

  return { titles: entry.titles, runnerUps: entry.runnerUps, yearsWon: entry.yearsWon, code: entry.code }
}

export function buildColorScale() {
  const maxTitles = Math.max(
    ...Object.values(worldcupData.countries).map(c => c.titles)
  )

  const colors = [
    '#f7fbff',
    '#deebf7',
    '#c6dbef',
    '#9ecae1',
    '#6baed6',
    '#4292c6',
    '#2171b5',
    '#084594',
  ]

  if (maxTitles <= 1) return scaleThreshold<number, string>().domain([0]).range(colors.slice(0, 2))
  if (maxTitles === 2) return scaleThreshold<number, string>().domain([0, 1]).range(colors.slice(0, 3))
  if (maxTitles === 3) return scaleThreshold<number, string>().domain([0, 1, 2]).range(colors.slice(0, 4))
  if (maxTitles === 4) return scaleThreshold<number, string>().domain([0, 1, 2, 3]).range(colors.slice(0, 5))

  return scaleThreshold<number, string>()
    .domain([0, 1, 2, 3, 4])
    .range(colors.slice(0, 6))
}

export function buildTooltipData(
  featureName: string,
  data: CountryData,
  x: number,
  y: number
): TooltipData {
  return {
    name: featureName,
    titles: data.titles,
    runnerUps: data.runnerUps,
    yearsWon: data.yearsWon,
    x,
    y,
  }
}

export const championColors = [
  { color: '#FFD700', label: 'Oro' },
  { color: '#C0C0C0', label: 'Plata' },
  { color: '#CD7F32', label: 'Bronce' },
]
