import { HiOutlineShoppingCart } from "react-icons/hi";
import { TYPES } from "../../Cart/ShoppingAction";
import { useCustomizeContext } from "../../context/Context";

const ButtonCard = ({ button,  id }) => {

  const {dispatch} = useCustomizeContext();

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <button className={button} onClick={() => addToCart(id)}>
      <HiOutlineShoppingCart />
    </button>
  );
};

export default ButtonCard;