import React from "react";
import { BsCart3 } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import {useSelector} from 'react-redux'

function Navber() {

  const result = useSelector((state)=>state.cartData)
  console.log("redux data in nav", result)

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl cursor-pointer">EZ Mart</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 text-xl cursor-pointer">Home</a>
            <a className="mr-5 hover:text-gray-900 text-xl cursor-pointer">
              product
            </a>
            <a className="mr-5 hover:text-gray-900 text-xl cursor-pointer">About</a>
            <a className="mr-5 hover:text-gray-900 text-xl cursor-pointer">
              contact
            </a>
          </nav>

          <form className="flex items-center">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <HiSearch size={25} />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-sm rounded-full block w-full pl-10 p-2.5 "
                placeholder="Search"
                required
              />
            </div>
          </form>

          <nav className="contents">
            <ul className="ml-2 xl:w-48 flex items-center justify-end">
              <li className="ml-1 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <BiUserCircle size={30} />
                </a>
              </li>
              <li className="ml-1 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-2 right-5  z-10 bg-yellow-400 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    30
                  </div>
                  <AiOutlineHeart size={30} />
                </a>
              </li>

              <li className="ml-1 lg:ml-4 relative inline-block">
                <a className="" href="">
                  <div className="absolute -top-2 right-5  z-10 bg-yellow-400 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {result.length}
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
