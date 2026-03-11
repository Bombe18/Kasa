
import { Link } from 'react-router-dom'
import './_notFound.scss'

export default function NotFound() {

    return (
        <>
            <main className='main-not-found' >
                <p className="not-found__title">404</p>

                <p className="not-found__message">Oups! La page que <br className="mobile-break" />vous demandez n'existe pas.</p>

                <Link to="/" className='not-found__link'>Retourner sur la page d’accueil</Link>
            </main>
        </>
    )
}