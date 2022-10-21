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
    dispatch({ type: TYPES.READ_STATE_CART, payload: resCart.data }); //desde ShoppingCart
  };

  //  useEffect(() => {
  //     stateCart()
  //  }, [])

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h3 className="pt-44 lg:pt-36 flex ">
        <HiOutlineShoppingCart className="mx-2 text-3xl" />{" "}
        <span className="text-2xl">Mi Carrito de compras</span>{" "}
      </h3>
      <article className="box">
        {/* <button onClick={()=> clearCart()}>Limpiar Carrito</button> */}
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delFromCart={delFromCart}
            addToCart={addToCart}
          />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;