function MemberCard({ name, photo }) {
    return (
        <div className='card'>
            <img src={photo.main} className='card-img-top' alt='memberPhoto' />
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the
                    cards content.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a href='#' className='btn btn-primary'>
                        Открыть
                    </a>
                    <a href='#' className='btn btn-primary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-bookmark'
                            viewBox='0 0 16 16'
                        >
                            <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
