function Progress({ technologies }) {
    return (
        <>
            <p style={{ textAlign: 'center', textDecoration: 'underline' }}>
                Освоенные технологии:
            </p>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-3'>
                        <p className='technologies'>HTML</p>
                    </div>
                    <div className='col-9'>
                        <div className='progress'>
                            <div
                                className='progress-bar bg-danger'
                                role='progressbar'
                                style={{ width: `${technologies.html}%` }}
                            >
                                {technologies.html}%
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <p className='technologies'>CSS</p>
                    </div>
                    <div className='col-9'>
                        <div className='progress'>
                            <div
                                className='progress-bar bg-success'
                                role='progressbar'
                                style={{ width: `${technologies.css}%` }}
                            >
                                {technologies.css}%
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <p className='technologies'>JavaScript</p>
                    </div>
                    <div className='col-9'>
                        <div className='progress'>
                            <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: `${technologies.js}%` }}
                                aria-valuenow='50'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                {technologies.js}%
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <p className='technologies'>React</p>
                    </div>
                    <div className='col-9'>
                        <div className='progress'>
                            <div
                                className='progress-bar bg-primary'
                                role='progressbar'
                                style={{ width: `${technologies.react}%` }}
                                aria-valuenow='50'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                {technologies.react}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress
