import UserHeader from '../components/UserHeader'
import { Navigate, Outlet, replace } from 'react-router-dom'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { LoaderCircle } from 'lucide-react'

function PrivateLayout() {
  const [status, setStatus] = useState(false);
  const { loading, isLoggedIn, user } = useAuth();
  if (loading) {
    return (
      <div className='flex h-screen w-screen justify-center items-center'>
        <LoaderCircle className='text-black animate-spin' />
      </div>
    )
  }
  if(!isLoggedIn){
    console.log(isLoggedIn);
    return <Navigate to="/login" replace/>
  }

  return (
    <>
      <SideBar status={status} setStatus={setStatus} />
      <UserHeader username={user?.username} />
      <main className={`${status ? 'lg:ml-60 ml-0' : 'lg:ml-20 ml-0'} lg:pt-18 h-full flex-col pt-16 font-["Jost"] flex justify-center items-center transition-all ease-in-out duration-300`}>
        <Outlet />
      </main>
    </>
  );
}

export default PrivateLayout