import { getLogements } from "../Scripts/logementsDatas"    

function Logements() {
    return (
        <div className="logements">
            {getLogements().map((logement) => (
                <div key={logement.id} className="logement">
                    <a href="#"><img className="logement-img" src={logement.cover} alt={logement.title} />
                    <h2 className="logement-title">{logement.title}</h2>
                </a></div>
            ))}
        </div>
    )
}

export default Logements