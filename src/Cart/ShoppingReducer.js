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
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
