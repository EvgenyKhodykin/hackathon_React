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
                        <i className='bi bi-bookmark'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
