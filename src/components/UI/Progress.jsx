function Progress({ techs }) {
    return (
        <>
            <p style={{ textAlign: "center", textDecoration: "underline" }}>Освоенные технологии:</p>
            <div className="container">
                {techs.map((tech, index) => (
                    <div key={index} className="row justify-content-center">
                        <div className="col-2">
                            <p className="technologies">{tech.name}</p>
                        </div>
                        <div className="col-10">
                            <div className="progress">
                                <div
                                    className={"progress-bar " + tech.color}
                                    role="progressbar"
                                    style={{ width: `${tech.progress}%` }}
                                >
                                    {tech.progress}%
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Progress
