import { ADD_TO_CART,REMOVE_FROM_CART } from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer call", action);
      return [action.data, ...data];

      case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART Reducer call", action);
      data.length = data.length-1
      return [...data];


    default:
      return data;
  }
};
