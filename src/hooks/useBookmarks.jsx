import React, { useContext, useState } from "react"
import localStorageService from "../services/localStorage.service"

const BookmarksContext = React.createContext()

export const useBookmarks = () => {
    return useContext(BookmarksContext)
}

export const BookmarksProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([])

    function getBookmarks() {
        const data = localStorageService.get()
        setBookmarks(data)
    }

    function addBookmark(id) {
        const data = localStorageService.add(id)
        setBookmarks(data)
    }

    function removeBookmark(id) {
        const data = localStorageService.remove(id)
        setBookmarks(data)
    }

    return (
        <BookmarksContext.Provider value={{ bookmarks, getBookmarks, addBookmark, removeBookmark }}>
            {children}
        </BookmarksContext.Provider>
    )
}
