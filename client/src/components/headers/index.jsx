import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (

        <nav className='flex flex-row w-full h-6 bg-[#0f4269] text-[#eee] px-20 py-5'>
            <ul className='w-full h-full flex items-center [&>li]:mr-16 font-[600] font-Quick'>
                <li><NavLink to="/beranda">Beranda</NavLink></li>
                <li><NavLink to="/insert">Masukkan</NavLink></li>
                <li><NavLink to="/edit">Edit</NavLink></li>
                <li><NavLink to="/layout">Tata Letak</NavLink></li>
            </ul>
        </nav>
        
    )
}


export default Header