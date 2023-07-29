import { useEffect, useState } from 'react'
import API from '../mockData/members.api'
import MemberCard from '../components/MemberCard'

function BookmarksPage() {
    const [team, setTeam] = useState([])

    useEffect(() => {
        API.fetchAll().then(data => setTeam(data))
    }, [])

    if (team.length > 0) {
        return (
            <div className='container-xl mt-5'>
                <div className='memberCards mt-5'>
                    {team.map(member =>
                        localStorage.getItem(member._id) ? (
                            <MemberCard key={member._id} {...member} />
                        ) : (
                            <h1 key={member._id}>Пока в избранном никого нет...</h1>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default BookmarksPage
