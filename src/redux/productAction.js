import { data } from "autoprefixer";
import { PRODUCT_LIST} from "./constant";
export const productList = () => {
    data = 'hello'
  console.log("call addtocart");
  return {
    type: PRODUCT_LIST,
    data,
  };
};