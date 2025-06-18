import React from 'react'

const SideBar = () => {
  return (
    <nav id="side-nav" className='h-[100dvh] fixed w-40 top-0 left-0 bg-[#ecb4f3] flex justify-center z-20 border-r-1 border-gray-600'>
        <div className="topContent h-18 flex justify-center items-center">
            <span id='logo-1' className='font-semibold text-2xl text-black'>Litly</span>
        </div>
    </nav>
  )
}

export default SideBar