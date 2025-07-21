import React, { useState, useEffect } from 'react'
import { Trophy, TrendingUp, Users, Globe } from 'lucide-react'
import { PlayerData } from './types/Player'
import { mockAtpData } from './data/mockData'
import RankingsTable from './components/RankingsTable'
import StatsCards from './components/StatsCards'
import FilterControls from './components/FilterControls'
import Header from './components/Header'

function App() {
  const [players, setPlayers] = useState<PlayerData[]>([])
  const [filteredPlayers, setFilteredPlayers] = useState<PlayerData[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    country: '',
    maxAge: 40,
    maxRanking: 100
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPlayers(mockAtpData)
      setFilteredPlayers(mockAtpData.slice(0, 50))
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = players.filter(player => {
      const matchesCountry = !filters.country || player.country === filters.country
      const matchesAge = player.age <= filters.maxAge
      const matchesRanking = player.ranking <= filters.maxRanking
      
      return matchesCountry && matchesAge && matchesRanking
    })
    
    setFilteredPlayers(filtered.slice(0, 50))
  }, [players, filters])

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-tennis-green to-tennis-court flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading ATP Rankings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <StatsCards players={players} />
        
        <div className="mb-8">
          <FilterControls 
            filters={filters} 
            onFilterChange={handleFilterChange}
            players={players}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-tennis-green" />
              ATP Live Rankings
              <span className="ml-2 text-sm text-gray-500">
                ({filteredPlayers.length} players)
              </span>
            </h2>
          </div>
          
          <RankingsTable players={filteredPlayers} />
        </div>
      </main>
    </div>
  )
}

export default App