import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import MainLayout from '../layouts/MainLayout'
import TeamLayout from '../layouts/TeamLayout'
import BookmarksLayout from '../layouts/BookmarksLayout'
import MemberPage from '../pages/MemberPage'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainLayout />} />
                <Route path='team' element={<TeamLayout />}>
                    <Route path=':userId' element={<MemberPage />} />
                </Route>
                <Route path='bookmarks' element={<BookmarksLayout />} />
            </Routes>
        </>
    )
}

export default App
