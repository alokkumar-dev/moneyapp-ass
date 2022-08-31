import { GET_PRODUCTS } from "./ActionType";

const initState = {
  Data: [],
};

export const Reducer = (store = initState, { type, payload }) => {
    console.log("store", store)
  switch (type) {
    case GET_PRODUCTS:
      return { ...store, Data: payload };
    default:
      return store;
  }
};
