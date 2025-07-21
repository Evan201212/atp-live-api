import React from 'react'
import { Filter } from 'lucide-react'
import { PlayerData, FilterOptions } from '../types/Player'

interface FilterControlsProps {
  filters: FilterOptions
  onFilterChange: (filters: FilterOptions) => void
  players: PlayerData[]
}

const FilterControls: React.FC<FilterControlsProps> = ({ 
  filters, 
  onFilterChange, 
  players 
}) => {
  const countries = Array.from(new Set(players.map(p => p.country))).sort()

  const handleFilterChange = (key: keyof FilterOptions, value: string | number) => {
    onFilterChange({
      ...filters,
      [key]: value
    })
  }

  return (
    <div className="ranking-card p-6">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 mr-2 text-tennis-green" />
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <select
            value={filters.country}
            onChange={(e) => handleFilterChange('country', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tennis-green focus:border-transparent"
          >
            <option value="">All Countries</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Age: {filters.maxAge}
          </label>
          <input
            type="range"
            min="18"
            max="45"
            value={filters.maxAge}
            onChange={(e) => handleFilterChange('maxAge', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Ranking: {filters.maxRanking}
          </label>
          <input
            type="range"
            min="1"
            max="800"
            value={filters.maxRanking}
            onChange={(e) => handleFilterChange('maxRanking', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  )
}

export default FilterControls