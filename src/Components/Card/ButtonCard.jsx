import { HiOutlineShoppingCart, HiPlus } from "react-icons/hi";
import { TYPES } from "../../Cart/ShoppingAction";
import { useCustomizeContext } from "../../context/Context";
import axios from "axios";

const ButtonCard = ({ button, date }) => {
  const { dispatch } = useCustomizeContext();
  let { quantity } = date;
  const stateCart = async () => {
    let cartUrl = "http://localhost:5000/cart";
    let resCart = await axios.get(cartUrl);
    dispatch({ type: TYPES.READ_STATE_CART, payload: resCart.data });
  };

  const addToCart = async (date) => {
    date.id = Date.now();
    date["quantity"] = 1;
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(date),
    };
    await axios("http://localhost:5000/cart", options);
    stateCart();
  };

  const editQuantity = async (date) => {
    let { id } = date;
    date.quantity++;
    let ENDPOINT = `http://localhost:5000/cart/${id}`;
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(date),
    };
    await axios(ENDPOINT, options);
    stateCart();
  };
  return (
    <>
      {quantity ? (
        <div className="flex items-center justify-between p-1 m-5 text-lg bg-green-500 rounded-md border-x border-y w-14 hover:bg-green-700 focus:ring-2 focus:ring-blue-300">
          <p className="text-white">{quantity}</p>
          <button
            className="text-white hover:text-green-500"
            onClick={() => editQuantity(date)}
          >
            <HiPlus />
          </button>
        </div>
      ) : (
        <button className={button} onClick={() => addToCart(date, alert('producto añadido exitosamente al carrito de compras'))}>
          <HiOutlineShoppingCart />
        </button>
      )}
    </>
  );
};

export default ButtonCard;
