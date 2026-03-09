import "../styles/_banner.scss"


export default function Banner({image, alt, title}) {
    return (
        <div className="gallery_banner_background">
            <img className='img__banner_background' src={image} alt={alt} />
            <h1 className="title">{title}</h1>
        </div>
    )
}

