import { PRODUCT_LIST, PRODUCT_SEARCH } from "./constant";
export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};


export const productSearch = (query) => {
  return {
    type: PRODUCT_SEARCH,
    query
  };
};