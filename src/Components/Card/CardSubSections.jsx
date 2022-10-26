import ButtonCard from "./ButtonCard";

const CardSubSections = ({ date }) => {
  const { name, description, image, id, price } = date;
  return (
    <div className={container}>
      <a href="#">
        <img className={img} src={image} alt={description} />
      </a>
      <div className={containerDescription}>
        <h4 className="font-semibold uppercase">{name}</h4>
        <h5 className={descr}>{description}</h5>
        <div className={containerBuy}>
          <span className={cart}>${price}</span>
          <ButtonCard id={id} button={button} date={date} />
        </div>
      </div>
    </div>
  );
};

export default CardSubSections;

const stylesCard = {
  container:
    "w-3/5 max-w-sm delay-150 bg-white rounded-lg shadow-md hover:shadow-xl my-14 min-h-cover",
  img: "p-8 border-b shadow-sm border-slate-50",
  containerDescription: "flex flex-col justify-between p-4 h-max",
  descr: "text-sm font-semibold tracking-tighter text-gray-500",
  containerBuy: "flex items-center justify-between",
  cart: "text-xl font-bold text-gray-700 font-medium",
  button: "text-white bg-green-500 hover:bg-green-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-2xl px-8 py-2.5 mt-5 text-center delay-100 shrink",
};

const {
  container,
  img,
  containerDescription,
  descr,
  containerBuy,
  cart,
  button,
} = stylesCard;
