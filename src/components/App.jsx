import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import MainPage from '../pages/MainPage'
import TeamLayout from '../layouts/TeamLayout'
import BookmarksPage from '../pages/BookmarksPage'
import MemberPage from '../pages/MemberPage'
import TeamPage from '../pages/TeamPage'

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='team' element={<TeamLayout />}>
                    <Route index element={<TeamPage />} />
                    <Route path=':userId' element={<MemberPage />} />
                </Route>
                <Route path='bookmarks' element={<BookmarksPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    )
}

export default App
