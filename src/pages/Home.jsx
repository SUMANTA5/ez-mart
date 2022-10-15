import React from "react";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);
  console.log("redux data in Home", data);

  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.id))}>
          Remove frome cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>

      <div>
        <button onClick={() => dispatch(productList())}>get produc List</button>
      </div>
    </div>
  );
};

export default Home;
