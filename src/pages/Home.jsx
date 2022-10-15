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
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-10 justify-center items-center">
              {data.map((item) => (
                <div class="lg:w-1/5 md:w-1/2 p-6 w-full m-4 bg-white rounded-lg  dark:bg-gray-400 dark:border-gray-300">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img
                      class="object-fill object-center w-full h-full block"
                      src={item.image}
                      alt="product image"
                    />
                  </a>
                  <div class="mt-8">
                  
                    <h3 class="text-gray-900 text-xs tracking-widest title-font mb-1">
                      {item.category}
                    </h3>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:text-blue-800 ml-3">
                          {item.rating.rate}
                        </span>
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">
                          {item.title.slice(0, 20)}
                        </h5>
                    
                        <span class="text-3xl font-bold text-gray-900 ">
                          ${item.price}
                        </span>
                  </div>
                  <div className="mt-5">
                  <butto
                    onClick={() => dispatch(removeFromCart(item.id))}
                    class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                  >
                    Remove
                  </butto>
                  <butto
                    onClick={() => dispatch(addToCart(item))}
                    class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                  >
                    Add to cart
                  </butto>
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
