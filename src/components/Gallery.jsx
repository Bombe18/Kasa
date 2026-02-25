import '../styles/_galeryContent.scss'
import '../styles/_container1240.scss'

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
                    <div className="temp_item">
                        <p className="temp_title">Temp title</p>
                    </div>
                    <div className="temp_item">
                        <p className="temp_title">Temp title</p>
                    </div>
                    <div className="temp_item">
                        <p className="temp_title">Temp title</p>
                    </div>
                    <div className="temp_item">
                        <p className="temp_title">Temp title</p>
                    </div>
                    <div className="temp_item">
                        <p className="temp_title">Temp title</p>
                    </div>
                    <div className="temp_item">
                        <p className="temp_title">Temp title</p>
                    </div>
                </div>

            </div>
        </section>)

}

export default Gallery