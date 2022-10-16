import { ADD_PRODUCT, DELETE_PRODUCT } from "./Actions";

//ADD Product
export function addProduct(product) {
    return {
      type: ADD_PRODUCT,
      product,
    };
  }

  //Delete Product

  export function deletePoduct(product) {
    return {
      type: DELETE_PRODUCT,
      product,
    };
  }
