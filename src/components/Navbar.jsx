import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/images/react-icon_2.png'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg  bg-warning-subtle'>
            <div className='container-fluid '>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <img
                        src={reactLogo}
                        className='img-fluid'
                        alt='reactLogo'
                        style={{
                            width: '80px',
                            height: '70px',
                            marginRight: '15px'
                        }}
                    />
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
