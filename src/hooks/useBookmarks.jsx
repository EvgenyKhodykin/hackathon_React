import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import localStorageService from "../services/localStorage.service"

const BookmarksContext = React.createContext()

export const useBookmarks = () => {
    return useContext(BookmarksContext)
}

export const BookmarksProvider = ({ children }) => {
    // const { userId } = useParams()
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        localStorageService.set()
        getBookmarks()
    }, [])

    function getBookmarks() {
        const data = localStorageService.get()
        setBookmarks(data)
    }

    function addBookmark(id) {
        const data = localStorageService.add(id)
        setBookmarks(data)
    }

    function removeBookmark(id) {
        const data = localStorageService.removeComment(id)
        setBookmarks(data)
    }

    return (
        <BookmarksContext.Provider value={{ bookmarks, getBookmarks, addBookmark, removeBookmark }}>
            {children}
        </BookmarksContext.Provider>
    )
}
