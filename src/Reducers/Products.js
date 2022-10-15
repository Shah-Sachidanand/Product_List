import { ADD_PRODUCT } from "../Actions/Actions";

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
        default:
      return state;
    }
}