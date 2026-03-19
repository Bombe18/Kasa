import "../styles/_banner.scss"
import { getCustomClass } from "./../scripts/utils.js"

export default function Banner({image, alt, title, variant}) {
    return (
        <div className={`gallery_banner_background ${getCustomClass(variant)}`}>
            <img className="img__banner_background" src={image} alt={alt}  />
            <h1 className="title" >{title}</h1>
        </div>
    )
}

