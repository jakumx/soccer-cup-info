export interface Tournament {
  year: number
  host: string
  champion: string
  runnerUp: string
  thirdPlace: string
  fourthPlace: string
  goalsScored: number
  matches: number
  teams: number
  topScorer: string
  topScorerGoals: number
}

export interface CountryStats {
  titles: number
  runnerUps: number
  thirdPlaces: number
  fourthPlaces: number
  code: string
  yearsWon: number[]
}

export interface WorldCupData {
  tournaments: Tournament[]
  countries: Record<string, CountryStats>
}

export interface TopoJSONFeature {
  type: 'Feature'
  id: string
  properties: {
    name: string
    iso_a3: string
  }
  geometry: GeoJSON.Geometry
}

export interface MapFeature {
  feature: TopoJSONFeature
  countryName: string
  isoCode: string
  titles: number
  runnerUps: number
  yearsWon: number[]
  color: string
}

export interface TooltipData {
  name: string
  titles: number
  runnerUps: number
  yearsWon: number[]
  x: number
  y: number
}
