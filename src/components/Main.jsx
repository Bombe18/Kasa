import '../styles/_container1240.scss'
import Logements from "./Logements"
import Banner from './Banner.jsx'

const Gallery = () => {
    return (
        <section className="container-1240">
            <Banner />

            <div className="gallery_background">
                <div className="gallery_content">
                     <Logements />   
                </div>

            </div>
        </section>)

}

export default Gallery