import LinkComponent from '../components/LinkComponent'
import { useEffect, useState } from 'react'
import axios from '../utils/axios';

function Links() {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    const fetchUrls = async () => {
      const res = await axios.get('/urls');
      setUrls(res.data.data)
    }
    fetchUrls();
  }, []);

    const deleteLink = async (linkId) => {
    console.log("Deleted", linkId)
    axios.delete(`/urls/${linkId}`).then((response) => {
      console.log(response.data.message)
      // fetchUrls();
      toast.success('Link deleted successfully!');
      setUrls((prev) => prev.filter((url) => url._id !== linkId))
    }).catch((error) => {
      toast.error('Failed to delete link.');
    })
  }

  return (
    <>
      <div className='container overflow-auto z-10 h-full w-full lg:rounded-lg backdrop-blur-4xl p-8 lg:pt-8 lg:mb-8 md:pt-25 pt-12  flex flex-col justify-center gap-6'>
        <div className="headings">
          <h1 className='text-4xl font-semibold ' >Manage Links</h1>
          <p className='text-gray-700 ml-[2px]'>Manage all shortlinks here!</p>
        </div>
        <div className="options flex opacity-90 sm:justify-start gap-4 my-4 sm:w-[40%] w-full font-medium text-sm h-8 ">
          <input type="date" placeholder='Filter by date' className='bg-white  border border-gray-200 cursor-pointer rounded-lg sm:p-4 px-1 outline-none' id='dateFilter' />
          <div className='rounded-lg sm:p-4 px-2 flex bg-white border border-gray-200 max-w-30 items-center justify-center cursor-pointer' id='filter' >
            Add filters
          </div>
          <div className='rounded-lg max-w-30 sm:flex hidden items-center justify-center text-purple-600 cursor-pointer' id='filter' >
            Clear all
          </div>
        </div>
        <hr className='opacity-20' />
        <LinkComponent urls={urls} />
      </div>
    </>
  )
}

export default Links