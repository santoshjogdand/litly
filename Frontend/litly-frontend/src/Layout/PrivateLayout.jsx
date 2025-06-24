import React from 'react'
import UserHeader from '../components/UserHeader'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import { useState } from 'react'


function PrivateLayout() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <SideBar status={status} setStatus={setStatus} />
      <UserHeader />
      <main className={`${status ? 'md:ml-60 ml-0' : 'md:ml-20 ml-0' }  pt-18 h-[100dvh] font-["Jost"] flex justify-center items-center overflow-auto scrollbar-hide bg-purple-100 transition-all ease-in-out duration-300`}>
        <Outlet />
      </main>
    </>
  )
}

export default PrivateLayout