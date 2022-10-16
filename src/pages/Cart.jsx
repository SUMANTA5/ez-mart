import React from "react";
import { useSelector } from "react-redux";

const Card = () => {
  const cartData = useSelector((state) => state.cartData);
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          {cartData.map((item) => (
            <div key={item.id} class="lg:w-4/5 mx-auto flex flex-wrap mt-6">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-30 h-30 object-cover w-100 h-96 object-fill rounded"
                src={item.image}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {item.category}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {item.title}
                </h1>

                <p class="leading-relaxed">{item.description}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div class="flex ml-6 items-center">
                    <div class="relative"></div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:text-blue-800 ml-3">
                      {item.rating.rate}
                    </span>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    ${item.price}
                  </span>
                  <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Button
                  </button>
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                Pricing
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Banh mi cornhole echo park skateboard authentic crucifix neutra
                tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
                twee
              </p>
            </div>
            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
              <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                      Category
                    </th>

                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-3">Start</td>

                    <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                  </tr>
                  <tr>
                    <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>

                    <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      $24
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-2 border-gray-200 px-4 py-3">
                      Business
                    </td>

                    <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      $50
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                      Exclusive
                    </td>

                    <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      $72
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              
              <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Card;
