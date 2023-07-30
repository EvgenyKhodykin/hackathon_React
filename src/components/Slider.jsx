import { useEffect, useState } from 'react'
import API from '../mockData/members.api'

function Slider({ userId }) {
    const [user, setUser] = useState()

    useEffect(() => {
        API.getById(userId).then(data => setUser(data))
    }, [userId])

    if (user) {
        return (
            <div className='card'>
                <div className='slider'>
                    <div
                        id='carouselExampleControls'
                        className='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <div className='carousel-inner'>
                            {user.photo.others.map((photo, index) => (
                                <div
                                    key={index}
                                    className={
                                        index === 0 ? 'carousel-item active' : 'carousel-item'
                                    }
                                >
                                    <img src={photo} className='d-block w-100' alt='Photo' />
                                </div>
                            ))}
                        </div>
                        <button
                            className='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleControls'
                            data-bs-slide='prev'
                        >
                            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                            <span className='visually-hidden'>Previous</span>
                        </button>
                        <button
                            className='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleControls'
                            data-bs-slide='next'
                        >
                            <span className='carousel-control-next-icon' aria-hidden='true'></span>
                            <span className='visually-hidden'>Next</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return 'Loading...'
}

export default Slider
