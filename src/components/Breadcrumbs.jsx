import { NavLink } from 'react-router-dom'

function Breadcrumbs() {
    return (
        <nav aria-label='breadcrumb' className='m-2'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                    <NavLink to='/' className='breadcrumb-item' aria-current='page'>
                        Главная
                    </NavLink>
                </li>
                <li className='breadcrumb-item'>
                    <NavLink to='/team' className='breadcrumb-item' aria-current='page'>
                        Команда
                    </NavLink>
                </li>
                <li className='breadcrumb-item'>
                    <NavLink to='/bookmarks' className='breadcrumb-item' aria-current='page'>
                        Избранное
                    </NavLink>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs
