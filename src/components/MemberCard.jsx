import { useState } from "react"
import { Link } from "react-router-dom"
import favorites from "../utils/favorites"

function MemberCard({ name, photo, age, role, about, _id }) {
    const [favoritesId, setFavoritesId] = useState()

    const myStyle = {
        backgroundImage: `url(${photo.main})`,
    }

    const handleClassName = (role) => {
        return role === "Team Leader" ? "danger" : "success"
    }

    const handleToggleBookmark = (id) => {
        const favoritesIds = favorites.get()
        let isIdExist = false
        if (favoritesIds) {
            isIdExist = favoritesIds.includes(id)
        }
        if (!isIdExist) {
            favorites.add(id)
            setFavoritesId(favorites.get())
        } else {
            favorites.remove(id)
            setFavoritesId(favorites.get())
        }
    }

    const handleBookmarkClassName = (id) => {
        const favoritesIds = favorites.get()
        let isIdExist = false
        if (favoritesIds) {
            isIdExist = favoritesIds.includes(id)
        }
        if (!isIdExist) return "bi bi-bookmark"
        return "bi bi-bookmark-check"
    }

    return (
        <div>
            <span className={`badge bg-${handleClassName(role)}`}>{role}</span>
            <div className="card">
                <div style={myStyle} className="card-img-top" alt="memberPhoto"></div>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6>{age} лет</h6>
                    <p className="card-text mt-4">{about}</p>
                    <div className="card-navigate">
                        <Link to={`/team/${_id}`} className={`btn btn-${handleClassName(role)}`}>
                            Открыть
                        </Link>
                        <button
                            className={`btn btn-${handleClassName(role)}`}
                            onClick={() => handleToggleBookmark(_id)}
                        >
                            <i className={handleBookmarkClassName(_id)}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
