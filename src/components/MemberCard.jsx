import { Link } from 'react-router-dom'
import { useBookmarks } from '../hooks/useBookmarks'

function MemberCard({ name, photo, age, role, about, _id }) {
    const { bookmarks, addBookmark, removeBookmark } = useBookmarks()
    const handleClassName = role => {
        return role === 'Team Leader' ? 'danger' : 'success'
    }

    const handleToggleBookmark = id => {
        let isIdExist = false
        if (bookmarks) {
            isIdExist = bookmarks.includes(id)
        }
        if (!isIdExist) {
            addBookmark(id)
        } else {
            removeBookmark(id)
        }
    }

    const handleBookmarkClassName = id => {
        let isIdExist = false
        if (bookmarks) {
            isIdExist = bookmarks.includes(id)
        }
        if (!isIdExist) return 'bi bi-bookmark'
        return 'bi bi-bookmark-check'
    }

    return (
        <div>
            <span className={`badge bg-${handleClassName(role)}`}>{role}</span>
            <div className='card'>
                <div className='card-top'>
                    <div
                        style={{ backgroundImage: `url(${photo.main})` }}
                        className='card-img-top'
                        alt='memberPhoto'
                    ></div>
                </div>
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
                            <i className={handleBookmarkClassName(_id)}></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
