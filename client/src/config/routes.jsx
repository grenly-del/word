import {Routes, Route, BrowserRouter } from 'react-router-dom'

import Beranda from '../components/headers/beranda'
import HomePage from '../pages/home'



const ConfigRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}>
                    <Route path='beranda' element={<Beranda/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default ConfigRoutes