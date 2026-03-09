import Banner from "../../components/Banner";
import background from '../../assets/backgroundabout.jpg'
import '../../styles/_container1240.scss'
import Dropdown from "../../components/Dropdown";
import "./_about.scss"

export default function HomePage() {
    const backgroundImage = background;
    return (
        <>
            <main className="container-1240">
                <Banner image={backgroundImage} alt="Paysage de côte avec des falaises et des vagues" title="" />
                <div className="container-1024">
                    <Dropdown title="Fiabilité" items={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
                    <Dropdown title="Respect" items={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
                    <Dropdown title="Service" items={["La qualité du service est une priorité pour Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit emmpreinte de respect et de bienveillance."]} />
                    <Dropdown title="Sécurité" items={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />
                </div>
                </main>
        </>
    )
}