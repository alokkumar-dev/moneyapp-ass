import { GET_CART, GET_FILTER_DATA, GET_PRODUCTS } from "./ActionType";

export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});
export const getCart = (payload) => ({
  type: GET_CART,
  payload,
});
export const getFilterData = (payload) => ({
  type: GET_FILTER_DATA,
  payload,
});
