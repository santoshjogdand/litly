import { HandHeart, Search, User2Icon, Menu } from 'lucide-react';
import { useState, memo } from 'react';
import {Link } from 'react-router-dom'
function UserHeader({username}) {
  const [menuStatus, setMenuStatus] = useState(false)
  const [value, setValue] = useState('');
  const openMenu = () => {
    setMenuStatus(!menuStatus)
  }
  const searchLink = () => {
    console.log(value)
    alert(`Search query: ${value}`);
  }
  return (
    <header className='w-full fixed z-50 h-16 bg-white shadow-md' >
      <nav className='lg:h-full lg:top-0 flex z-20 flex-col lg:flex-row lg:justify-between items-center lg:px-10 lg:w-auto lg:py-8 bg-[white] lg:bg-transparent lg:shadow-none'>
        <div className="flex flex-row items-center px-5 justify-between w-full lg:bg-transparent bg-white h-16 z-20 static topContent transition-all duration-300 ease-in-out ">
          <Link to="/"><span id="logo-1" className="text-transparent bg-clip-text lg:py-1 rounded font-bold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lg:w-fit block">
            Litly
          </span></Link>
          <Menu onClick={openMenu} className=' lg:opacity-0 z-10' />
        </div>
        <div className={`navMenu z-10 lg:h-16 lg:relative fixed lg:top-0 flex flex-col lg:flex-row items-center gap-10 bg-white lg:bg-transparent lg:w-auto w-full lg:pb-0 pb-10 transition-all duration-300 ease-in-out lg:shadow-none shadow-lg ${menuStatus?'top-14':'top-[-10rem]'}`}>
          <div className="text-white lg:w-80 w-70 border border-black lg:h-11 h-12 lg:mt-0 mt-8 flex items-center justify-around px-4 gap-2 searchBar bg-purple-500 hover:shadow-purple-500 shadow rounded-3xl">
            <input className='outline-none w-full' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' /> <Search onClick={searchLink} />
          </div>
          <div className='flex gap-4 items-center justify-center p-0 m-0 '>
            <button className='h-[40px] w-[8rem] text-center lg:bg-purple-500 bg-purple-400 outline-none rounded-md border-1 border-black font-medium  flex items-center justify-center gap-1 px-2 text-white hover:bg-purple-600 active:bg-purple-500 transition-colors duration-100 cursor-pointer'><HandHeart className='stroke-[1.5px]' />Donate</button>
            <div className="userprofile flex items-center gap-3">
              <span className="w-[40px] h-[40px] rounded-full border-1 border-black text-center flex items-center justify-center text-xl">
                <User2Icon className='stroke-[1.5px]' />
              </span>
              <p className='font-medium text-gray-700'>{username}</p>
            </div>
          </div>
        </div>
        
      </nav>
      {menuStatus && (
        <div 
          className="fixed inset-0 bg-black/30 z-0 lg:hidden"
          onClick={() => setMenuStatus(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default memo(UserHeader)