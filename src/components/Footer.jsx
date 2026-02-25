import '../styles/_footer.scss'

const Footer = () => {
    const logo = "src/assets/LogoFooter.png"
    return (
        <footer className="footer">
            <div className="footer__container">
                <img
                    src={logo}
                    alt="Kasa logo"
                    className="footer-logo" />
                <div className="footer__copyright">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer