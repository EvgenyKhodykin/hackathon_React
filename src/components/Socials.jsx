function Socials() {
    return (
        <>
            <p style={{ textAlign: 'center', textDecoration: 'underline' }}>
                Добавляйся в социальные сети:
            </p>
            <div className='container'>
                <address className='socials'>
                    <a href='https://t.me/Evgeny_Khodykin' target='_blank' rel='noreferrer'>
                        <img src='./images/telegram.png' alt='telegram' />
                    </a>
                    <a href='https://vk.com/jhonny_ist' target='_blank' rel='noreferrer'>
                        <img src='./images/vk.png' alt='vk' />
                    </a>
                    <a href='https://github.com/EvgenyKhodykin' target='_blank' rel='noreferrer'>
                        <img src='./images/github.png' alt='github' />
                    </a>
                </address>
            </div>
        </>
    )
}

export default Socials
