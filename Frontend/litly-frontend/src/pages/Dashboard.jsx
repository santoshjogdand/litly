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
    <div className='text-black h-full w-[70%] flex justify-center items-center'>
      <div className="container md:h-[30rem] h-[100dvh] w-full md:rounded-lg bg-white p-8 flex flex-col justify-center md:mx-8 gap-5">
        <div className="section1 flex flex-col ">
          <h1 className='md:text-4xl text-4xl font-semibold'>Create short link</h1>
          <p className=' text-sm font-medium text-gray-700 pl-1'>Quickly create random and custom short links.</p>
        </div>
        <div className="section3 flex flex-col gap-2">
          <div className="CreatedShortLink border w-fit bg-purple-400 text-white px-2 inset-shadow-sm inset-ring-1 inset-ring-purple-700 inset-shadow-purple-600 rounded-full">
            <h2 className=''><span className='font-medium text-sm'>Shortlink </span> </h2>
        </div>
        <div className="container flex w-full gap-5">
        <div className="inputs flex flex-col w-full">
          <label htmlFor="url" className='text-gray-700 text-sm font-medium '>Enter your destination URL*</label>
          <input type="text" placeholder='https://example.com/your-url' className=' text-sm font-medium border-1 rounded-lg h-10 p-4' id='url' />
        </div>
        <div className="inputs flex flex-col w-full">
          <label htmlFor="title" className='text-gray-700 text-sm font-medium '>Enter title for url*</label>
          <input type="text" placeholder='Url title' className=' text-sm font-medium border-1 rounded-lg h-10 p-4' id='title' />
        </div>
        </div>
        <div className="section2 flex md:flex-row flex-col gap-2 items-center w-full text-sm font-medium  text-gray-700">
          <div className="Domain flex flex-col gap-2 md:w-auto w-full">
            <h2>Domain</h2>
            <div className="Domain h-10 w-auto bg-gray-200 border-1 rounded-md flex items-center p-4">
              {hostname}
              <span>/</span>
            </div>
          </div>
          <div className="customLink flex flex-col gap-2 w-full">
            <h2>Custom link (optional)</h2>
            <input type="text" placeholder='your custom backhalf' className='border-1 rounded-lg h-10 p-4 w-full' id='url' />
          </div>
          
        </div>
        
        <div className="buttons flex flex-col md:flex-row gap-2 justify-center">
            <DashboardButton buttonTXT={`Create Random Shortlink`} className={`flex border-black justify-center items-center border-1 rounded-lg h-10 px-3 text-white text-sm font-medium bg-purple-500 hover:drop-shadow-purple-500 hover:drop-shadow-md active:drop-shadow-md active:drop-shadow-purple-500 active:bg-purple-600 cursor-pointer`}/>
            <DashboardButton buttonTXT={`Create Custom Shortlink`} className={`flex border-purple-500 justify-center items-center border-1 rounded-lg h-10 px-3 text-black text-sm font-medium bg-white hover:drop-shadow-purple-500 hover:drop-shadow-md active:drop-shadow-md active:drop-shadow-purple-500 cursor-pointer`}/>
          </div>
        </div>
        <CustomShortModal className="hidden"/>
      </div>
    </div>
  )
}

export default Dashboard