import '../styles/_header.scss'
import '../styles/_container1240.scss'

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
                    <a href="/">Accueil</a>
                    <a href="/about">À propos</a>
                </nav>
            </div>
        </header>)
}

export default Header