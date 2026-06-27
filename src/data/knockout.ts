export interface BracketMatch {
  team1: string
  team2: string
  score1: number
  score2: number
  pen?: string
}

export interface BracketRound {
  name: string
  matches: BracketMatch[]
}

export interface BracketData {
  year: number
  teams: number
  format: string
  rounds: BracketRound[]
  thirdPlace?: BracketMatch
}

export const allBrackets: BracketData[] = [
  { year: 1930, teams: 13, format: '4 grupos → semifinales', rounds: [
    { name: 'Semifinales', matches: [
      { team1: 'Argentina', team2: 'USA', score1: 6, score2: 1 },
      { team1: 'Uruguay', team2: 'Yugoslavia', score1: 6, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Uruguay', team2: 'Argentina', score1: 4, score2: 2 },
    ] },
  ] },
  { year: 1934, thirdPlace: { team1: 'Germany', team2: 'Austria', score1: 3, score2: 2 }, teams: 16, format: 'Eliminatoria directa 16avos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Italy', team2: 'USA', score1: 7, score2: 1 },
      { team1: 'Spain', team2: 'Brazil', score1: 3, score2: 1 },
      { team1: 'Austria', team2: 'France', score1: 3, score2: 2 },
      { team1: 'Hungary', team2: 'Egypt', score1: 4, score2: 2 },
      { team1: 'Czechoslovakia', team2: 'Romania', score1: 2, score2: 1 },
      { team1: 'Switzerland', team2: 'Netherlands', score1: 3, score2: 2 },
      { team1: 'Germany', team2: 'Belgium', score1: 5, score2: 2 },
      { team1: 'Sweden', team2: 'Argentina', score1: 3, score2: 2 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'Italy', team2: 'Spain', score1: 1, score2: 1, pen: '1-0' },
      { team1: 'Austria', team2: 'Hungary', score1: 2, score2: 1 },
      { team1: 'Czechoslovakia', team2: 'Switzerland', score1: 3, score2: 2 },
      { team1: 'Germany', team2: 'Sweden', score1: 2, score2: 1 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Italy', team2: 'Austria', score1: 1, score2: 0 },
      { team1: 'Czechoslovakia', team2: 'Germany', score1: 3, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Italy', team2: 'Czechoslovakia', score1: 2, score2: 1 },
    ] },
  ] },
  { year: 1938, thirdPlace: { team1: 'Brazil', team2: 'Sweden', score1: 4, score2: 2 }, teams: 15, format: 'Eliminatoria directa 16avos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Switzerland', team2: 'Germany', score1: 1, score2: 1, pen: '4-2' },
      { team1: 'Cuba', team2: 'Romania', score1: 3, score2: 3, pen: '2-1' },
      { team1: 'Hungary', team2: 'Dutch East Indies', score1: 6, score2: 0 },
      { team1: 'Sweden', team2: 'Austria', score1: 1, score2: 0 },
      { team1: 'France', team2: 'Belgium', score1: 3, score2: 1 },
      { team1: 'Brazil', team2: 'Poland', score1: 6, score2: 5 },
      { team1: 'Czechoslovakia', team2: 'Netherlands', score1: 3, score2: 0 },
      { team1: 'Italy', team2: 'Norway', score1: 2, score2: 1 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'Hungary', team2: 'Switzerland', score1: 2, score2: 0 },
      { team1: 'Sweden', team2: 'Cuba', score1: 8, score2: 0 },
      { team1: 'Brazil', team2: 'Czechoslovakia', score1: 1, score2: 1, pen: '2-1' },
      { team1: 'Italy', team2: 'France', score1: 3, score2: 1 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Italy', team2: 'Brazil', score1: 2, score2: 1 },
      { team1: 'Hungary', team2: 'Sweden', score1: 5, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Italy', team2: 'Hungary', score1: 4, score2: 2 },
    ] },
  ] },
  { year: 1950, teams: 13, format: '4 grupos → fase final (grupo de 4)', rounds: [
    { name: 'Fase final', matches: [
      { team1: 'Brazil', team2: 'Sweden', score1: 7, score2: 1 },
      { team1: 'Uruguay', team2: 'Spain', score1: 2, score2: 2 },
      { team1: 'Brazil', team2: 'Spain', score1: 6, score2: 1 },
      { team1: 'Uruguay', team2: 'Sweden', score1: 3, score2: 2 },
      { team1: 'Sweden', team2: 'Spain', score1: 3, score2: 1 },
      { team1: 'Uruguay', team2: 'Brazil', score1: 2, score2: 1 },
    ] },
  ] },
  { year: 1954, thirdPlace: { team1: 'Austria', team2: 'Uruguay', score1: 3, score2: 1 }, teams: 16, format: '4 grupos → cuartos', rounds: [
    { name: 'Cuartos', matches: [
      { team1: 'Austria', team2: 'Switzerland', score1: 7, score2: 5 },
      { team1: 'Uruguay', team2: 'England', score1: 4, score2: 2 },
      { team1: 'Hungary', team2: 'Brazil', score1: 4, score2: 2 },
      { team1: 'West Germany', team2: 'Yugoslavia', score1: 2, score2: 0 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'West Germany', team2: 'Austria', score1: 6, score2: 1 },
      { team1: 'Hungary', team2: 'Uruguay', score1: 4, score2: 2 },
    ] },
    { name: 'Final', matches: [
      { team1: 'West Germany', team2: 'Hungary', score1: 3, score2: 2 },
    ] },
  ] },
  { year: 1958, thirdPlace: { team1: 'France', team2: 'West Germany', score1: 6, score2: 3 }, teams: 16, format: '4 grupos → cuartos', rounds: [
    { name: 'Cuartos', matches: [
      { team1: 'France', team2: 'Northern Ireland', score1: 4, score2: 0 },
      { team1: 'West Germany', team2: 'Yugoslavia', score1: 1, score2: 0 },
      { team1: 'Sweden', team2: 'Soviet Union', score1: 2, score2: 0 },
      { team1: 'Brazil', team2: 'Wales', score1: 1, score2: 0 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Brazil', team2: 'France', score1: 5, score2: 2 },
      { team1: 'Sweden', team2: 'West Germany', score1: 3, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Brazil', team2: 'Sweden', score1: 5, score2: 2 },
    ] },
  ] },
  { year: 1962, thirdPlace: { team1: 'Chile', team2: 'Yugoslavia', score1: 1, score2: 0 }, teams: 16, format: '4 grupos → cuartos', rounds: [
    { name: 'Cuartos', matches: [
      { team1: 'Chile', team2: 'Soviet Union', score1: 2, score2: 1 },
      { team1: 'Brazil', team2: 'England', score1: 3, score2: 1 },
      { team1: 'Czechoslovakia', team2: 'Hungary', score1: 1, score2: 0 },
      { team1: 'Yugoslavia', team2: 'West Germany', score1: 1, score2: 0 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Brazil', team2: 'Chile', score1: 4, score2: 2 },
      { team1: 'Czechoslovakia', team2: 'Yugoslavia', score1: 3, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Brazil', team2: 'Czechoslovakia', score1: 3, score2: 1 },
    ] },
  ] },
  { year: 1966, thirdPlace: { team1: 'Portugal', team2: 'Soviet Union', score1: 2, score2: 1 }, teams: 16, format: '4 grupos → cuartos', rounds: [
    { name: 'Cuartos', matches: [
      { team1: 'England', team2: 'Argentina', score1: 1, score2: 0 },
      { team1: 'Portugal', team2: 'North Korea', score1: 5, score2: 3 },
      { team1: 'West Germany', team2: 'Uruguay', score1: 4, score2: 0 },
      { team1: 'Soviet Union', team2: 'Hungary', score1: 2, score2: 1 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'England', team2: 'Portugal', score1: 2, score2: 1 },
      { team1: 'West Germany', team2: 'Soviet Union', score1: 2, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'England', team2: 'West Germany', score1: 4, score2: 2 },
    ] },
  ] },
  { year: 1970, thirdPlace: { team1: 'West Germany', team2: 'Uruguay', score1: 1, score2: 0 }, teams: 16, format: '4 grupos → cuartos', rounds: [
    { name: 'Cuartos', matches: [
      { team1: 'Brazil', team2: 'Peru', score1: 4, score2: 2 },
      { team1: 'Uruguay', team2: 'Soviet Union', score1: 1, score2: 0 },
      { team1: 'Italy', team2: 'Mexico', score1: 4, score2: 1 },
      { team1: 'West Germany', team2: 'England', score1: 3, score2: 2 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Brazil', team2: 'Uruguay', score1: 3, score2: 1 },
      { team1: 'Italy', team2: 'West Germany', score1: 4, score2: 3 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Brazil', team2: 'Italy', score1: 4, score2: 1 },
    ] },
  ] },
  { year: 1974, thirdPlace: { team1: 'Poland', team2: 'Brazil', score1: 1, score2: 0 }, teams: 16, format: '4 grupos → 2 grupos → final', rounds: [
    { name: 'Segunda fase (grupos)', matches: [
      { team1: 'Netherlands', team2: 'Brazil', score1: 2, score2: 0 },
      { team1: 'West Germany', team2: 'Poland', score1: 1, score2: 0 },
    ] },
    { name: 'Final', matches: [
      { team1: 'West Germany', team2: 'Netherlands', score1: 2, score2: 1 },
    ] },
  ] },
  { year: 1978, thirdPlace: { team1: 'Brazil', team2: 'Italy', score1: 2, score2: 1 }, teams: 16, format: '4 grupos → 2 grupos → final', rounds: [
    { name: 'Segunda fase (grupos)', matches: [
      { team1: 'Argentina', team2: 'Peru', score1: 6, score2: 0 },
      { team1: 'Netherlands', team2: 'Italy', score1: 2, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Argentina', team2: 'Netherlands', score1: 3, score2: 1 },
    ] },
  ] },
  { year: 1982, thirdPlace: { team1: 'Poland', team2: 'France', score1: 3, score2: 2 }, teams: 24, format: '6 grupos → 4 grupos → semifinales', rounds: [
    { name: 'Semifinales', matches: [
      { team1: 'Italy', team2: 'Poland', score1: 2, score2: 0 },
      { team1: 'West Germany', team2: 'France', score1: 3, score2: 3, pen: '5-4' },
    ] },
    { name: 'Final', matches: [
      { team1: 'Italy', team2: 'West Germany', score1: 3, score2: 1 },
    ] },
  ] },
  { year: 1986, thirdPlace: { team1: 'France', team2: 'Belgium', score1: 4, score2: 2 }, teams: 24, format: '6 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Mexico', team2: 'Bulgaria', score1: 2, score2: 0 },
      { team1: 'Soviet Union', team2: 'Belgium', score1: 3, score2: 4 },
      { team1: 'Brazil', team2: 'Poland', score1: 4, score2: 0 },
      { team1: 'Argentina', team2: 'Uruguay', score1: 1, score2: 0 },
      { team1: 'Italy', team2: 'France', score1: 0, score2: 2 },
      { team1: 'West Germany', team2: 'Morocco', score1: 1, score2: 0 },
      { team1: 'England', team2: 'Paraguay', score1: 3, score2: 0 },
      { team1: 'Denmark', team2: 'Spain', score1: 1, score2: 5 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'France', team2: 'Brazil', score1: 1, score2: 1, pen: '4-3' },
      { team1: 'West Germany', team2: 'Mexico', score1: 0, score2: 0, pen: '4-1' },
      { team1: 'Argentina', team2: 'England', score1: 2, score2: 1 },
      { team1: 'Spain', team2: 'Belgium', score1: 1, score2: 1, pen: '4-5' },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Argentina', team2: 'Belgium', score1: 2, score2: 0 },
      { team1: 'West Germany', team2: 'France', score1: 2, score2: 0 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Argentina', team2: 'West Germany', score1: 3, score2: 2 },
    ] },
  ] },
  { year: 1990, thirdPlace: { team1: 'Italy', team2: 'England', score1: 2, score2: 1 }, teams: 24, format: '6 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Cameroon', team2: 'Colombia', score1: 2, score2: 1 },
      { team1: 'Czechoslovakia', team2: 'Costa Rica', score1: 4, score2: 1 },
      { team1: 'Argentina', team2: 'Brazil', score1: 1, score2: 0 },
      { team1: 'West Germany', team2: 'Netherlands', score1: 2, score2: 1 },
      { team1: 'Ireland', team2: 'Romania', score1: 0, score2: 0, pen: '5-4' },
      { team1: 'Italy', team2: 'Uruguay', score1: 2, score2: 0 },
      { team1: 'Spain', team2: 'Yugoslavia', score1: 1, score2: 2 },
      { team1: 'England', team2: 'Belgium', score1: 1, score2: 0 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'Argentina', team2: 'Yugoslavia', score1: 0, score2: 0, pen: '3-2' },
      { team1: 'Ireland', team2: 'Italy', score1: 0, score2: 1 },
      { team1: 'Czechoslovakia', team2: 'West Germany', score1: 0, score2: 1 },
      { team1: 'Cameroon', team2: 'England', score1: 2, score2: 3 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Argentina', team2: 'Italy', score1: 1, score2: 1, pen: '4-3' },
      { team1: 'West Germany', team2: 'England', score1: 1, score2: 1, pen: '4-3' },
    ] },
    { name: 'Final', matches: [
      { team1: 'West Germany', team2: 'Argentina', score1: 1, score2: 0 },
    ] },
  ] },
  { year: 1994, thirdPlace: { team1: 'Sweden', team2: 'Bulgaria', score1: 4, score2: 0 }, teams: 24, format: '6 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Germany', team2: 'Belgium', score1: 3, score2: 2 },
      { team1: 'Spain', team2: 'Switzerland', score1: 3, score2: 0 },
      { team1: 'Saudi Arabia', team2: 'Sweden', score1: 1, score2: 3 },
      { team1: 'Romania', team2: 'Argentina', score1: 3, score2: 2 },
      { team1: 'Netherlands', team2: 'Ireland', score1: 2, score2: 0 },
      { team1: 'Brazil', team2: 'USA', score1: 1, score2: 0 },
      { team1: 'Nigeria', team2: 'Italy', score1: 1, score2: 2 },
      { team1: 'Mexico', team2: 'Bulgaria', score1: 1, score2: 1, pen: '1-3' },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'Italy', team2: 'Spain', score1: 2, score2: 1 },
      { team1: 'Brazil', team2: 'Netherlands', score1: 3, score2: 2 },
      { team1: 'Bulgaria', team2: 'Germany', score1: 2, score2: 1 },
      { team1: 'Sweden', team2: 'Romania', score1: 2, score2: 2, pen: '5-4' },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Brazil', team2: 'Sweden', score1: 1, score2: 0 },
      { team1: 'Italy', team2: 'Bulgaria', score1: 2, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Brazil', team2: 'Italy', score1: 0, score2: 0, pen: '3-2' },
    ] },
  ] },
  { year: 1998, thirdPlace: { team1: 'Netherlands', team2: 'Croatia', score1: 2, score2: 1 }, teams: 32, format: '8 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Italy', team2: 'Norway', score1: 1, score2: 0 },
      { team1: 'Brazil', team2: 'Chile', score1: 4, score2: 1 },
      { team1: 'France', team2: 'Paraguay', score1: 1, score2: 0 },
      { team1: 'Nigeria', team2: 'Denmark', score1: 1, score2: 4 },
      { team1: 'Germany', team2: 'Mexico', score1: 2, score2: 1 },
      { team1: 'Netherlands', team2: 'Yugoslavia', score1: 2, score2: 1 },
      { team1: 'Romania', team2: 'Croatia', score1: 1, score2: 1, pen: '1-4' },
      { team1: 'Argentina', team2: 'England', score1: 2, score2: 2, pen: '4-3' },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'France', team2: 'Italy', score1: 0, score2: 0, pen: '4-3' },
      { team1: 'Brazil', team2: 'Denmark', score1: 3, score2: 2 },
      { team1: 'Netherlands', team2: 'Argentina', score1: 2, score2: 1 },
      { team1: 'Germany', team2: 'Croatia', score1: 0, score2: 3 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Brazil', team2: 'Netherlands', score1: 1, score2: 1, pen: '4-2' },
      { team1: 'France', team2: 'Croatia', score1: 2, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'France', team2: 'Brazil', score1: 3, score2: 0 },
    ] },
  ] },
  { year: 2002, thirdPlace: { team1: 'Turkey', team2: 'South Korea', score1: 3, score2: 2 }, teams: 32, format: '8 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Germany', team2: 'Paraguay', score1: 1, score2: 0 },
      { team1: 'Denmark', team2: 'England', score1: 0, score2: 3 },
      { team1: 'Sweden', team2: 'Senegal', score1: 1, score2: 2 },
      { team1: 'Spain', team2: 'Ireland', score1: 1, score2: 1, pen: '3-2' },
      { team1: 'Mexico', team2: 'USA', score1: 0, score2: 2 },
      { team1: 'Brazil', team2: 'Belgium', score1: 2, score2: 0 },
      { team1: 'Japan', team2: 'Turkey', score1: 0, score2: 1 },
      { team1: 'South Korea', team2: 'Italy', score1: 2, score2: 1 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'England', team2: 'Brazil', score1: 1, score2: 2 },
      { team1: 'Germany', team2: 'USA', score1: 1, score2: 0 },
      { team1: 'South Korea', team2: 'Spain', score1: 0, score2: 0, pen: '5-3' },
      { team1: 'Senegal', team2: 'Turkey', score1: 0, score2: 1 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Germany', team2: 'South Korea', score1: 1, score2: 0 },
      { team1: 'Brazil', team2: 'Turkey', score1: 1, score2: 0 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Brazil', team2: 'Germany', score1: 2, score2: 0 },
    ] },
  ] },
  { year: 2006, thirdPlace: { team1: 'Germany', team2: 'Portugal', score1: 3, score2: 1 }, teams: 32, format: '8 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Germany', team2: 'Sweden', score1: 2, score2: 0 },
      { team1: 'Argentina', team2: 'Mexico', score1: 2, score2: 1 },
      { team1: 'Italy', team2: 'Australia', score1: 1, score2: 0 },
      { team1: 'Switzerland', team2: 'Ukraine', score1: 0, score2: 0, pen: '0-3' },
      { team1: 'England', team2: 'Ecuador', score1: 1, score2: 0 },
      { team1: 'Portugal', team2: 'Netherlands', score1: 1, score2: 0 },
      { team1: 'Brazil', team2: 'Ghana', score1: 3, score2: 0 },
      { team1: 'Spain', team2: 'France', score1: 1, score2: 3 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'Germany', team2: 'Argentina', score1: 1, score2: 1, pen: '4-2' },
      { team1: 'Italy', team2: 'Ukraine', score1: 3, score2: 0 },
      { team1: 'England', team2: 'Portugal', score1: 0, score2: 0, pen: '1-3' },
      { team1: 'Brazil', team2: 'France', score1: 0, score2: 1 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Italy', team2: 'Germany', score1: 2, score2: 0 },
      { team1: 'Portugal', team2: 'France', score1: 0, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Italy', team2: 'France', score1: 1, score2: 1, pen: '5-3' },
    ] },
  ] },
  { year: 2010, thirdPlace: { team1: 'Germany', team2: 'Uruguay', score1: 3, score2: 2 }, teams: 32, format: '8 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Uruguay', team2: 'South Korea', score1: 2, score2: 1 },
      { team1: 'USA', team2: 'Ghana', score1: 1, score2: 2 },
      { team1: 'Germany', team2: 'England', score1: 4, score2: 1 },
      { team1: 'Argentina', team2: 'Mexico', score1: 3, score2: 1 },
      { team1: 'Netherlands', team2: 'Slovakia', score1: 2, score2: 1 },
      { team1: 'Brazil', team2: 'Chile', score1: 3, score2: 0 },
      { team1: 'Paraguay', team2: 'Japan', score1: 0, score2: 0, pen: '5-3' },
      { team1: 'Spain', team2: 'Portugal', score1: 1, score2: 0 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'Netherlands', team2: 'Brazil', score1: 2, score2: 1 },
      { team1: 'Uruguay', team2: 'Ghana', score1: 1, score2: 1, pen: '4-2' },
      { team1: 'Argentina', team2: 'Germany', score1: 0, score2: 4 },
      { team1: 'Paraguay', team2: 'Spain', score1: 0, score2: 1 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Netherlands', team2: 'Uruguay', score1: 3, score2: 2 },
      { team1: 'Spain', team2: 'Germany', score1: 1, score2: 0 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Spain', team2: 'Netherlands', score1: 1, score2: 0 },
    ] },
  ] },
  { year: 2014, thirdPlace: { team1: 'Netherlands', team2: 'Brazil', score1: 3, score2: 0 }, teams: 32, format: '8 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Brazil', team2: 'Chile', score1: 1, score2: 1, pen: '3-2' },
      { team1: 'Colombia', team2: 'Uruguay', score1: 2, score2: 0 },
      { team1: 'Netherlands', team2: 'Mexico', score1: 2, score2: 1 },
      { team1: 'Costa Rica', team2: 'Greece', score1: 1, score2: 1, pen: '5-3' },
      { team1: 'France', team2: 'Nigeria', score1: 2, score2: 0 },
      { team1: 'Germany', team2: 'Algeria', score1: 2, score2: 1 },
      { team1: 'Argentina', team2: 'Switzerland', score1: 1, score2: 0 },
      { team1: 'Belgium', team2: 'USA', score1: 2, score2: 1 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'France', team2: 'Germany', score1: 0, score2: 1 },
      { team1: 'Brazil', team2: 'Colombia', score1: 2, score2: 1 },
      { team1: 'Argentina', team2: 'Belgium', score1: 1, score2: 0 },
      { team1: 'Netherlands', team2: 'Costa Rica', score1: 0, score2: 0, pen: '4-3' },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Brazil', team2: 'Germany', score1: 1, score2: 7 },
      { team1: 'Argentina', team2: 'Netherlands', score1: 0, score2: 0, pen: '4-2' },
    ] },
    { name: 'Final', matches: [
      { team1: 'Germany', team2: 'Argentina', score1: 1, score2: 0 },
    ] },
  ] },
  { year: 2018, thirdPlace: { team1: 'Belgium', team2: 'England', score1: 2, score2: 0 }, teams: 32, format: '8 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'France', team2: 'Argentina', score1: 4, score2: 3 },
      { team1: 'Uruguay', team2: 'Portugal', score1: 2, score2: 1 },
      { team1: 'Spain', team2: 'Russia', score1: 1, score2: 1, pen: '3-4' },
      { team1: 'Croatia', team2: 'Denmark', score1: 1, score2: 1, pen: '3-2' },
      { team1: 'Brazil', team2: 'Mexico', score1: 2, score2: 0 },
      { team1: 'Belgium', team2: 'Japan', score1: 3, score2: 2 },
      { team1: 'Sweden', team2: 'Switzerland', score1: 1, score2: 0 },
      { team1: 'Colombia', team2: 'England', score1: 1, score2: 1, pen: '3-4' },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'France', team2: 'Uruguay', score1: 2, score2: 0 },
      { team1: 'Brazil', team2: 'Belgium', score1: 1, score2: 2 },
      { team1: 'Sweden', team2: 'England', score1: 0, score2: 2 },
      { team1: 'Russia', team2: 'Croatia', score1: 2, score2: 2, pen: '3-4' },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'France', team2: 'Belgium', score1: 1, score2: 0 },
      { team1: 'Croatia', team2: 'England', score1: 2, score2: 1 },
    ] },
    { name: 'Final', matches: [
      { team1: 'France', team2: 'Croatia', score1: 4, score2: 2 },
    ] },
  ] },
  { year: 2022, thirdPlace: { team1: 'Croatia', team2: 'Morocco', score1: 2, score2: 1 }, teams: 32, format: '8 grupos → octavos', rounds: [
    { name: 'Octavos', matches: [
      { team1: 'Netherlands', team2: 'USA', score1: 3, score2: 1 },
      { team1: 'Argentina', team2: 'Australia', score1: 2, score2: 1 },
      { team1: 'France', team2: 'Poland', score1: 3, score2: 1 },
      { team1: 'England', team2: 'Senegal', score1: 3, score2: 0 },
      { team1: 'Japan', team2: 'Croatia', score1: 1, score2: 1, pen: '1-3' },
      { team1: 'Brazil', team2: 'South Korea', score1: 4, score2: 1 },
      { team1: 'Morocco', team2: 'Spain', score1: 0, score2: 0, pen: '3-0' },
      { team1: 'Portugal', team2: 'Switzerland', score1: 6, score2: 1 },
    ] },
    { name: 'Cuartos', matches: [
      { team1: 'Croatia', team2: 'Brazil', score1: 1, score2: 1, pen: '4-2' },
      { team1: 'Netherlands', team2: 'Argentina', score1: 2, score2: 2, pen: '3-4' },
      { team1: 'Morocco', team2: 'Portugal', score1: 1, score2: 0 },
      { team1: 'England', team2: 'France', score1: 1, score2: 2 },
    ] },
    { name: 'Semifinales', matches: [
      { team1: 'Argentina', team2: 'Croatia', score1: 3, score2: 0 },
      { team1: 'France', team2: 'Morocco', score1: 2, score2: 0 },
    ] },
    { name: 'Final', matches: [
      { team1: 'Argentina', team2: 'France', score1: 3, score2: 3, pen: '4-2' },
    ] },
  ] },
]

export function getKnockout(year: number): BracketData | undefined {
  return allBrackets.find((d) => d.year === year)
}
