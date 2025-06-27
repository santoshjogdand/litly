import { Menu } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

function GuestHeader() {
  const [isActive, setActive] = useState(true)
  return (
    <header className='w-full z-40 h-14 absolute top-0 flex justify-between items-center bg-white'>
      <nav className='w-full h-full flex justify-between items-center md:mx-20 z-10 bg-white'>
        <div className="navmenu z-20 bg-white w-full h-full flex justify-between items-center">
          <a href="/"><span id="logo-1" className="text-transparent md:px-0 px-10 bg-clip-text md:py-1 rounded font-bold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:w-fit block">
            Litly
          </span></a>
          <span className='md:px-0 md:hidden px-10' onClick={() => setActive(!isActive)}><Menu/></span>

        </div>
        <div className={`transition-all z-10 md:h-0 h-[90dvh] w-full duration-300 menu flex md:flex-row flex-col md:w-auto md:static absolute md:top-0 top-14 md:translate-0 ${isActive ? `translate-y-[-60rem]` : ``} justify-start items-center text-purple-700 text-sm font-semibold`}>
          <ul className='flex md:flex-row flex-col gap-4 justify-center items-center bg-white w-full md:py-0 py-10'>
            <a href="./about"><li className='cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-md px-4 py-2'>About</li></a>
            <li className='cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-md px-4 py-2'>Help</li>
            <li className='cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-md px-4 py-2'>FAQs</li>
            <a href="./login"><li className='cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-md px-4 py-2'>Login</li></a>
            <li className='cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-md px-4 py-2 whitespace-nowrap'>Sign up</li>
          </ul>
          <div className="h-full backdrop-blur-lg w-full" onClick={() => setActive(!isActive)}></div>
        </div>
      </nav>
    </header>
  )
}

export default GuestHeader