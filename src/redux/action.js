import {ADD_TO_CART} from './constant'
export const addToCart = (data) => {
console.log("call addtocart",data)
   return {
    type: ADD_TO_CART,
    data
   }
}