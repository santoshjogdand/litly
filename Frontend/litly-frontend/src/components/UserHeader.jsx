import React from 'react'
import { CircleUser, HandHeart, User2Icon, UserCheck2Icon, UserCircle, UserX2Icon } from 'lucide-react';

function UserHeader() {
  return (
    <header className='w-full fixed z-10 bg-[#ecb4f3] h-18' >
      <nav className='h-18 fixed flex items-center justify-between px-10 left-40 right-0 w-auto'>
        <input className='w-80 h-[35px] p-4 bg-white rounded-3xl' placeholder='Search'/>
        <div className='flex gap-4 items-center justify-center'>
          <button className='h-[40px] bg-[#a455cf] rounded-md border-1 border-black font-medium  shadow-[0px_3px_0px_0px_rgba(0,0,0)] flex items-center gap-1 px-2 text-white'><HandHeart className='stroke-[1.5px]' />Donate</button>
          <div className="userprofile flex items-center gap-3">
            <span className="w-[40px] h-[40px] rounded-full bg-white text-center flex items-center justify-center text-xl">
              <User2Icon className='stroke-[1.5px]' />
            </span>
            <p className=''>Username</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default UserHeader