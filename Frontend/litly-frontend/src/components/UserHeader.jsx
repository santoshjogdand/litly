import { HandHeart, User2Icon } from 'lucide-react';

function UserHeader() {
  return (
    <header className='w-full fixed z-10 h-18 border-b-1 border-[#dbe0eb] bg-white shadow-[0_4px_6px_-4px_rgba(0,0,0,0.3)]' >
      <nav className='h-18 fixed flex items-center gap-10 justify-end px-10 left-40 right-0 w-auto py-9'>
        <input className=' w-80 h-full p-5 bg-purple-500 text-white outline-none rounded-3xl hover:shadow-purple-500 shadow' placeholder='Search'/>
        <div className='flex gap-4 items-center justify-centerp-0 m-0 '>
          <button className='h-[40px] w-[8rem] text-center bg-purple-500 outline-none rounded-md border-1 border-black font-medium  shadow-[0px_3px_0px_0px_rgba(0,0,0)] flex items-center justify-center gap-1 px-2 text-white hover:bg-purple-600 cursor-pointer'><HandHeart className='stroke-[1.5px]' />Donate</button>
          <div className="userprofile flex items-center gap-3">
            <span className="w-[40px] h-[40px] rounded-full border-1 border-black text-center flex items-center justify-center text-xl">
              <User2Icon className='stroke-[1.5px]' />
            </span>
            <p className=''>Username</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default UserHeader