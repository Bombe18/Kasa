import '../styles/_header.scss'
import '../styles/_container1240.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    const logo = "src/assets/LogoMain.png"
    return (
        <header className="header container-1240">
            <div className="header__container">
                <img
                    src={logo}
                    alt="Kasa logo"
                    className="nav-logo" />
                <nav className="nav_container">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                </nav>
            </div>
        </header>)
}

export default Header