import React from 'react'

const DashboardButton = ({Icon, buttonTXT}) => {
  return (
    <button className='flex justify-center items-center border-1 rounded-md h-10 px-3 text-lg text-white font-medium bg-purple-500 hover:bg-purple-600 cursor-pointer'>
        {Icon?<Icon />:'' } {buttonTXT}
    </button>
  )
}

export default DashboardButton