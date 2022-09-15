import {dataCardSections} from '../../Data/dataCardSections';
import CardSections from "./CardSections";
import seccBelleza from "../../fotos/seccBelleza.jpg"

const {belleza} = dataCardSections;
const Belleza = () => {
  return (
    <div>
            <div>
                <img src={seccBelleza} alt="seccion bebés" className="h-full mb-12 lg:h-80 w-screen object-bottom"/>
                <h1 className="pl-2 mb-12 text-3xl font-semibold">Categorías:</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {belleza.map(item =>  <CardSections key={item.id} item={item}/>)}
            </div>
            
        </div>
  )
}

export default Belleza