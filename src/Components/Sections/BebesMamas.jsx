import seccBebes from "../../fotos/seccBebes.jpg";
import CardSections from "../Card/CardSections";
import { dataCardSections } from "../../Data/dataCardSections";
import { stylesSections } from "./stylesSections";

const {img, h1, containCompCard} = stylesSections;
const{bebesMamas} = dataCardSections;

const BebesMamas = () => {
    return (
        <div>
            <div>
                <img src={seccBebes} alt="seccion bebés" className={img}/>
                <h1 className={h1}>Categorías:</h1>
            </div>
            <div className={containCompCard}>
                {bebesMamas.map(item =>  <CardSections key={item.id} item={item} path={item.path}/>)}
            </div>
        </div>
    )
}

export default BebesMamas