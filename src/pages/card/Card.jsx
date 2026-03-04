import { getLogements } from "../../scripts/logementsDatas.js";
import { useParams, Navigate } from "react-router-dom"
import "./_cards.scss"
import "../../styles/_container1240.scss"
import Rating from "../../components/Rating.jsx"
import Dropdown from "../../components/Dropdown.jsx";


const Card = () => {
  const { id } = useParams()

  const logement = getLogements().find(l => l.id === id)

  if (!logement) {
    return <Navigate to="/notfound" />;
  }

  const scaleTag = (tags) => {
    return tags.map((tag, index) => (
      <span key={index} className="card__tag">{tag}</span>
    ))
  }

  return (
    <section className="cards container-1240">
      <div className="card">
        <img className="card__image" src={logement.cover} alt={logement.title} />

        <div className="appartment__info">
          <div className="appartment__location">
            <h2 className="card__title">{logement.title}</h2>
            <h3 className="card__location">{logement.location}</h3>
          </div>

          <div className="card__host">
            <div className="card__host_name">{logement.host.name}</div>
            <img
              className="host__picture"
              src={logement.host.picture}
              alt={"photo de " + logement.host.name}
            />
          </div>
        </div>

        <div className="card__Tags_And_Rating">
          <div className="card__tags-list">{scaleTag(logement.tags)}</div>
          <div className="card__rating">
            <Rating scaleValue={logement.rating} />
          </div>
        </div>

        <div className="card__info">
            <Dropdown
              title="Description"
              items={[logement.description]}
            />
          <div className="card__equipement">
            <ul className="card__equipments_list">
              <Dropdown
                title="Équipements"
                items={logement.equipments}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card