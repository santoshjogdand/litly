import { House, Link, ChartNoAxesCombined, ChevronLeft } from 'lucide-react'
import SideBarMenu from './SideBarMenu.jsx'



const SideBar = ({ status, setStatus }) => {
    const elements = [
        {
            name: "Home",
            icon: House
        },
        {
            name: "Links",
            icon: Link
        },
        {
            name: "Analytics",
            icon: ChartNoAxesCombined
        }
    ]

    const modifyStatus = () => {
        let newStatus = status ? false : true
        setStatus(newStatus)
    }

    return (
        <nav id="side-nav" className={`h-[100dvh] bg-white fixed flex flex-col transition-all duration-300 ease-in-out ${status ? 'w-60' : 'md:w-20 md:left-0 left-[-20rem]'}`} >

            <div className={`h-full shadow-lg bg-white md:mt-20  mt-18 flex flex-col transition-all duration-300 ease-in-out ${status ? 'w-full' : 'md:w-20 md:left-0 left-[-20rem]'}`}>

                <span className={`md:w-8 w-16 z-10 md:h-[26px] bg-white rounded-r-2xl fixed ml-auto border border-l-0 border-purple-500 transition-all ease-in-out duration-200 ${status?'left-60':'md:left-20 left-0'}`}><ChevronLeft className={` md:w-6 md:h-6 w-8 h-8 md:ml-2 ml-8 rounded-full text-purple-500 transition-transform duration-300 ease-in-out ${status ? 'rotate-0' : 'rotate-180'}`} onClick={modifyStatus} /></span>
                <SideBarMenu elementArray={elements} status={status} />
            </div>
        </nav>
    )
}

export default SideBar