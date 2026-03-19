import { useState } from "react";
import vector from "../assets/Vector.png"
import "../styles/_dropdown.scss"
import { getCustomClass } from "./../scripts/utils.js"

export default function Dropdown({ title, items = [], variant }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`} >
      <button
        className={`dropdown__button ${getCustomClass(variant)}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`dropdown__arrow ${isOpen ? "open" : ""}`}>
          <img className="loader" src={vector} alt="arrow" />
        </span>
      </button>

      <div className={`dropdown__background ${isOpen ? "open" : ""}`} />
      <ul className={`dropdown__content ${isOpen ? "open" : ""}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
