import React from 'react'
import { Trophy, TrendingUp, Users, Globe } from 'lucide-react'
import { PlayerData } from '../types/Player'

interface StatsCardsProps {
  players: PlayerData[]
}

const StatsCards: React.FC<StatsCardsProps> = ({ players }) => {
  const topPlayers = players.filter(p => p.career_high <= 5).length
  const youngStars = players.filter(p => p.age < 25 && p.ranking < 100).length
  const countries = new Set(players.map(p => p.country)).size
  const totalPlayers = players.length

  const stats = [
    {
      title: 'Former Top 5',
      value: topPlayers,
      icon: Trophy,
      color: 'bg-yellow-500',
      description: 'Players who reached top 5'
    },
    {
      title: 'Rising Stars',
      value: youngStars,
      icon: TrendingUp,
      color: 'bg-green-500',
      description: 'Under 25, ranked top 100'
    },
    {
      title: 'Countries',
      value: countries,
      icon: Globe,
      color: 'bg-blue-500',
      description: 'Nations represented'
    },
    {
      title: 'Total Players',
      value: totalPlayers,
      icon: Users,
      color: 'bg-purple-500',
      description: 'Active ATP players'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="ranking-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards