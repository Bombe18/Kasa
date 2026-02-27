const Rating = ({ scaleValue }) => {
    const range = [1, 2, 3, 4, 5]

    return (
        <div className="rating">
            {range.map((index) =>
                scaleValue >= index ? (
                    <span key={index} className="rating__star rating__star_active">★</span>
                ) : (
                    <span key={index} className="rating__star">★</span>
                )
            )}
        </div>
    )
}

export default Rating