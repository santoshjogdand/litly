import React from 'react'
import { useState } from 'react'

function LinkComponent(props) {
  const [checked, setChecked] = useState([])
  const handleChange = (e) => {
    const value = e.target.value
    console.log(value)
    if (e.target.checked) {
      console.log(value)
      setChecked((prev) => [...prev, value])
    } else {
      setChecked((prev) => prev.filter((item) => item !== value));
    }
    console.log(checked)

  }
  return (
    <div className={`my-5 bg-white w-full flex flex-col rounded-xl font-medium p-8 gap-4 ring-2 ring-purple-500/50 hover:ring-purple-500`}>
      <div className="flex flex-col lg:flex-row lg:gap-5 gap-5">
        <div className="container flex lg:gap-5 gap-2">
        <input type="checkbox"
          value={'https://litly.app/dsjfnkjdsn'}
          className='w-4 h-4 text-gray-600'
          onChange={(e) => handleChange(e)}
        />
        <div className="logo lg:block hidden bg-yellow-200 w-10 h-10 rounded-full"></div>
        <div className="links flex lg:flex-row flex-col gap-4 w-full">
          <div className="innerHead w-full flex flex-col justify-between lg:gap-0 gap-2">
            <h2 className='lg:text-3xl text-2xl'>Link title</h2>
            <div className="shortenLink flex flex-col">
              <a href='https://litly.app/dsjfnkjdsn' className='text-purple-600 font-medium w-fit'>litly.app/dsjfnkjdsn</a>
              <a href='https://www.google.com' className='text-gray-600 font-normal w-fit wrap-break-word mr-4'>https://www.google.com/</a>
            </div>
            <div className='flex md:flex-row flex-col lg:gap-5 gap-2 font-medium lg:text-lg text-sm text-gray-700 mt-2'>
              <span>0 engagments</span>
              <span>More analytics</span>
              <span>20 Jun,2025</span>
            </div>
          </div>
        </div>
        </div>
        <div className="innerOptions flex justify-center items-center lg:gap-5 gap-2 lg:h-10 text-sm">
            <button className='lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer'>Copy</button>
            <button className='lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer'>Share</button>
            <button className='lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer'>Edit</button>
            <button className='lg:px-3 px-2 py-1 border border-gray-300 rounded-lg cursor-pointer'>Delete</button>
          </div>
        
      </div>
    </div>
  )
}

export default LinkComponent