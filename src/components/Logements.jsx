import { getLogements } from "../scripts/logementsDatas.js";
import { Link } from 'react-router-dom';

function Logements() {
    return (
        <div className="logements">
            {getLogements().map((logement) => (
                <div key={logement.id} className="logement img_wrapper">
                    <Link to={`/card/${logement.id}`}>
                      <img className="logement-img" src={logement.cover} alt={logement.title} />
                      <h2 className="logement-title">{logement.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Logements