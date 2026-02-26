import '../styles/_galeryContent.scss'
import '../styles/_container1240.scss'
import Logements from "../components/Logements"

const Gallery = () => {
    const background = "src/assets/background.webp"
    return (
        <section className="container-1240">
            <div className="gallery_banner_background">
                <img className='img__banner_background' src={background} alt="Paysage de côte avec des falaises et des vagues" />
                <h1 className="title">Chez vous, partout et ailleurs</h1>
            </div>

            <div className="gallery_background">
                <div className="gallery_content">
                     <Logements />   
                </div>

            </div>
        </section>)

}

export default Gallery