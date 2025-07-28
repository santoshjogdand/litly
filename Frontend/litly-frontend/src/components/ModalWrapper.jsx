import React from 'react'

const ModalWrapper = ({children, width}) => {
    const Modalwidth = width?width:36
    return (
        <div className='fixed h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black/50 z-10 overflow-hidden px-2 transition-all duration-300'>
            <div className={`relative w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-lg bg-gray-100 p-10 inline-block`}>
                {children}
            </div>
        </div>
    )
}

export default ModalWrapper