import { useState } from 'react'
import logo from './assets/images/logo.svg'
import arrowDown from './assets/images/icon-arrow-down.svg'
import moon from './assets/images/icon-moon.svg'
function App() {

  return (
    <nav className="container mx-auto  box-border">
      <div className='grid grid-cols-2 mt-10'>
        <div className='w-full'>
          <div className="flex w-1/2 mx-auto">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className=' mx-auto  w-full flex justify-end '>
          <div className=' flex flex-row mt-3  justify-center w-full'>
            <div> <p>Serif</p></div>
            <div className="mt-2 ml-3"><img src={arrowDown} alt="" /></div>
            <div className='mx-8'>
              <label className="relative inline-flex items-center mb-2 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" disabled />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div><img src={moon} alt="" /></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default App
