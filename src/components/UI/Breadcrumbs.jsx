import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import API from '../../mockData/members.api'

function Breadcrumbs() {
    const location = useLocation()
    const endOfPath = location.pathname.split('/').pop()
    const [member, setMember] = useState()

    useEffect(() => {
        API.getById(endOfPath).then(data => setMember(data))
    }, [endOfPath])

    return (
        <div className='container-fluid mt-2'>
            <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <NavLink to='/' className='breadcrumb-item' aria-current='page'>
                            Главная
                        </NavLink>
                    </li>
                    {location.pathname.includes('team') && (
                        <li className='breadcrumb-item'>
                            <NavLink to='/team' className='breadcrumb-item' aria-current='page'>
                                Команда
                            </NavLink>
                        </li>
                    )}
                    {!!member && (
                        <li className='breadcrumb-item'>
                            <NavLink to='/team' className='breadcrumb-item' aria-current='page'>
                                {member.name}
                            </NavLink>
                        </li>
                    )}
                    {location.pathname.includes('bookmarks') && (
                        <li className='breadcrumb-item'>
                            <NavLink
                                to='/bookmarks'
                                className='breadcrumb-item'
                                aria-current='page'
                            >
                                Избранное
                            </NavLink>
                        </li>
                    )}
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs
