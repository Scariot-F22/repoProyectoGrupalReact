import { TYPES } from "./ShoppingAction";

export const shoppingInitialState = {
  cuidadoOral: [],
  cabello: [],
  higienePersonal: [],
  adultos: [],
  perfumeria: [],
  electro: [],
  maquillaje: [],
  cuidadoDePiel: [],
  accesoriosBebes: [],
  higieneBebe: [],
  maternidad: [],
  nutricionInfantil: [],
  nutricionDeportes: [],
  electroSalud: [],
  farmacia: [],
  saludSexual: [],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE_PRODUCTS:
      return {
        ...state,
        cuidadoOral: action.payload,
        cabello: action.payload,
        higienePersonal: action.payload,
        adultos: action.payload,
        perfumeria: action.payload,
        electro: action.payload,
        maquillaje: action.payload,
        cuidadoDePiel: action.payload,
        accesoriosBebes: action.payload,
        higieneBebe: action.payload,
        maternidad: action.payload,
        nutricionInfantil: action.payload,
        nutricionDeportes: action.payload,
        electroSalud: action.payload,
        farmacia: action.payload,
        saludSexual: action.payload,
      };
    case TYPES.READ_STATE_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case TYPES.ADD_TO_CART: {
      let newItem = state.cuidadoOral.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      console.log(itemToDelete)
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
