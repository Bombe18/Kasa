import Banner from "../../components/Banner";
import background from '../../assets/backgroundAbout.jpg'
import '../../styles/_container1240.scss'
import Dropdown from "../../components/Dropdown";
import "./_about.scss"


export default function HomePage() {
    
    return (
        <>
            <main className="container-1240">
                <Banner image={background}
                variant="about-background" 
                alt="Paysage de montagnes avec un lac gelé en son centre" title="" />
                <div className="container-1024">
                    <Dropdown title="Fiabilité"
                     variant="about-dropdown"
                      items={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]} />
                    
                    <Dropdown title="Respect"
                     variant="about-dropdown"
                      items={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]} />
                    
                    <Dropdown title="Service"
                     variant="about-dropdown" 
                     items={["La qualité du service est une priorité pour Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit emmpreinte de respect et de bienveillance."]} />
                    
                    <Dropdown title="Sécurité"
                     variant="about-dropdown" 
                     items={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]} />
                </div>
            </main>
        </>
    )
}