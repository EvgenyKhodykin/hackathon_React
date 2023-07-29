import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MemberCard({ name, photo, age, role, about, _id }) {
    const [isFavorite, setIsFavorite] = useState(false)

    const myStyle = {
        backgroundImage: `url(${photo.main})`
    }

    useEffect(() => {
        if (localStorage.getItem(_id)) {
            setIsFavorite(true)
        }
    }, [_id])

    const handleClassName = role => {
        return role === 'Team Leader' ? 'danger' : 'success'
    }

    const handleToggleBookmark = id => {
        if (!isFavorite) {
            localStorage.setItem(id, id)
            setIsFavorite(true)
        } else {
            localStorage.removeItem(id)
            setIsFavorite(false)
        }
    }

    const handleBookmarkClassName = () => {
        if (!isFavorite) return 'bi bi-bookmark'
        return 'bi bi-bookmark-check'
    }

    return (
        <div>
            <span className={`badge bg-${handleClassName(role)}`}>{role}</span>
            <div className='card'>
                <img style={myStyle} className='card-img-top' alt='memberPhoto' />
                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                    <h6>{age} лет</h6>
                    <p className='card-text mt-4'>{about}</p>
                    <div className='card-navigate'>
                        <Link to={`/team/${_id}`} className={`btn btn-${handleClassName(role)}`}>
                            Открыть
                        </Link>
                        <button
                            className={`btn btn-${handleClassName(role)}`}
                            onClick={() => handleToggleBookmark(_id)}
                        >
                            <i className={handleBookmarkClassName()}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
