import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import MainLayout from '../layouts/MainLayout'
import TeamLayout from '../layouts/TeamLayout'
import BookmarksLayout from '../layouts/BookmarksLayout'
import MemberPage from '../pages/MemberPage'
import TeamPage from '../pages/TeamPage'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainLayout />} />
                <Route path='team' element={<TeamLayout />}>
                    <Route index element={<TeamPage />} />
                    <Route path=':userId' element={<MemberPage />} />
                </Route>
                <Route path='bookmarks' element={<BookmarksLayout />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default App
