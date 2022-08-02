import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/images/logo.PNG";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 h-20 border-b-3 shadow">
     <div className='flex mx-4'>
     <img className='w-12' src={logo} alt="logo" />
     <h2 className="flex justify-start text-2xl font-semibold mx-4">
       <span className="text-amber-400">E-</span> Shop
     </h2>
     </div>
      <div className="flex justify-center">
        <ul className="flex mx-8">
          <li className="mx-12">Men</li>
          <li className="mx-12">Women</li>
          <li className="mx-12">Kids</li>
        </ul>
      </div>
      <div>
        <ul className="flex mx-8 justify-end items-center">
          <li className="mx-4">
            <ImSearch size={22} />
          </li>
          <li className="mx-4">
            <MdOutlineShoppingCart size={22} />
          </li>
          <li className="mx-4">
            <FaRegUser size={22} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
