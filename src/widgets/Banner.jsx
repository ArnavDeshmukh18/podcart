import React from "react";
import { banImg } from "../assets";
const Banner = () => {
  return (
    <div className="banner bg-bannerColor flex flex-row w-full items-center justify-evenly gap-12 rounded-[1.2rem] text-primary mt-4 mb-9">
      <div className="flex flex-col ">
        <h1 className="font-poppins font-semibold leading-[100%] text-[60px] ">
          <span >Grab Upto 50% off On</span>
          
          
          <br />
          <span className="text-[50px]">Selected Headphone</span>
        </h1>
        <br />
          <div>
          <button className="font-poppins bg-primary p-3 rounded-xl  text-white hover:bg-black">Buy Now</button>
          </div>        
       
      </div>
      <div >
        <img src={banImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
