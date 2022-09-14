import seccBebes from "../../fotos/seccBebes.jpg";
import CardSections from "./CardSections";
import { dataCardSections } from "./dataCardSections";


const{bebesMamas} = dataCardSections;
const BebesMamas = () => {
    return (
        <div>
            <div>
                <img src={seccBebes} alt="seccion bebés" className="h-full mb-12 lg:h-80"/>
                <h1 className="pl-2 mb-12 text-3xl font-semibold">Categorías:</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {bebesMamas.map(item =>  <CardSections key={item.id} item={item}/>)}
            </div>
            
        </div>
    )
}

export default BebesMamas