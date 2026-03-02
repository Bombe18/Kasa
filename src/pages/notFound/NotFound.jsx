
import { Link } from 'react-router-dom'
export default function NotFound() {

    return (
        <>
            <main>
                <p className="not-found__title">404</p>

                <p className="not-found__message">Oups! La page que vous demandez n'existe pas.</p>

                <Link to="/" className='not-found__link'>Retourner sur la page d’accueil</Link>
            </main>
        </>
    )
}