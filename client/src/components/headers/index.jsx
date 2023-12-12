
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import './style.css'

const Header = () => {
    const [state, setState] = useState(false)
    const refE = {
        a: useRef(null),
        b: useRef(null),
        c: useRef(null),
        d: useRef(null)
    }


    const handleClicks = (e) => {
        const element = e.target
        setState(state ? false: true)
    }
    

    useEffect(() => {
        Object.values(refE).map((ele) => {
            ele.current.parentElement.classList.remove('active')
        })
        let el = Object.values(refE).find((el) => el.current.classList.contains('active'))
        el.current.parentElement.classList.toggle('active')
        console.log(state)
    }, [refE, state])
    
    return (

        <nav className='flex flex-row w-full bg-[#0f4269] text-[#eee] px-20 relative'>
            <ul className='flex items-center [&>li]:mr-16 font-[600] font-Quick relative [&>li]:py-2 [&>li]:px-7' id='parent-menu'>
                <li><NavLink ref={refE.a} onClick={handleClicks} id='manu' to="/beranda">Beranda</NavLink></li>
                <li><NavLink ref={refE.b} onClick={handleClicks} id='manu' to="/insert">Masukkan</NavLink></li>
                <li><NavLink ref={refE.c} onClick={handleClicks} id='manu' to="/edit">Edit</NavLink></li>
                <li><NavLink ref={refE.d} onClick={handleClicks} id='manu' to="/layout">Tata Letak</NavLink></li>
            </ul>
        </nav>
        
    )
}


export default Header