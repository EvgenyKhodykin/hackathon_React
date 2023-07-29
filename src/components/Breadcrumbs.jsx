import { NavLink, useLocation } from "react-router-dom"

function Breadcrumbs() {
    const location = useLocation()

    return (
        <nav aria-label="breadcrumb" className="sticky-breadcrumbs">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <NavLink to="/" className="breadcrumb-item" aria-current="page">
                        Главная
                    </NavLink>
                </li>
                {location.pathname.includes("team") && (
                    <li className="breadcrumb-item">
                        <NavLink to="/team" className="breadcrumb-item" aria-current="page">
                            Команда
                        </NavLink>
                    </li>
                )}
                {location.pathname.includes("bookmarks") && (
                    <li className="breadcrumb-item">
                        <NavLink to="/bookmarks" className="breadcrumb-item" aria-current="page">
                            Избранное
                        </NavLink>
                    </li>
                )}
            </ol>
        </nav>
    )
}

export default Breadcrumbs
