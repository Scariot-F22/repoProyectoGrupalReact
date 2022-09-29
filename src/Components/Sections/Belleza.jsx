import { dataCardSections } from '../../Data/dataCardSections';
import CardSections from "../Card/CardSections";
import seccBelleza from "../../fotos/seccBelleza.jpg";
import { stylesSections } from "./stylesSections";
import { Outlet } from 'react-router-dom';

const { img, h1, containCompCard } = stylesSections;
const { belleza } = dataCardSections;

const Belleza = () => {
  return (
    <div>
      <div>
        <img src={seccBelleza} alt="seccion bebés" className={img} />
        <h1 className={h1}>Categorías:</h1>
      </div>
      <div className={containCompCard}>
        {belleza.map(item => <CardSections key={item.id} item={item}  path={item.path}/>)}
      </div>

    </div>
  )
}

export default Belleza