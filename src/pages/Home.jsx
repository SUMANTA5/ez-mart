import React from "react";
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
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
    </div>
  );
};

export default Home;