import React from 'react'

const DashboardButton = ({Icon, buttonTXT, className}) => {
  return (
    <button className={className}>
        {Icon?<Icon />:'' } {buttonTXT}
    </button>
  )
}

export default DashboardButton