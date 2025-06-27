import React from 'react'

const BlurredBg1 = React.memo(() => (
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
))

export default BlurredBg1