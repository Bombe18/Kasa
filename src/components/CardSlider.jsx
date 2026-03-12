import { useState } from "react";
import arrow from "../assets/CarouselArrow.png";
import "../styles/_cardSlider.scss";

function CardSlider({ pictures = [], title = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (pictures.length === 0) return null;

  const nextSlide = () => {
    const lastSlide = currentIndex === pictures.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="card-slider">
      {pictures.length > 1 && (
        <>
          <div className="card-arrow-left" onClick={prevSlide}>
            <img src={arrow} alt="Flèche gauche" />
          </div>
          <div className="card-arrow-right" onClick={nextSlide}>
            <img src={arrow} alt="Flèche droite" />
          </div>
        </>
      )}

      <img
        src={pictures[currentIndex]}
        alt={title}
        className="card-slider__image"
      />
          {pictures.length > 1 && (
        <div className="card-slider__counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}

    </div>
  );
}

export default CardSlider;