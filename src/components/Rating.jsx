import "../styles/_rating.scss"
import activeStar from "../assets/star-active.png"
import inactiveStar from  "../assets/star-inactive.png"

const Rating = ({ scaleValue }) => {
    const range = [1, 2, 3, 4, 5]  
    return (
        <div className="rating">
            {range.map((index) =>
                scaleValue >= index ? (
                    <span key={index} >
                        <img className="rating__star rating__star_active" src={activeStar} alt="Étoile active" />
                    </span>
                ) : (
                    <span key={index}>
                        <img className="rating__star" src={inactiveStar} alt="Étoile inactive" />
                    </span>
                )
            )}
        </div>
    )
}

export default Rating