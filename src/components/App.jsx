import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import MainLayout from '../layouts/MainLayout'
import TeamLayout from '../layouts/TeamLayout'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainLayout />} />
                <Route path='team' element={<TeamLayout />} />
            </Routes>
        </>
    )
}

export default App
