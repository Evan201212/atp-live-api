export interface PlayerData {
  ranking: number
  career_high: number
  name: string
  age: number
  country: string
  points: number
  rank_change: number
  points_change: number
  curr_tournament: string
  prev_tournament: string
  next_points: number
  if_win_points: number
}

export interface FilterOptions {
  country: string
  maxAge: number
  maxRanking: number
}