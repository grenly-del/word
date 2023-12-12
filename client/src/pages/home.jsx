import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/headers'
import { useEffect } from 'react'
import BodyContent from '../components/body'

const HomePage = () => {
    

    return (
        <header className='bg-[#e7e7e7] relative pb-1 block'>
            <Header />
            <Outlet />
            <BodyContent/>
       </header>
    )
}


export default HomePage