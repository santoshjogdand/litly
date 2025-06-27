import { HandHeart, Search, User2Icon, Menu } from 'lucide-react';
import { useState } from 'react';

function UserHeader() {
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
      <nav className='md:h-full md:top-0 flex z-20 flex-col md:flex-row md:justify-between items-center md:px-10 md:w-auto md:py-8 bg-[white] md:bg-transparent md:shadow-none'>
        <div className="flex flex-row items-center px-5 justify-between w-full md:bg-transparent bg-white h-16 z-20 static topContent transition-all duration-300 ease-in-out ">
          <a href="/"><span id="logo-1" className="text-transparent bg-clip-text md:py-1 rounded font-bold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:w-fit block">
            Litly
          </span></a>
          <Menu onClick={openMenu} className=' md:opacity-0 z-10' />
        </div>
        <div className={`navMenu z-10 md:h-16 md:relative fixed md:top-0 flex flex-col md:flex-row items-center gap-10 bg-white md:bg-transparent md:w-auto w-full md:pb-0 pb-10 transition-all duration-300 ease-in-out md:shadow-none shadow-lg ${menuStatus?'top-14':'top-[-10rem]'}`}>
          <div className="text-white md:w-80 w-70 border border-black md:h-11 h-12 md:mt-0 mt-8 flex items-center justify-around px-4 gap-2 searchBar bg-purple-500 hover:shadow-purple-500 shadow rounded-3xl">
            <input className='outline-none w-full' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' /> <Search onClick={searchLink} />
          </div>
          <div className='flex gap-4 items-center justify-center p-0 m-0 '>
            <button className='h-[40px] w-[8rem] text-center md:bg-purple-500 bg-purple-400 outline-none rounded-md border-1 border-black font-medium  flex items-center justify-center gap-1 px-2 text-white hover:bg-purple-600 active:bg-purple-500 transition-colors duration-100 cursor-pointer'><HandHeart className='stroke-[1.5px]' />Donate</button>
            <div className="userprofile flex items-center gap-3">
              <span className="w-[40px] h-[40px] rounded-full border-1 border-black text-center flex items-center justify-center text-xl">
                <User2Icon className='stroke-[1.5px]' />
              </span>
              <p className='font-medium text-gray-700'>Username</p>
            </div>
          </div>
        </div>
        
      </nav>
      {menuStatus && (
        <div 
          className="fixed inset-0 bg-black/30 z-0 md:hidden"
          onClick={() => setMenuStatus(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default UserHeader