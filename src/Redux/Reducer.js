import { GET_CART, GET_FILTER_DATA, GET_PRODUCTS } from "./ActionType";

const initState = {
  Data: [],
  CartData: [],
  FilterData: [],
};

export const Reducer = (store = initState, { type, payload }) => {
  console.log("store", store);
  switch (type) {
    case GET_PRODUCTS:
      return { ...store, Data: payload, FilterData:payload };
    case GET_CART:
      return { ...store, CartData:[ ...store.CartData ,payload] };
    case GET_FILTER_DATA:
        return {...store, FilterData:[...filterData(store.Data, payload)]}
    default:
      return store;
  }
};

const filterData = (data, value) => {
  let newData;
  if (value == "Apple" || value == "Samsung") {
    newData = data.filter((e) => e.brand == value);
  }
  if (value == "") {
    newData = data;
  }
  return newData;
};
