import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../mockData/members.api'
import Slider from '../components/Slider'

function MemberPage() {
    const { userId } = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        API.getById(userId).then(data => setUser(data))
    }, [])

    if (user) {
        return (
            <>
                <div className='container mt-5'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <div>
                                <Slider userId={userId} />
                            </div>
                        </div>
                        <div className='col-8'></div>
                    </div>
                </div>
                {/* Techs */}
            </>
        )
    }
    return 'Loading...'
}

export default MemberPage
