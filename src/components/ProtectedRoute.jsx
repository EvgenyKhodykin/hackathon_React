import { useEffect, useState } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import API from '../mockData/members.api'

function ProtectedRoute() {
    const { userId } = useParams()
    const [team, setTeam] = useState([])

    useEffect(() => {
        API.fetchAll().then(data => setTeam(data))
    }, [])

    if (team.length > 0) {
        if (team.map(user => user._id).includes(userId)) return <Outlet />
        return <Navigate to='/' />
    }
}

export default ProtectedRoute
