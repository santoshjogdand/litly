
function SideBarMenu({elementArray,status}) {
    return (<ul className='px-4 flex flex-col gap-5 '>
        {elementArray.map(e=>(
            <li key={e.name} className={`flex items-center group hover:bg-gray-100 hover:text-purple-600 p-2 rounded-md transition-colors ease-in-out ${status ? '' : 'justify-center'}`}>
                <e.icon className='stroke-[1.5px] flex-shrink-0 group-hover:text-purple-600 transition-all ease-in-out duration-300' />
                <span className={`transition-all ease-in-out duration-300 overflow-hidden ${status ? 'opacity-100 max-w-full px-2' : 'opacity-0 max-w-0'}`}>{e.name}</span>
            </li>
        ))}
        
    </ul>

    )
}

export default SideBarMenu