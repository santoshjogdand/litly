import React from 'react'
import GuestHeader from '../components/GuestHeader'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function PublicLayout() {
  const {isLoggedIn } = useAuth()
  if(isLoggedIn){
    return <Navigate to='/dashboard' replace/>
  }

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