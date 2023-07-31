import { useEffect, useState } from "react"
import API from "../mockData/members.api"
import MemberCard from "../components/MemberCard"
import Loading from "../components/Loading"

function TeamPage() {
    const [team, setTeam] = useState([])

    useEffect(() => {
        API.fetchAll().then((data) => setTeam(data))
    }, [])

    if (team.length > 0) {
        return (
            <div className="container-xl mt-5">
                <h4>Давайте знакомиться с разработчиками нашей группы:</h4>
                <div className="memberCards mt-5">
                    {team.map((member) => (
                        <MemberCard key={member._id} {...member} />
                    ))}
                </div>
            </div>
        )
    }
    return <Loading />
}

export default TeamPage
