import { dataSections } from "../../Data/dataSections";
import ButtonCard from "./ButtonCard";


const Card = () => {
    return (

        <div className={container}>
            <a href="#">
                <img className={img} key={dataSections.cuidadoPersonal.id} src={dataSections.cuidadoPersonal[3].imagen} alt="product image" />
            </a>
            <div className={containerDescription}>
                <h4 className="font-semibold">{dataSections.cuidadoPersonal[3].nombre}</h4>
                <h5 className={description} key={dataSections.cuidadoPersonal.id}>{dataSections.cuidadoPersonal[3].descripcion}</h5>

                <div className={containerBuy}>
                    <span className={cart}>$599</span>
                    <ButtonCard button={button}/>
                </div>
            </div>
        </div>

    )
}

export default Card


const stylesCard = {
    container:"w-1/4 max-w-sm delay-150 bg-white rounded-lg shadow-lg hover:shadow-2xl",
    img:"p-8 border-b shadow-sm border-slate-50" ,
    containerDescription: "flex flex-col justify-between p-5",
    description: "text-sm font-semibold tracking-tighter text-gray-500",
    containerBuy: "flex items-center justify-between",
    cart: "text-2xl font-bold text-gray-900",
    button: "text-white bg-green-500 hover:bg-green-700  focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-2xl px-8 py-2.5 text-center delay-100"
}

const {container,img,containerDescription,description,containerBuy,cart,button} = stylesCard;