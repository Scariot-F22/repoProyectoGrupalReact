import { HiMinus, HiPlus, HiTrash } from "react-icons/hi";
import axios from "axios";
import { useCustomizeContext } from "../context/Context";
import { TYPES } from "./ShoppingAction";

const CartItem = (data) => {
  const DATA = data.data
  let { name, price, quantity, image, description } = DATA;
  const {dispatch} = useCustomizeContext();
  const stateCart = async () => {
    let cartUrl = "http://localhost:5000/cart";
    let resCart = await axios.get(cartUrl);
    dispatch({ type: TYPES.READ_STATE_CART, payload: resCart.data });
  };

  const editQuantity = async (DATA)=> {
    let {id} = DATA
    console.log(DATA)
    DATA.quantity++
    let ENDPOINT = `http://localhost:5000/cart/${id}`;
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json"},
      data: JSON.stringify(DATA)
     }
    await axios(ENDPOINT, options)
    stateCart();
  }

  const deleteFromCart = async (DATA) =>{
    const{id, description}= DATA;
    if (quantity > 1) {
      DATA.quantity--
      let ENDPOINT = `http://localhost:5000/cart/${id}`;
      const options = {
        method: "PUT",
        headers: { "content-type": "application/json"},
        data: JSON.stringify(DATA)
       }
      await axios(ENDPOINT, options)
      stateCart();
    } else {
      let deleteProduct = window.confirm(`Esta seguro que quiere eliminar el producto: "${description}" del carrito?`);
      const ENDPOINT = `http://localhost:5000/cart/${id}`;
      const options = {
      method: "DELETE",
      headers: {"content-type": "application/json"}
    };
    deleteProduct && await axios(ENDPOINT, options)
    stateCart();
    }
  };
  
  return (
    <div className="flex justify-center md:justify-end">
      <div className={containerCart}>
        <img
          className={img}
          src={image}
          alt="imagen de producto"
        />
        <div className={containerInfoCart}>
          <div>
            <h2 className={nameCartItem}>
              {name}
            </h2>
            <h4 className={descriptionName}>{description}</h4>
          </div>

          <button className="text-sm underline">
            Eliminar todos los productos
          </button>
        </div>
        <div className={buttonCount}>
          {quantity > 1 ?
          <button>
            <HiMinus className={iconStyle} onClick={()=> deleteFromCart(DATA)}/>
          </button>
         : 
         <HiTrash className={iconStyle} onClick={()=> deleteFromCart(DATA)} />
          }
          <p>{quantity}</p>
          <button>
            <HiPlus className={iconStyle} onClick={()=> editQuantity(DATA)}/>
          </button>
        </div>
        <div className={calcPrice}>
          <span className="text-2xl font-bold ">$ {price}</span>
          <span className="pb-2">Total: ${price * quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

const staylesCartItem ={
  containerCart: "flex flex-col items-center justify-center rounded-lg border shadow-md md:flex-row md:justify-between md:max-w-4xl m-12 h-screen md:h-full hover:bg-green-50 w-full",
  img: "object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
  containerInfoCart: "flex flex-col justify-evenly text-center md:text-start md:justify-between items-center md:items-start p-4 leading-normal h-48 ",
  nameCartItem: "mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase",
  descriptionName: "mb-3 font-normal text-gray-700 w-5/6",
  buttonCount: "border-x border-y border-black flex justify-between w-28 p-1 text-lg items-center rounded-md",
  calcPrice: "flex flex-col items-center p-0 md:p-4",
  iconStyle: "hover:text-green-500"
}

const {containerCart, img, containerInfoCart, nameCartItem, descriptionName, buttonCount, calcPrice, iconStyle} = staylesCartItem