import { useLoaderData } from "react-router-dom";
import "./_product.scss";
import "../../styles/_container1240.scss";
import Rating from "../../components/Rating.jsx";
import Dropdown from "../../components/Dropdown.jsx";
import ProductSlider from "../../components/ProductSlider.jsx";

const Product = () => {
  const logement = useLoaderData();

  const scaleTag = (tags) =>
    tags.map((tag, index) => (
      <span key={index} className="product__tag">
        {tag}
      </span>
    ));

  return (
    <section className="products container-1240">
      <div className="product">
        <ProductSlider
          pictures={logement.pictures}
          title={logement.title}
        />

        <div className="appartment__info">
          <div className="appartment__location">
            <h2 className="product__title">{logement.title}</h2>

            <div className="location-and-tags">
              <h3 className="product__location">
                {logement.location}
              </h3>
              <div className="product__tags-list">
                {scaleTag(logement.tags)}
              </div>
            </div>
          </div>

          <div className="product__host">
            <div className="host__name-and-picture">
              <div className="product__host_name">
                {logement.host.name}
              </div>
              <img
                className="host__picture"
                src={logement.host.picture}
                alt={`photo de ${logement.host.name}`}
              />
            </div>

            <div className="product__rating">
              <Rating scaleValue={logement.rating} />
            </div>
          </div>
        </div>

        <div className="product__descr_equipm_dropdown">
          <Dropdown
            title="Description"
            items={[logement.description]}
          />

          <Dropdown
            title="Équipements"
            items={logement.equipments}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;