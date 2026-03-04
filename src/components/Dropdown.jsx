import { useState } from "react";
import vector from "../assets/Vector.png"
import "../styles/_dropdown.scss"

export default function Dropdown({ title, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`} >
      <button
        className="dropdown__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`dropdown__arrow ${isOpen ? "open" : ""}`}>
          <img className="loader" src={vector} alt="arrow" />
        </span>
      </button>

      {isOpen && (
<div className="dropdown__background">
        <ul className="dropdown__content">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}