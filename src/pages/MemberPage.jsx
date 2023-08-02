import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../mockData/members.api"
import Slider from "../components/Slider"
import Loading from "../components/Loading"
import Progress from "../components/Progress"
import Socials from "../components/Socials"

function MemberPage() {
    const { userId } = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        API.getById(userId).then((data) => setUser(data))
    }, [userId])

    if (user) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <Slider {...user} />
                    <div className="col-6">
                        <div
                            className="card"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    flexDirection: "column",
                                    textDecoration: "underline",
                                }}
                            >
                                <p className="card-title">Имя:</p>
                                <p className="card-title">Возраст:</p>
                                <p className="card-title">О себе:</p>
                                <p className="card-title">Роль в команде:</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    marginLeft: "15px",
                                }}
                            >
                                <p className="card-title">{user.name}</p>
                                <p className="card-title">{user.age}</p>
                                <p className="card-title">{user.about}</p>
                                <p className="card-title">{user.role}</p>
                            </div>
                        </div>
                        <div className="card">
                            <Progress {...user} />
                        </div>
                        <div className="card">
                            <Socials />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return <Loading />
}

export default MemberPage
