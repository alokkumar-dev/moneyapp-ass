import { GET_PRODUCTS } from "./ActionType";

export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});
