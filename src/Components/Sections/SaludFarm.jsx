import CardSections from "../Card/CardSections";
import { dataCardSections } from "../../Data/dataCardSections";
import { stylesSections } from "./stylesSections";


const {img, h1, containCompCard} = stylesSections;

const {saludFarmacia} = dataCardSections;
const SaludFarm = () => {
    return (
        <div>
            <div>
                <img src="https://www.ucsf.edu.ar/wp-content/uploads/2018/02/farmacia-ucsf.png" alt="seccion bebés" className={img} />
                <h1 className={h1}>Categorías:</h1>
            </div>
            <div className={containCompCard}>
                {saludFarmacia.map(item => <CardSections key={item.id} item={item}  path={item.path}/>)}
            </div>
        </div>
    )
}

export default SaludFarm