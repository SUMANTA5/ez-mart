import { ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART } from "./constant";
export const addToCart = (data) => {
  console.log("call addtocart", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("Remove from cart action", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
   console.log("emptyCart action");
   return {
     type: EMPTY_CART,
   };
 };
