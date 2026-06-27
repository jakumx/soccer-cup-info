export interface KnockoutMatch {
  round: string
  team1: string
  team2: string
  score1: number
  score2: number
  pen?: string
}

export interface KnockoutData {
  year: number
  matches: KnockoutMatch[]
}

const sf: KnockoutData[] = [
  { year: 1930, matches: [
    { round: 'sf', team1: 'Argentina', team2: 'USA', score1: 6, score2: 1 },
    { round: 'sf', team1: 'Uruguay', team2: 'Yugoslavia', score1: 6, score2: 1 },
  ]},
  { year: 1934, matches: [
    { round: 'sf', team1: 'Italy', team2: 'Austria', score1: 1, score2: 0 },
    { round: 'sf', team1: 'Czechoslovakia', team2: 'Germany', score1: 3, score2: 1 },
  ]},
  { year: 1938, matches: [
    { round: 'sf', team1: 'Italy', team2: 'Brazil', score1: 2, score2: 1 },
    { round: 'sf', team1: 'Hungary', team2: 'Sweden', score1: 5, score2: 1 },
  ]},
  { year: 1950, matches: [] },
  { year: 1954, matches: [
    { round: 'sf', team1: 'West Germany', team2: 'Austria', score1: 6, score2: 1 },
    { round: 'sf', team1: 'Hungary', team2: 'Uruguay', score1: 4, score2: 2 },
  ]},
  { year: 1958, matches: [
    { round: 'sf', team1: 'Brazil', team2: 'France', score1: 5, score2: 2 },
    { round: 'sf', team1: 'Sweden', team2: 'West Germany', score1: 3, score2: 1 },
  ]},
  { year: 1962, matches: [
    { round: 'sf', team1: 'Brazil', team2: 'Chile', score1: 4, score2: 2 },
    { round: 'sf', team1: 'Czechoslovakia', team2: 'Yugoslavia', score1: 3, score2: 1 },
  ]},
  { year: 1966, matches: [
    { round: 'sf', team1: 'England', team2: 'Portugal', score1: 2, score2: 1 },
    { round: 'sf', team1: 'West Germany', team2: 'Soviet Union', score1: 2, score2: 1 },
  ]},
  { year: 1970, matches: [
    { round: 'sf', team1: 'Brazil', team2: 'Uruguay', score1: 3, score2: 1 },
    { round: 'sf', team1: 'Italy', team2: 'West Germany', score1: 4, score2: 3 },
  ]},
  { year: 1974, matches: [
    { round: 'sf', team1: 'Netherlands', team2: 'Brazil', score1: 2, score2: 0 },
    { round: 'sf', team1: 'West Germany', team2: 'Poland', score1: 1, score2: 0 },
  ]},
  { year: 1978, matches: [
    { round: 'sf', team1: 'Argentina', team2: 'Peru', score1: 6, score2: 0 },
    { round: 'sf', team1: 'Netherlands', team2: 'Italy', score1: 2, score2: 1 },
  ]},
  { year: 1982, matches: [
    { round: 'sf', team1: 'Italy', team2: 'Poland', score1: 2, score2: 0 },
    { round: 'sf', team1: 'West Germany', team2: 'France', score1: 3, score2: 3, pen: '5-4' },
  ]},
  { year: 1986, matches: [
    { round: 'sf', team1: 'Argentina', team2: 'Belgium', score1: 2, score2: 0 },
    { round: 'sf', team1: 'West Germany', team2: 'France', score1: 2, score2: 0 },
  ]},
  { year: 1990, matches: [
    { round: 'sf', team1: 'Argentina', team2: 'Italy', score1: 1, score2: 1, pen: '4-3' },
    { round: 'sf', team1: 'West Germany', team2: 'England', score1: 1, score2: 1, pen: '4-3' },
  ]},
  { year: 1994, matches: [
    { round: 'sf', team1: 'Brazil', team2: 'Sweden', score1: 1, score2: 0 },
    { round: 'sf', team1: 'Italy', team2: 'Bulgaria', score1: 2, score2: 1 },
  ]},
  { year: 1998, matches: [
    { round: 'sf', team1: 'Brazil', team2: 'Netherlands', score1: 1, score2: 1, pen: '4-2' },
    { round: 'sf', team1: 'France', team2: 'Croatia', score1: 2, score2: 1 },
  ]},
  { year: 2002, matches: [
    { round: 'sf', team1: 'Germany', team2: 'South Korea', score1: 1, score2: 0 },
    { round: 'sf', team1: 'Brazil', team2: 'Turkey', score1: 1, score2: 0 },
  ]},
  { year: 2006, matches: [
    { round: 'sf', team1: 'Italy', team2: 'Germany', score1: 2, score2: 0 },
    { round: 'sf', team1: 'Portugal', team2: 'France', score1: 0, score2: 1 },
  ]},
  { year: 2010, matches: [
    { round: 'sf', team1: 'Netherlands', team2: 'Uruguay', score1: 3, score2: 2 },
    { round: 'sf', team1: 'Spain', team2: 'Germany', score1: 1, score2: 0 },
  ]},
  { year: 2014, matches: [
    { round: 'sf', team1: 'Brazil', team2: 'Germany', score1: 1, score2: 7 },
    { round: 'sf', team1: 'Argentina', team2: 'Netherlands', score1: 0, score2: 0, pen: '4-2' },
  ]},
  { year: 2018, matches: [
    { round: 'sf', team1: 'France', team2: 'Belgium', score1: 1, score2: 0 },
    { round: 'sf', team1: 'Croatia', team2: 'England', score1: 2, score2: 1 },
  ]},
  { year: 2022, matches: [
    { round: 'sf', team1: 'Argentina', team2: 'Croatia', score1: 3, score2: 0 },
    { round: 'sf', team1: 'France', team2: 'Morocco', score1: 2, score2: 0 },
  ]},
]

export function getKnockout(year: number): KnockoutMatch[] {
  return sf.find((d) => d.year === year)?.matches ?? []
}
