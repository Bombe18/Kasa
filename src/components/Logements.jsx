import { getLogements } from "../scripts/logementsDatas.js";
import { Link } from 'react-router-dom';

function Logements() {
    return (
        <div className="cards_gallery">
            {getLogements().map((logement) => (
                <div key={logement.id} className="logement img_wrapper">
                    <Link to={`/product/${logement.id}`}>
                      <img className="cards-img" src={logement.cover} alt={logement.title} />
                      <h2 className="cards-title">{logement.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Logements