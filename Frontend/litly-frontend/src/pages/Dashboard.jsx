import { Flame } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import CustomShortModal from '../components/CustomShortModal';
import DashboardButton from '../components/DashboardButton';

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
      <div className="container h-[30rem] rounded-xl bg-white p-8 flex flex-col justify-around mx-8">
        <div className="section1 flex flex-col gap-1">
          <h1 className='text-2xl font-semibold '>Create short link</h1>
          <p className=' text-sm font-medium text-gray-700'>Quickly create random and custom short links.</p>
        </div>
        <div className="section2">
          <h2 className=' text-gray-700'><span className='font-medium text-black'>Domain: </span>{hostname} </h2>
        </div>
        <div className="section3 flex flex-col gap-2">
          <label htmlFor="url" className='font-medium  text-gray-700'>Enter your destination URL</label>
          <input type="text" placeholder='https://example.com/your-url' className='border-1 rounded-md h-10 p-4' id='url' />
          <div className="buttons flex flex-col md:flex-row gap-2 justify-center">
            <DashboardButton buttonTXT={"Create random shortlink"} />
            <DashboardButton buttonTXT={"Create custom shortlink"} Icon={Flame} />
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