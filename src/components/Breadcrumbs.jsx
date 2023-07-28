import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {
    const location = useLocation()

    return (
        <nav className='m-2'>
            <Link
                to='/'
                className={
                    location.pathname === '/' ? 'breadcrumb-active' : 'breadcrumb-not-active'
                }
            >
                Главная
            </Link>
            {'>'}
            <Link
                to='/team'
                className={
                    location.pathname.startsWith('/team')
                        ? 'breadcrumb-active'
                        : 'breadcrumb-not-active'
                }
            >
                Команда
            </Link>
            {'>'}
            <Link
                to='/team/1'
                className={
                    location.pathname === '/products/1'
                        ? 'breadcrumb-active'
                        : 'breadcrumb-not-active'
                }
            >
                Product 1
            </Link>
        </nav>
    )
}

export default Breadcrumbs
