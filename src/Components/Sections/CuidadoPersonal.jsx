import CardSections from "./CardSections";
import { dataCardSections } from "../../Data/dataCardSections";
import seccCuidPers from "../../fotos/seccCuidPers.jpg";

const {cuidadoPersonal} = dataCardSections;
const CuidadoPersonal = () => {
    return (
        <div>
            <div>
                <img src= {seccCuidPers} alt="seccion bebés" className="h-full mb-12 lg:h-80 w-screen" />
                <h1 className="pl-2 mb-12 text-3xl font-semibold">Categorías:</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {cuidadoPersonal.map(item => <CardSections key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default CuidadoPersonal