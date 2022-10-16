import { ADD_PRODUCT, DELETE_PRODUCT } from "../Actions/Actions";

// initial product state
const initialState = {
    products: [],
  };

  export function products(state = initialState, action) {
    switch (action.type) {
      //add product
      case ADD_PRODUCT:
        return{
            products: [...state.products, action.product],
            flag: false
        };
        case DELETE_PRODUCT:
          let filtered = state.products.filter((product) => product.key !== action.product.key);
          return {
            flag: false,
            products: filtered,
          };
        default:
      return state;
    }
} 