import React from 'react'
import LinkComponent from '../components/LinkComponent'

function Links() {
  return (
        <div className='text-black h-full w-full p-10 font-medium'>
          <div className="headings">
            <h1 className='text-4xl font-semibold ' >Manage Links</h1>
            <p className='text-gray-700 ml-[2px]'>Manage all shortlinks here!</p>
          </div>
          <div className="options flex opacity-90 md:justify-start gap-4 my-4 md:w-[40%] w-full font-medium text-sm h-8 ">
            <input type="date" placeholder='Filter by date' className='bg-white  border border-gray-200 rounded-lg md:p-4 px-1 outline-none' id='dateFilter' />
            <div className='rounded-lg md:p-4 px-2 flex bg-white border border-gray-200 max-w-30 items-center justify-center' id='filter' >
             Add filters
            </div>
            <div className='rounded-lg max-w-30 md:flex hidden items-center justify-center text-purple-600' id='filter' >
             Clear all
            </div>
          </div>
          <hr className='opacity-20' />
          <LinkComponent />
        </div>
  )
}

export default Links