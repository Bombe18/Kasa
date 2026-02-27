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
                    <div className="appartment__info">
                        <div className="appartment__location">
                            <h2 className="card__title">{logement.title}</h2>
                            <h3 className="card__location">{logement.location}</h3>
                        </div>

                        <div>
                            <div className="card__host">
                                <div className="card__host_name">{logement.host.name}</div>
                                <div ><img className="host__picture" src={logement.host.picture} alt={"photo de " + logement.host.name} /></div>
                            </div></div>
                    </div>

                    <div >
                        <div className="card__Tags_And_Rating">
                            <div className="card__tags-list">{scaleTag(logement.tags)}</div>

                            <div className="card__rating"><Rating scaleValue={logement.rating} /></div>
                        </div>
                    </div>

                    <div className="card__info">
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