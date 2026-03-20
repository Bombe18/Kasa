import { useEffect } from "react";
import { preload } from "react-dom";

import backgroundHome from "../assets/background.webp";
import backgroundAbout from "../assets/backgroundAbout.jpg";
import CarouselArrow from "../assets/CarouselArrow.png"
import Vector from "../assets/Vector.png"

function Preload() {
  useEffect(() => {
    preload(backgroundHome, {
      as: "image",
      fetchPriority: "high",
    });

    preload(backgroundAbout, {
      as: "image",
      fetchPriority: "high",
    })
    
    preload(CarouselArrow, {
      as: "image",
      fetchPriority: "high",
    })
    preload(Vector, {
      as: "image",
      fetchPriority: "high",
    });
  },[]);

  return ;
}

export default Preload