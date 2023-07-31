import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../mockData/members.api"

const BreadcrumbsContext = React.createContext()

export const useBreadcrumbs = () => {
    return useContext(BreadcrumbsContext)
}

export const BreadcrumbsProvider = ({ children }) => {
    const { userId } = useParams()

    const [member, setMember] = useState()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getMemberById()
    }, [userId])

    function getMemberById() {
        API.getById(userId).then((data) => setMember(data))
        setLoading(false)
    }

    return <BreadcrumbsContext.Provider value={{ member, isLoading }}>{children}</BreadcrumbsContext.Provider>
}
