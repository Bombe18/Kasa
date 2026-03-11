import '../styles/_header.scss'
import '../styles/_container1240.scss'
import { NavLink } from 'react-router-dom'
import logo from '../assets/LogoMain.png'

const Header = () => {
   
    return (
        <header className="header container-1240">
            <div className="header__container">
                <img
                    src={logo}
                    alt="Kasa logo"
                    className="nav-logo" />
                <nav className="nav_container">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        À propos
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header