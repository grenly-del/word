import { Outlet } from 'react-router-dom'
import Header from '../components/headers'

const HomePage = () => {
    return (
        <header className='bg-[#0f4269]'>
            <Header />
            <Outlet />
       </header>
    )
}


export default HomePage