import logements from "../data/logements.json"
import "../styles/_cards.scss"
import "../styles/_container1240.scss"
import Rating from "./Rating.jsx"

const Cards = () => {
    const scaleTag = (tags) => {
        return tags.map((tag, index) => (
            <span key={index} className="card__tag">{tag}</span>
        ))
    }
    return (
        <section className="cards container-1240">
            {logements.map((logement) => (
                <div className="card" key={logement.id}>
                    <img className="card__image" src={logement.cover} alt={logement.title} />
                    <h2 className="card__title">{logement.title}</h2>
                    <div className="card__location">{logement.location}</div>
                    <div className="card__host">
                        <div className="card__host_name">{logement.host.name}</div>
                        <div className="card__rating"><Rating scaleValue={logement.rating} /></div>
                        <div className="card__tags">
                            <div className="card__tags-list">{scaleTag(logement.tags)}</div>
                        </div>
                    </div>
                    <div className="card_info">
                        <div className="card__description">{logement.description}</div>
                        <div className="card__equipement">
                            <ul className="card__equipments_list">
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>

            ))}
        </section>
    )
}

export default Cards