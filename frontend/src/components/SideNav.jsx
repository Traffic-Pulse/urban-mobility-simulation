import React from 'react'
import SearchBar from './SearchBar';

const SideNav = ({ onDownloadClick }) => {
  return (
    <aside class="hidden pt-20 w-64 text-white bg-gray-100 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block">
      <div class="p-2 min-h-full">
        <div class=" pb-6 flex sm:flex-col">
          <SearchBar />
          
          <div className='mt-3'>
            <button type='button' onClick={onDownloadClick} className='w-full rounded-lg px-3 py-2 bg-[#14838a] text-blue-100 hover:bg-blue-600 duration-300'>Generate Simulation</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideNav
