import { useEffect } from "react";
import CartItem from "./CartItem";
import { TYPES } from "../Cart/ShoppingAction";
import axios from "axios";
import { useCustomizeContext } from "../context/Context";
import { HiOutlineShoppingCart } from "react-icons/hi";

const ShoppingCart = () => {
  const { state, dispatch } = useCustomizeContext();
  const { cart } = state;

  const stateCart = async () => {
    let cartUrl = "http://localhost:5000/cart";
    let resCart = await axios.get(cartUrl);
    dispatch({ type: TYPES.READ_STATE_CART, payload: resCart.data });
  };

   useEffect(() => {
      stateCart()
   }, [])


  return (
    <div>
      <h1 className="flex mb-16 pt-44 lg:pt-36 ">
        <HiOutlineShoppingCart className="mx-6 text-3xl text-green-900" />
        <span className="text-3xl font-semibold">Mi Carrito de compras</span>
      </h1>
      { cart.length < 1 ?
       <h2 className="m-10 text-3xl font-light text-center text-teal-900 uppercase">Aún no tienes productos seleccionados en el carrito de compras</h2>
      :<article className="box">
        {cart.map((item, index) => (
          <CartItem
          key={index}
          data={item}
          />
          ))}
      </article>
}
    </div>
  );
};

export default ShoppingCart;