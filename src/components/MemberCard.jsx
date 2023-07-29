function MemberCard({ name, photo }) {
    const myStyle = {
        backgroundImage: `url(${photo.main})`,
    }
    return (
        <div className="card">
            <img style={myStyle} className="card-img-top" alt="memberPhoto" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the cards content.
                </p>
                <div className="card-navigate">
                    <a href="#" className="btn btn-primary">
                        Открыть
                    </a>
                    <a href="#" className="btn btn-primary">
                        <i className="bi bi-bookmark"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
