import DashboardButton from './DashboardButton'
import { useState } from 'react'



const UpdateLinkModal = ({ url, setShowUpdateModal, updateLink }) => {
    const [message, setMessage] = useState('')
    const [updatedDetails, setUpdateDetails] = useState({
        title: false,
        customUrl: false,
        newDestUrl: false
    })
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUpdateDetails((prev) => ({
            ...prev,
            [id]: value
        }))
    }
    const handleUpdate = () => {
        console.log(updatedDetails.title)

        if (!(updatedDetails.title || updatedDetails.customUrl || updatedDetails.newDestUrl)) {
            console.log(updatedDetails.title)
            setMessage("Nothing to update")
        } else {
            updateLink(url._id, updatedDetails); // Pass ID and data to parent
            setShowUpdateModal(false); // Close modal
        }

    };
    return (
        <div key={url._id} className='fixed h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black/50 z-10 overflow-hidden px-2 transition-all duration-300'>
            <div className='relative max-w-[50rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border rounded-lg bg-gray-100 p-10 flex flex-col gap-3 flex-grow'>
                <span onClick={() => setShowUpdateModal(false)} className='text-2xl font-light absolute top-4 right-6 inline-block cursor-pointer'>x</span>
                <h2 className='text-2xl font-medium my-2'>Edit/update link details</h2>
                <h2 className='text-sm font-normal'>only add details which you want to update else leave it blank</h2>
                <div className='flex w-full flex-col'>
                    <label className='text-sm mb-1' htmlFor="title">Enter new title</label><input id='title' className='ring-2  text-sm font-normal ring-purple-500/50 rounded-lg h-10 focus:ring-purple-500  outline-none  p-4 transition-colors duration-300' type="text" placeholder={url?.title || ''} onChange={(e) => handleChange(e)} />
                    <label className='mt-2 text-sm mb-1' htmlFor="customUrl">Enter new BackHalf</label><input id='customUrl' className='ring-2  text-sm font-normal ring-purple-500/50 rounded-lg h-10 focus:ring-purple-500  outline-none  p-4 transition-colors duration-300' type="text" placeholder={url?.shortCode || ''} onChange={(e) => handleChange(e)} />
                    <label className='mt-2 text-sm mb-1' htmlFor="newDestUrl">Enter new Destination Url</label><input id='newDestUrl' className='ring-2  text-sm font-normal ring-purple-500/50 rounded-lg h-10 focus:ring-purple-500  outline-none  p-4 transition-colors duration-300' type="text" placeholder={url?.originalUrl || ''} onChange={(e) => handleChange(e)} />
                </div>
                <p className='text-red-500 text-sm font-normal'>{message}</p>
                <DashboardButton func={handleUpdate} buttonTXT={`Update`} className={`text-sm cursor-pointer inset-shadow-sm inset-shadow-purple-600 text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-300 px-3 rounded-lg h-10`} />
            </div>
        </div>
    )
}

export default UpdateLinkModal