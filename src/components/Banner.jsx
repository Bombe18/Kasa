import "../styles/_banner.scss"
import background from '../assets/background.webp'


export default function Banner() {
    const backgroundImage = background;
    return (
        <div className="gallery_banner_background">
            <img className='img__banner_background' src={backgroundImage} alt="Paysage de côte avec des falaises et des vagues" />
            <h1 className="title">Chez vous, partout et ailleurs</h1>
        </div>
    )
}

