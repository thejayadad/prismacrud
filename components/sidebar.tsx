import React from 'react'
import SideLinks from './side-links'

const Sidebar: React.FC = () => {
    return (
      <div className="h-full flex flex-col py-4">
        <div className="mb-6">
          <div className="flex items-center gap-3 px-4">
            <div className="w-8 h-8 bg-gray-500 rounded-full" />
            <span className="hidden lg:block text-lg font-bold text-gray-800">Logo</span>
          </div>
        </div>
        <SideLinks />
      </div>
  )
}

export default Sidebar