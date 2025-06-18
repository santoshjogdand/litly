import React from 'react'
import UserHeader from '../components/UserHeader'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

function PrivateLayout() {
  return (
    <>
      <SideBar/>
      <UserHeader />
      <main className='h-[100dvh] bg-[#ffeafc] overflow-hidden'>
        <Outlet />
      </main>
    </>
  )
}

export default PrivateLayout