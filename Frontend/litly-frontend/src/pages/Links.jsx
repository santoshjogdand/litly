import React from 'react'
import LinkComponent from '../components/LinkComponent'

function Links() {
  return (
        <div className='text-black h-full w-full p-10 font-medium'>
          <div className="headings">
            <h1 className='text-4xl font-semibold ' >Manage Links</h1>
            <p className='text-gray-700 ml-[2px]'>Manage all shortlinks here!</p>
          </div>
          <div className="options flex md:justify-start justify-center gap-4 my-4 md:w-[40%] font-medium text-sm ">
            <input type="date" placeholder='Filter by date' className='bg-white  border-1 rounded-lg h-10 md:p-4 px-2 w-full outline-none' id='dateFilter' />
            <div className='border-1 rounded-lg h-10 md:p-4 px-2 w-full flex bg-white items-center justify-center' id='filter' >
             Add filters
            </div>
            <div className='rounded-lg h-10 w-full flex items-center justify-center text-purple-600' id='filter' >
             Clear all
            </div>
          </div>
          <hr className='opacity-50' />
          <LinkComponent />
        </div>
  )
}

export default Links