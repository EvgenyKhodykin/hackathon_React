import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../mockData/members.api"
import Slider from "../components/Slider"

function MemberPage() {
    const { userId } = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        API.getById(userId).then((data) => setUser(data))
    }, [])
    // useEffect(() => {
    //     console.log(user)
    // }, [user])

    if (user) {
        return (
            <>
                <h1>MemberPage</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="card">
                                <div
                                    style={{ backgroundImage: `url(${user.photo.main})` }}
                                    className="card-img-top"
                                    alt="memberPhoto"
                                ></div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="card">{/* <Slider userId={userId} /> */}</div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="card">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Полное имя</td>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Возраст</td>
                                            <td>{user.age}</td>
                                        </tr>
                                        <tr>
                                            <td>Амплуа</td>
                                            <td>{user.role}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Github</td>
                                            <td>{user.github}</td>
                                        </tr>
                                        <tr>
                                            <td>VK</td>
                                            <td>адрес VK</td>
                                        </tr>
                                        <tr>
                                            <td>Facebook</td>
                                            <td>адрес facebook</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-3">
                                            <p className="technologies">HTML</p>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    style={{ width: "75%" }}
                                                    aria-valuenow="75"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    75%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <p className="technologies">CSS</p>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style={{ width: "50%" }}
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    50%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <p className="technologies">React</p>
                                        </div>
                                        <div className="col-9">
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: "25%" }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    25%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return "Loading..."
}

export default MemberPage
