import ModalWrapper from './ModalWrapper'
import DashboardButton from './DashboardButton'

const DeleteDialog = ({setShowDeleteDialog,url,deleteLink}) => {
  return (
    <ModalWrapper>
        <div className="flex gap-2 flex-col">
            <span onClick={() => setShowDeleteDialog(false)} className='text-2xl font-light absolute top-4 right-6 inline-block cursor-pointer'>x</span>
            <h2 className='text-2xl font-medium my-2 text-red-500'>You are deleting <span className='text-green-500'>"{url.title}"</span>  url!</h2>
            <h2 className='text-sm font-normal'>Do you want delete this url? <br/> It will get permenently deleted and it is a irreversable action!</h2>
            <div className='text-white flex w-full gap-4 justify-center'>
                <button
                onClick={()=>setShowDeleteDialog(false)}
                className='px-4 py-2 rounded-md bg-green-500'>Cancel</button>
                <button
                onClick={()=>{
                    setShowDeleteDialog(false)
                    deleteLink(url._id)
                }}
                className='px-4 py-2 rounded-md bg-red-500'>Delete</button>
            </div>
        </div>
    </ModalWrapper>
  )
}

export default DeleteDialog