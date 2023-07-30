function Progress() {
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
                                style={{ width: '75%' }}
                                aria-valuenow='75'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                75%
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <p className='technologies'>CSS</p>
                    </div>
                    <div className='col-9'>
                        <div className='progress'>
                            <div
                                className='progress-bar bg-primary'
                                role='progressbar'
                                style={{ width: '50%' }}
                                aria-valuenow='50'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                50%
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <p className='technologies'>React</p>
                    </div>
                    <div className='col-9'>
                        <div className='progress'>
                            <div
                                className='progress-bar bg-info'
                                role='progressbar'
                                style={{ width: '25%' }}
                                aria-valuenow='25'
                                aria-valuemin='0'
                                aria-valuemax='100'
                            >
                                25%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progress
