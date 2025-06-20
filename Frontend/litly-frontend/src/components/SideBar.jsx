    import { House, Link, ChartNoAxesCombined, CircleChevronLeft } from 'lucide-react'
    import SideBarMenu from './SideBarMenu.jsx'



    const SideBar = ({status,setStatus}) => {
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
            <nav id="side-nav" className={`h-[100dvh] fixed top-0 left-0 flex flex-col justify-center z-20 transition-all duration-300 ease-in-out ${status ? 'w-60' : 'w-20'}`} >
                <div className="topContent flex justify-center h-21 items-center transition-all duration-300 ease-in-out ">
                    <span id="logo-1" className="text-transparent bg-clip-text py-1 rounded font-bold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-fit inline-block">
                        Litly
                    </span>
                </div>
                <div className={`h-full mt-1 shadow-lg bg-white py-10 flex flex-col gap-6 transition-all duration-300 ease-in-out ${status ? 'w-full' : 'w-20'}`}>

                    <span className='w-4 h-4 relative -mt-14 ml-auto mr-[-5px] transition-all ease-in-out duration-300'><CircleChevronLeft className={`bg-[#a455cf] rounded-full text-white transition-transform duration-300 ease-in-out ${status ? 'rotate-0' : 'rotate-180'}`} onClick={modifyStatus} /></span>
                        <SideBarMenu elementArray={elements} status={status} />
                    <span className='bg-[#dbe0eb] w-auto h-[1px] mx-10'></span>
                </div>
            </nav>
        )
    }

    export default SideBar