import React from 'react'
import { LogIn, CirclePlus } from 'lucide-react'

function Login() {
  return (
    <div className='w-full min-h-screen flex justify-center relative items-center overflow-hidden'>
      
      <svg 
        preserveAspectRatio="xMidYMid slice" 
        className='absolute inset-0 h-full w-full object-cover opacity-40 z-0'    
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1"  
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 800 450"
      >
        <defs>
          <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="87" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse rx="159" ry="115.5" cx="194.08515531285337" cy="412.0455123198438" fill="hsl(37, 99%, 67%)"></ellipse>
          <ellipse rx="159" ry="115.5" cx="478.45510694412457" cy="388.1074124648792" fill="hsl(316, 73%, 52%)"></ellipse>
          <ellipse rx="159" ry="115.5" cx="319.1566234287351" cy="473.95700409448483" fill="hsl(185, 100%, 57%)"></ellipse>
        </g>
      </svg>
      
      <div className="flex min-h-screen flex-col z-10 backdrop-blur-md max-w-sm w-full py-10 rounded-3xl items-center justify-center px-8 gap-4">
        <div className="logo rounded-2xl shadow-lg shadow-purple-200 flex p-4 bg-white/80">
          <LogIn className='text-purple-700' />
        </div>
        
        <div className="innerHead flex flex-col items-center gap-1">
          <h1 className='font-medium text-2xl'>Login with email</h1>
          <p className='max-w-xs text-center text-sm font-normal text-gray-700'>
            Want to shorten your links? Log in and start sharing smarter.
          </p>
        </div>
        
        <div className="flex flex-col inputs gap-2 w-full">
          <input
            placeholder='Email'
            type="email"
            className='h-10 ring-2 ring-purple-500/50 rounded-lg w-full px-4 outline-none focus:ring-purple-500 transition-colors'
          />

          <input
            placeholder='Password'
            type="password"
            className='h-10 ring-2 ring-purple-500/50 rounded-lg w-full px-4 outline-none focus:ring-purple-500 transition-colors'
          />
          
          <span className='text-xs font-normal text-end text-purple-600 cursor-pointer hover:text-purple-800'>
            Forgot Password?
          </span>
          
          <button className='cursor-pointer mt-1 border border-purple-600 shadow-sm h-10 bg-purple-500 hover:bg-purple-600 text-white rounded-lg w-full px-4 outline-none transition-colors'>
            Login
          </button>
        </div>
        
        <hr className='w-full border-gray-300' />
        
        <div className="w-full flex flex-col text-gray-600">
          <h2 className='text-sm'>Don't have an account? Create a new account here!</h2>
          <button className='cursor-pointer flex justify-center items-center gap-1 mt-1 ring-2 ring-purple-500/50 text-purple-600 bg-white hover:bg-purple-50 h-10 rounded-lg w-full px-4 outline-none transition-colors'>
            <CirclePlus className='h-5 w-5' /> 
            Create new account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login