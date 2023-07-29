function MemberCard({ name, photo, age, role, about }) {
    const myStyle = {
        backgroundImage: `url(${photo.main})`
    }

    const handleClassName = role => {
        return role === 'Team Leader' ? 'danger' : 'success'
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
                        <a href='#' className={`btn btn-${handleClassName(role)}`}>
                            Открыть
                        </a>
                        <a href='#' className={`btn btn-${handleClassName(role)}`}>
                            <i className='bi bi-bookmark'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
