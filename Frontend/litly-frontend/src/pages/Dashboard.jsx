import { useState, useEffect } from 'react'
import CustomShortModal from '../components/CustomShortModal';
import DashboardButton from '../components/DashboardButton';

function Dashboard() {
  const [hostname, setHostname] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHostname(window.location.hostname);
    }
  }, []);
  return (
    <>
      <svg preserveAspectRatio="xMidYMid slice" className='absolute inset-0 h-full w-full object-cover opacity-40 z-0' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="0.64"><defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="107" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="119" ry="123.5" cx="240.62248086929327" cy="600.6619189869274" fill="hsl(37, 99%, 67%)"></ellipse><ellipse rx="119" ry="123.5" cx="507.9660046100614" cy="551.430716384541" fill="hsl(316, 73%, 52%)"></ellipse><ellipse rx="119" ry="123.5" cx="363.59150023893875" cy="710.694238359278" fill="hsl(185, 100%, 57%)"></ellipse></g></svg>
      <div className="container z-10 md:h-[30rem] h-full w-full md:rounded-lg backdrop-blur-4xl p-8 lg:pt-8 md:pt-25 pt-12 flex flex-col justify-center gap-6">
        <div className="section1 flex flex-col ">
          <h1 className='md:text-4xl text-4xl font-semibold'>Create short links</h1>
          <p className=' text-sm font-medium text-gray-700 pl-1'>Quickly create random and custom short links.</p>
        </div>
        <div className="section3 flex flex-col gap-4">
          <div className="CreatedShortLink border w-fit bg-purple-400 text-white px-2 inset-shadow-sm inset-ring-1 inset-ring-purple-700 inset-shadow-purple-600 rounded-full">
            <h2 className=''><span className='font-medium text-sm'>Shortlink</span> </h2>
          </div>
          <div className="container flex w-full gap-5 md:flex-row flex-col">
            <div className="inputs flex flex-col w-full gap-1">
              <label htmlFor="url" className='text-gray-700 text-sm font-medium '>Enter your destination URL*</label>
              <input type="text" placeholder='https://example.com/your-url' className='ring-2  text-sm font-medium ring-purple-500/50 rounded-lg h-10 focus:ring-purple-500  outline-none  p-4 transition-colors duration-300
' id='url' />
            </div>
            <div className="inputs flex flex-col w-full gap-1">
              <label htmlFor="title" className='text-gray-700 text-sm font-medium '>Title*</label>
              <input type="text" placeholder='Url title' className='ring-2  text-sm font-medium ring-purple-500/50 rounded-lg h-10 focus:ring-purple-500  outline-none  p-4 transition-colors duration-300
' id='title' />
            </div>
          </div>
          <div className="section2 flex md:flex-row flex-col gap-2 items-center w-full text-sm font-medium  text-gray-700">
            <div className="Domain flex flex-col gap-1 md:w-auto w-full">
              <h2>Domain</h2>
              <div className="ring-2 flex items-center text-sm font-medium ring-purple-500/50 rounded-lg h-10 focus:ring-purple-500  outline-none  p-4 transition-colors duration-300
">
                {hostname}
                <span>/</span>
              </div>
            </div>
            <div className="customLink flex flex-col gap-1 w-full">
              <h2>Custom link (optional)</h2>
              <input type="text" placeholder='your custom backhalf' className='ring-2  text-sm font-medium ring-purple-500/50 rounded-lg h-10 focus:ring-purple-500  outline-none  p-4 transition-colors duration-300
' id="customLink" />
            </div>

          </div>
          <div className="buttons flex flex-col md:flex-row gap-2 justify-center">
            <DashboardButton buttonTXT={`Create Random Shortlink`} className={`text-sm cursor-pointer inset-shadow-sm inset-shadow-purple-600 text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-300 px-3 rounded-lg h-10`} />
            <DashboardButton buttonTXT={`Create Custom Shortlink`} className={`text-sm cursor-pointer inset-shadow-sm inset-shadow-purple-600 text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-300 px-3 rounded-lg h-10`} />
          </div>
        </div>
        <CustomShortModal className="hidden" />
      </div>
    </>
  )
}

export default Dashboard