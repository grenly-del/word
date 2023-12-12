import {Routes, Route, BrowserRouter } from 'react-router-dom'

import Beranda from '../components/headers/beranda'
import HomePage from '../pages/home'



const ConfigRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}>
                    <Route path='beranda' element={<Beranda/>}/>
                    <Route path='insert' element={<h1 className='w-full bg-[#eee] text-black'>hi</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default ConfigRoutes