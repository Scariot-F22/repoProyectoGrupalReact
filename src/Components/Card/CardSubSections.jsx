import ButtonCard from "./ButtonCard";


const CardSubSections = ({date}) => {
    const{name, description, image} = date;
    return (

        <div className={container}>
            <a href="#">
                <img className={img} src={image} alt={description} />
            </a>
            <div className={containerDescription}>
                <h4 className="font-semibold">{name}</h4>
                <h5 className={descr}>{description}</h5>
                <div className={containerBuy}>
                    <span className={cart}>$599</span>
                    <ButtonCard button={button}/>
                </div>
            </div>
        </div>

    )
}

export default CardSubSections


const stylesCard = {
    container:"w-1/4 max-w-sm delay-150 bg-white rounded-lg shadow-lg hover:shadow-2xl",
    img:"p-8 border-b shadow-sm border-slate-50" ,
    containerDescription: "flex flex-col justify-between p-5",
    descr: "text-sm font-semibold tracking-tighter text-gray-500",
    containerBuy: "flex items-center justify-between",
    cart: "text-2xl font-bold text-gray-900",
    button: "text-white bg-green-500 hover:bg-green-700  focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-2xl px-8 py-2.5 text-center delay-100"
}

const {container,img,containerDescription,descr,containerBuy,cart,button} = stylesCard;