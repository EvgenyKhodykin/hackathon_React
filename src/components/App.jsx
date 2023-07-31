import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import MainPage from "../pages/MainPage"
import TeamLayout from "../layouts/TeamLayout"
import BookmarksPage from "../pages/BookmarksPage"
import MemberPage from "../pages/MemberPage"
import TeamPage from "../pages/TeamPage"
import ProtectedRoute from "./ProtectedRoute"
import Breadcrumbs from "./Breadcrumbs"
import { BookmarksProvider } from "../hooks/useBookmarks"
import { BreadcrumbsProvider } from "../hooks/useBreadcrumbs"

function App() {
    return (
        <>
            <Navbar />
            <BreadcrumbsProvider>
                <Breadcrumbs />
                <BookmarksProvider>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="team" element={<TeamLayout />}>
                            <Route index element={<TeamPage />} />
                            <Route element={<ProtectedRoute />}>
                                <Route path=":userId" element={<MemberPage />} />
                            </Route>
                        </Route>
                        <Route path="bookmarks" element={<BookmarksPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BookmarksProvider>
            </BreadcrumbsProvider>
        </>
    )
}

export default App
