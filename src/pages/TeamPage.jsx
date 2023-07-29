import { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import API from '../mockData/members.api'
import MemberCard from '../components/MemberCard'

function TeamPage() {
    const [team, setTeam] = useState([])

    useEffect(() => {
        API.fetchAll().then(data => setTeam(data))
    }, [])

    return (
        <>
            <Breadcrumbs />
            <div className='container-xl mt-5'>
                <p>Давайте знакомиться с разработчиками нашей группы:</p>
                <div className='memberCards mt-4'>
                    {team.map(member => (
                        <MemberCard key={member._id} {...member} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TeamPage
