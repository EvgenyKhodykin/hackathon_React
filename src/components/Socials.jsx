import { Link } from 'react-router-dom'

function Socials() {
    return (
        <>
            <p style={{ textAlign: 'center', textDecoration: 'underline' }}>
                Добавляйся в социальные сети:
            </p>
            <div className='container'>
                <address className='socials'>
                    <Link to='https://t.me' target='blank'>
                        <i className='bi bi-telegram'></i>
                    </Link>
                    <Link to='https://linkedin.com' target='blank'>
                        <i className='bi bi-linkedin'></i>
                    </Link>
                    <Link to='https://github.com' target='blank'>
                        <i className='bi bi-github'></i>
                    </Link>
                </address>
            </div>
        </>
    )
}

export default Socials
