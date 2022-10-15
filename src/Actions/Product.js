import { ADD_PRODUCT } from "./Actions";

export function addProduct(product) {
    return {
      type: ADD_PRODUCT,
      product,
    };
  }