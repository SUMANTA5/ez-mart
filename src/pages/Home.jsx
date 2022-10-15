import React, { useEffect } from "react";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData);
  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>

      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-2 py-1 mx-auto ">
            <div class="flex flex-wrap ml-20">
              {data.map((item) => (
                <div key={item.id} class="p-4 md:w-1/3">
                  <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        class="p-3 rounded-t-sm object-fill h-48 w-96"
                        src={item.image}
                        alt="product image"
                      />
                    </a>
                    <div class="px-5 pb-5">
                      <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          {item.title.slice(0, 20)}
                        </h5>
                      </a>
                      <div class="flex items-center mt-2.5 mb-5">
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {item.rating.rate}
                        </span>
                      </div>
                      <div class="flex justify-between items-center">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">
                          ${item.price}
                        </span>
                        <butto
                          onClick={() => dispatch(removeFromCart(item.id))}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                        >
                          Remove
                        </butto>
                        <butto
                          onClick={() => dispatch(addToCart(item))}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                        >
                          Add to cart
                        </butto>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
