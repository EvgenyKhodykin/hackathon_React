import { useEffect, useState } from "react"
import API from "../mockData/members.api"
import MemberCard from "../components/MemberCard"
import favorites from "../utils/favorites"

function BookmarksPage() {
    const [team, setTeam] = useState([])
    const [favoriteList, setFavoriteList] = useState([])
    const memberIds = favorites.get()

    useEffect(() => {
        API.fetchAll().then((data) => setTeam(data))
    }, [])

    useEffect(() => {
        setFavoriteList(team.filter((member) => memberIds.includes(member._id)))
    }, [team])

    if (team) {
        if (favoriteList.length > 0) {
            return (
                <div className="container-xl mt-5">
                    <div className="memberCards mt-5">
                        {favoriteList.map((member) => (
                            <MemberCard key={member._id} {...member} />
                        ))}
                    </div>
                </div>
            )
        }
        return (
            <div class="alert alert-warning" role="alert">
                Пока в избранном никого нет...
            </div>
        )
    }
    return "Loading..."
}

export default BookmarksPage
