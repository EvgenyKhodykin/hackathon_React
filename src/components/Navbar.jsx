import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg  bg-warning-subtle'>
            <div className='container-fluid '>
                <a className='navbar-brand'>DreamTeam</a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to='/' className='nav-link'>
                                Главная
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='team' className='nav-link' aria-current='page'>
                                Команда
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='bookmarks' className='nav-link' aria-current='page'>
                                Избранное
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
