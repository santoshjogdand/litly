import React from 'react'
import { useState } from 'react'

function LinkComponent() {
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

    <div className={`my-5 bg-white w-full flex flex-col rounded-xl font-medium p-8 gap-4 outline  `}>
      <div className="flex flex-col md:flex-row md:gap-5 gap-5">
        <div className="container flex md:gap-5 gap-2">
        <input type="checkbox"
          value={'https://litly.app/dsjfnkjdsn'}
          className='w-4 h-4 text-gray-600'
          onChange={(e) => handleChange(e)}
        />
        <div className="logo md:visible hidden bg-yellow-200 w-10 h-10 rounded-full"></div>
        <div className="links flex md:flex-row flex-col gap-4 w-full">
          <div className="innerHead w-full flex flex-col justify-between md:gap-0 gap-2">
            <h2 className='text-3xl'>Link title</h2>
            <div className="shortenLink flex flex-col">
              <a href='https://litly.app/dsjfnkjdsn' className='text-purple-600 font-medium'>litly.app/dsjfnkjdsn</a>
              <a href='https://www.google.com' className='text-gray-600 font-normal wrap-break-word mr-4'>https://www.google.com/</a>
            </div>
            <div className='flex md:flex-row flex-col md:gap-5 gap-2 font-medium md:text-md text-sm text-gray-700 mt-2'>
              <span>0 engagments</span>
              <span>More analytics</span>
              <span>20 Jun,2025</span>
            </div>
          </div>
        </div>
        </div>
        <div className="innerOptions flex gap-5 md:h-10 text-sm">
            <button className='px-2 py-1 border'>Copy</button>
            <button className='px-2 py-1 border'>Share</button>
            <button className='px-2 py-1 border'>Edit</button>
            <button className='px-2 py-1 border'>Delete</button>
          </div>
        
      </div>
    </div>
  )
}

export default LinkComponent