import "./_home.scss";
import "../../styles/_container1240.scss"
import { getLogements } from "../../scripts/logementsDatas.js";
import Banner from '../../components/Banner.jsx'
import background from '../../assets/background.webp'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <main>
                <section className="container-1240">
                    <Banner image={background} alt="Paysage de côte avec des falaises et des vagues" title={
                        <>
                            Chez vous, <br className="mobile-break" />
                            partout et ailleurs
                        </>
                    } />

                    <div className="gallery_background">
                        <div className="gallery_content">
                            <div className="cards_gallery">

            {getLogements().map((logement) => (
                <Link key={logement.id} to={`/product/${logement.id}`}>
                    <div className="logement img_wrapper">
                        <img className="cards-img" src={logement.cover} alt={logement.title} />
                        <h2 className="cards-title">{logement.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}
