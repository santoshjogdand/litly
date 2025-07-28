import ModalWrapper from './ModalWrapper'
const LogoBaseUrl = "/SocialLogos/"

const ShareModal = ({ url, setShowShareModal }) => {
            {console.log(url)}
            const shareText = "Hey! Check out this amazing link: "
            const shareUrl = "http://localhost/"+url.shortCode
    return (
        <ModalWrapper>
            <span onClick={() => setShowShareModal(false)} className='text-2xl font-light absolute top-4 right-6 inline-block cursor-pointer'>x</span>
            <ul className='flex w-full justify-center items-center my-10 md:gap-4 gap-6 flex-wrap'>
                <li className='outline rounded-lg p-2 transition-all duration-300 hover:bg-gray-200/50 '>
                    <a target='_blank' href={`https://wa.me/?text=${shareText}%20${shareUrl}`} className='flex flex-col items-center justify-center'> 
                        <img className="w-8 m-4" src={`${LogoBaseUrl}whatsapp.png`} alt="WhatsApp Logo" />
                        <span>Whatsapp</span>
                    </a>
                </li>
                <li className='outline rounded-lg p-2 transition-all duration-300 hover:bg-gray-200/50'> 
                    <a target='_blank' href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`} className='flex flex-col items-center justify-center'> 
                        <img className="w-8 m-4" src={`${LogoBaseUrl}telegram.png`} alt="WhatsApp Logo" />
                         <span>Telegram</span>
                    </a>
                </li>
                <li className='outline rounded-lg p-2 transition-all duration-300 hover:bg-gray-200/50'>
                    <a target='_blank' href={`mailto:?subject=${shareText}&body=${shareUrl}`} className='flex flex-col items-center justify-center'>
                        <img className="w-8 m-4" src={`${LogoBaseUrl}gmail.png`} alt="WhatsApp Logo" />
                     <span>Email</span>
                    </a>
                </li>
                <li className='outline rounded-lg p-2 transition-all duration-300 hover:bg-gray-200/50'>
                    <a target='_blank' href={`sms:?&body=${shareText}%20${shareUrl}`} className='flex flex-col items-center justify-center'>
                        <img className="w-8 m-4" src={`${LogoBaseUrl}chat.png`} alt="WhatsApp Logo" />
                        <span>SMS</span>
                    </a>
                </li>
                <li className='outline rounded-lg p-2 transition-all duration-300 hover:bg-gray-200/50'>
                    <a target='_blank' href={`https://x.com/intent/tweet?text=${shareText}%20${shareUrl}`} className='flex flex-col items-center justify-center w-full h-full'>
                        <img className="w-8 m-4" src={`${LogoBaseUrl}twitter.png`} alt="WhatsApp Logo" />
                         <span>Twitter/X</span>                   
                    </a>
                </li>
            </ul>
            <div className='flex z-0 justify-between w-full outline px-4 py-2 rounded-md'>
                <span className='w-full text-wrap'>http://localhost/{url.shortCode}</span>
                <button 
                    value={`http://localhost/${url.shortCode}`}
                    onClick={
                       async (e)=>{
                             await navigator.clipboard.writeText(e.target.value);
                             e.target.innerText = "Copied"
                             await setTimeout(()=>{
                                e.target.innerText = "Copy"
                             },3000)
                        }
                    }
                className='z-10 outline outline-black/50 px-2 rounded-md transition-all duration-300'>Copy</button>
            </div>
        </ModalWrapper>
    )
}

export default ShareModal