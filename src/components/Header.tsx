import React from 'react'
import { Trophy, Globe } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-tennis-green to-tennis-court text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ATP Live Rankings</h1>
              <p className="text-tennis-net/90">Real-time professional tennis rankings</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-tennis-net/90">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Live Data</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header