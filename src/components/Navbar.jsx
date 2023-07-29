import { NavLink } from 'react-router-dom'
import reactIcon from '../assets/images/reactIcon.png'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <img
                        src={reactIcon}
                        className='img-fluid'
                        alt='reactLogo'
                        style={{
                            width: '60px',
                            marginRight: '15px'
                        }}
                    />
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item h5'>
                            <NavLink to='/' className='nav-link'>
                                Главная
                            </NavLink>
                        </li>
                        <li className='nav-item h5'>
                            <NavLink to='team' className='nav-link' aria-current='page'>
                                Команда
                            </NavLink>
                        </li>
                        <li className='nav-item h5'>
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
