import React from 'react'
import { TrendingUp, TrendingDown, Minus, Award } from 'lucide-react'
import { PlayerData } from '../types/Player'

interface RankingsTableProps {
  players: PlayerData[]
}

const RankingsTable: React.FC<RankingsTableProps> = ({ players }) => {
  const getRankingBadgeColor = (ranking: number) => {
    if (ranking === 1) return 'bg-yellow-500'
    if (ranking <= 5) return 'bg-orange-500'
    if (ranking <= 10) return 'bg-red-500'
    if (ranking <= 20) return 'bg-purple-500'
    if (ranking <= 50) return 'bg-blue-500'
    return 'bg-gray-500'
  }

  const getRankChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-600" />
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-600" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  const getCountryFlag = (country: string) => {
    // In a real app, you'd use actual flag images or a flag icon library
    return (
      <span className="country-flag flex items-center justify-center text-xs font-bold text-gray-600">
        {country}
      </span>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Player
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Points
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Change
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Career High
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Current Tournament
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {players.map((player, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className={`ranking-badge ${getRankingBadgeColor(player.ranking)}`}>
                    {player.ranking}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getCountryFlag(player.country)}
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {player.name}
                    </div>
                    <div className="text-sm text-gray-500">{player.country}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {player.age}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {player.points.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-1">
                  {getRankChangeIcon(player.rank_change)}
                  <span className={`text-sm ${
                    player.rank_change > 0 ? 'text-green-600' : 
                    player.rank_change < 0 ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {player.rank_change !== 0 ? Math.abs(player.rank_change) : '-'}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-1">
                  {player.career_high <= 5 && (
                    <Award className="w-4 h-4 text-yellow-500" />
                  )}
                  <span className="text-sm text-gray-900">
                    {player.career_high}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {player.curr_tournament || 'Not playing'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RankingsTable