import { useEffect, useState } from 'react'
import API from '../mockData/members.api'
import MemberCard from '../components/MemberCard'
import favorites from '../utils/favorites'
import Loading from '../components/Loading'
import { useBookmarks } from '../hooks/useBookmarks'

function BookmarksPage() {
    const {bookmarks} = useBookmarks()
    const [team, setTeam] = useState([])
    const [memberIds, setMemberIds] = useState()
    // const [favoriteList, setFavoriteList] = useState([])
    // const memberIds = favorites.get()
    const favoriteList = team.filter(member => memberIds.includes(member._id))

    useEffect(() => {
        API.fetchAll().then(data => setTeam(data))
        setMemberIds(favorites.get())
    }, [])

    if (team.length > 0) {
        if (favoriteList.length > 0) {
            return (
                <div className='container-xl mt-5'>
                    <div className='memberCards mt-5'>
                        {favoriteList.map(member => (
                            <MemberCard key={member._id} {...member} />
                        ))}
                    </div>
                </div>
            )
        }
        return (
            <div className='container-xl mt-5'>
                <h2>Пока в избранном никого нет...</h2>
            </div>
        )
    }
    return <Loading />
}

export default BookmarksPage
