import { Flame } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import CustomShortModal from '../components/CustomShortModal';

function Dashboard() {
  const [hostname, setHostname] = useState('');

  useEffect(() => {
    // Access window.location.hostname within a client-side context
    if (typeof window !== 'undefined') {
      setHostname(window.location.hostname);
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div className='text-black h-full w-full overflow-auto flex justify-center items-center font-sans'>
      <div className="container h-[25rem] w-[50rem] shadow-2xl rounded-4xl bg-white p-10 flex flex-col justify-around">
        <div className="section1 flex flex-col gap-1">
          <h1 className='text-2xl font-bold '>Create short link</h1>
          <p className=' text-sm'>Quickly create random and custom short links.</p>
        </div>
        <div className="section2">
          <h2 className=''><span className='font-medium'>Domain: </span>{hostname} </h2>
        </div>
        <div className="section3 flex flex-col gap-2">
          <label htmlFor="url" className='font-medium'>Enter your destination URL</label>
          <input type="text" placeholder='https://example.com/your-url' className='border-1 rounded-md h-10 p-4' id='url' />
          <div className="buttons flex gap-2 justify-center">
            <button className='border-1 rounded-md h-10 bg-purple-500 text-lg px-3 text-white font-medium'>Create random shortlink</button>
            <button className='flex justify-center items-center border-1 rounded-md h-10 px-3 text-lg text-white font-medium bg-purple-500'><Flame/>Create custom shortlink</button>
          </div>
        </div>
        <div className="CreatedShortLink">
            <h2 className=''><span className='font-medium'>Shortlink: </span> </h2>
        </div>
        <CustomShortModal className="hidden"/>
      </div>
    </div>
  )
}

export default Dashboard