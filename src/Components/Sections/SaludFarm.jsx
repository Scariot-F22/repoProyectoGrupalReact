import CardSections from "./CardSections";
import { dataCardSections } from "../../Data/dataCardSections";

const {saludFarmacia} = dataCardSections;
const SaludFarm = () => {
    return (
        <div>
            <div>
                <img src="https://www.ucsf.edu.ar/wp-content/uploads/2018/02/farmacia-ucsf.png" alt="seccion bebés" className="h-full mb-12 lg:h-80 w-screen" />
                <h1 className="pl-2 mb-12 text-3xl font-semibold">Categorías:</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {saludFarmacia.map(item => <CardSections key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default SaludFarm