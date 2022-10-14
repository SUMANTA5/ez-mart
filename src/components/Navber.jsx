import React from "react";
import { BsCart3 } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

function Navber() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl cursor-pointer">EZ Mart</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900 text-xl cursor-pointer">Home</a>
            <a class="mr-5 hover:text-gray-900 text-xl cursor-pointer">
              product
            </a>
            <a class="mr-5 hover:text-gray-900 text-xl cursor-pointer">About</a>
            <a class="mr-5 hover:text-gray-900 text-xl cursor-pointer">
              contact
            </a>
          </nav>

          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <HiSearch size={25} />
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-sm rounded-full block w-full pl-10 p-2.5 "
                placeholder="Search"
                required
              />
            </div>
          </form>

          <nav class="contents">
            <ul class="ml-2 xl:w-48 flex items-center justify-end">
              <li class="ml-1 lg:ml-4 relative inline-block">
                <a class="" href="">
                  <BiUserCircle size={30} />
                </a>
              </li>
              <li class="ml-1 lg:ml-4 relative inline-block">
                <a class="" href="">
                  <div class="absolute -top-2 right-5  z-10 bg-yellow-400 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    30
                  </div>
                  <AiOutlineHeart size={30} />
                </a>
              </li>

              <li class="ml-1 lg:ml-4 relative inline-block">
                <a class="" href="">
                  <div class="absolute -top-2 right-5  z-10 bg-yellow-400 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    30
                  </div>
                  <BsCart3 size={30} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navber;
