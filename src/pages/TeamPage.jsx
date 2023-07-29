import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import API from '../mockData/members.api'

function TeamPage() {
    const [team, setTeam] = useState([])
    console.log(team)

    useEffect(() => {
        API.fetchAll().then(data => setTeam(data))
    }, [])

    return (
        <>
            <Breadcrumbs />
            <div className='container-xl mt-5'>
                <p>Давайте знакомиться с разработчиками нашей группы:</p>
            </div>
        </>
    )
}

export default TeamPage
