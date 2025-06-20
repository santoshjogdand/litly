import { Flame } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

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

    </div>
  )
}

export default Dashboard