import React from 'react'
import GuestHeader from '../components/GuestHeader'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <>
      <GuestHeader />
<main className="min-h-screen w-full flex justify-center items-center font-['Jost'] overflow-hidden">
        <Outlet />
      </main>
    </>
  )
}

export default PublicLayout