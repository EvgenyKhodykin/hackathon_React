function Socials() {
    return (
        <>
            <p style={{ textAlign: 'center', textDecoration: 'underline' }}>
                Добавляйся в социальные сети:
            </p>
            <div className='container'>
                <address className='socials'>
                    <a href='https://t.me' target='blank'>
                        <i className='bi bi-telegram'></i>
                    </a>
                    <a href='https://linkedin.com' target='blank'>
                        <i className='bi bi-linkedin'></i>
                    </a>
                    <a href='https://github.com' target='blank'>
                        <i className='bi bi-github'></i>
                    </a>
                </address>
            </div>
        </>
    )
}

export default Socials
