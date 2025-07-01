import { House, Link, ChartNoAxesCombined, ChevronLeft } from 'lucide-react'
import SideBarMenu from './SideBarMenu.jsx'
import {memo} from 'react'



const SideBar = ({ status, setStatus }) => {
    const elements = [
        {
            name: "Home",
            icon: House,
            Link: "/Dashboard"
        },
        {
            name: "Links",
            icon: Link,
            Link: "/dashboard/links"
        },
        {
            name: "Analytics",
            icon: ChartNoAxesCombined,
            Link: "/Dashboard/Analytics"
        }
    ]

    const modifyStatus = () => {
        let newStatus = status ? false : true
        setStatus(newStatus)
    }

    return (
        <nav id="side-nav" className={`h-full bg-white fixed flex z-40 flex-col transition-all duration-300 ease-in-out ${status ? 'w-60' : 'lg:w-20 lg:left-0 left-[-20rem]'}`} >
            <div className={`h-full shadow-lg bg-white lg:mt-20  mt-18 flex flex-col transition-all duration-300 ease-in-out ${status ? 'w-full' : 'lg:w-20 lg:left-0 left-[-20rem]'}`}>
                <span className={`lg:w-8 w-16 z-40 lg:h-[26px] bg-white rounded-r-2xl fixed ml-auto border border-l-0 border-purple-500 transition-all ease-in-out duration-200 ${status?'left-60':'lg:left-20 left-0'}`}><ChevronLeft className={` lg:w-6 lg:h-6 w-8 h-8 lg:ml-2 ml-8 rounded-full text-purple-500 transition-transform duration-300 ease-in-out ${status ? 'rotate-0' : 'rotate-180'}`} onClick={modifyStatus} /></span>
                <SideBarMenu elementArray={elements} status={status} />
            </div>
        </nav>
    )
}

export default memo(SideBar)