import CardSections from "../Card/CardSections";
import { dataCardSections } from "../../Data/dataCardSections";
import seccCuidPers from "../../fotos/seccCuidPers.jpg";
import { stylesSections } from "./stylesSections";

const {img, h1, containCompCard} = stylesSections;

const {cuidadoPersonal} = dataCardSections;
const CuidadoPersonal = () => {
    return (
        <div>
            <div>
                <img src= {seccCuidPers} alt="seccion bebés" className={img} />
                <h1 className={h1}>Categorías:</h1>
            </div>
            <div className={containCompCard}>
                {cuidadoPersonal.map(item => <CardSections key={item.id} item={item}  path={item.path}/>)}
            </div>
        </div>
    )
}

export default CuidadoPersonal