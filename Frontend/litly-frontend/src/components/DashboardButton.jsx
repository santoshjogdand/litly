
const DashboardButton = ({Icon, buttonTXT, className, func}) => {
  return (
    <button className={className} onClick={()=>{func()}}>
        {Icon?<Icon />:'' } {buttonTXT}
    </button>
  )
}

export default DashboardButton