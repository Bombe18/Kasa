import '../styles/_container1240.scss'
import Logements from "./Logements"
import Banner from './Banner.jsx'
import background from '../assets/background.webp' 

const Gallery = () => {
    const backgroundImage = background;

    return (
        <section className="container-1240">
            <Banner image={backgroundImage} alt="Paysage de côte avec des falaises et des vagues" title="Chez vous, partout et ailleurs"/>

            <div className="gallery_background">
                <div className="gallery_content">
                     <Logements />   
                </div>

            </div>
        </section>)

}

export default Gallery