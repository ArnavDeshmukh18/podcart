import React, { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosCart,IoIosArrowDropupCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { podcart } from "../assets";
import { useNavigate } from "react-router";

const Menu = () => {
const navigate=useNavigate();
const [toggle,setToggle]=useState(false);
const onClickC=()=>{
  setToggle(!toggle);
}

const goto=()=>{
  navigate('/cart');
}

  return (
    <div className="menu flex flex-row items-center justify-between mt-3">
      <div className="flex flex-row items-center w-[300px] " onClick={navigate('/')}>
        <img src={podcart} alt="" />
      </div>
      <div className="flex flex-row items-center gap-7  text-[20px]">
        <button className="flex flex-row items-center gap-2" onClick={onClickC}>
          <div className="font-semibold">Category</div>

          {toggle?<IoIosArrowDropdownCircle />:<IoIosArrowDropupCircle />}
        </button>

        <div className="font-semibold">Deals</div>
        <div className="font-semibold">What's New</div>
        <div className="font-semibold">Delivery</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="searchBar relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search Product"
            class="border-4 h-10 px-10 pr-10 rounded-full text-sm focus:outline-none "
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <AiOutlineSearch />
          </button>
        </div>
        <div className="cart text-[20px]">
          <button className="flex flex-row items-center gap-2" onClick={goto}>
            <IoIosCart />
            <div className="font-semibold">Cart</div>
          </button>
        </div>
        <div className="account text-[20px]">
          <button className="flex flex-row items-center gap-2">
            <CgProfile />
            <div className="font-semibold">Account</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
