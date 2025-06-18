import React from 'react'
import GuestHeader from '../components/GuestHeader'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <>
      <GuestHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default PublicLayout