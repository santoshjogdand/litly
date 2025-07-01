import {Link} from 'react-router-dom'
import { memo } from 'react'

function SideBarMenu({ elementArray, status, link }) {
    return (<ul className='px-4 flex flex-col gap-5 transition-all ease-in-out duration-300'>
        {elementArray.map(e => (
            <Link to={e.Link} key={e.name}>
                <li key={e.name} className={`flex items-center group hover:bg-gray-100 hover:text-purple-600 p-2 rounded-md transition-colors ease-in-out ${status ? '' : 'justify-center'}`}>
                    <e.icon className='stroke-[1.5px] flex-shrink-0 group-hover:text-purple-600 transition-all ease-in-out duration-300' />
                    <span className={`transition-all ease-in-out duration-300 overflow-hidden ${status ? 'opacity-100 max-w-full px-2' : 'opacity-0 max-w-0'}`}>{e.name}</span>
                </li>
            </Link>
        ))}

    </ul>

    )
}

export default memo(SideBarMenu)