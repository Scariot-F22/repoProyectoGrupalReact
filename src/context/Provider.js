import { useReducer } from "react";
import { shoppingInitialState, shoppingReducer } from "../Cart/ShoppingReducer";
import CustomizeContext from "./Context";

const CustomizeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const material = {
    state,
    dispatch,
  };

  return (
    <CustomizeContext.Provider value={material}>
      {children}
    </CustomizeContext.Provider>
  );
};

export default CustomizeProvider;
