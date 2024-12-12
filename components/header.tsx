import React from 'react'

const Header = () => {
  return (
    <header className='w-full  py-2 lg:py-4 border-b-[1px]'>
      <div className='p-2 max-w-screen-2xl mx-auto flex items-center'>
        <div className='flex items-center w-full justify-between'>
          <div>Search</div>
          <div>Theme</div>
        </div>
      </div>
    </header>
  )
}

export default Header