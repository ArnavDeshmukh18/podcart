import React, { useEffect, useState } from "react";
import { headphone } from "../assets";
import { useLocation,useNavigate } from "react-router";
import { db } from "../model/Firebase";
import { doc, updateDoc, addDoc, collection } from "firebase/firestore";

const Product = () => {
  const product = useLocation();
  const navigate=useNavigate();

  const [items, setItems] = useState(1);
  const addItem = (e) => {
    if (e >= 1 && e < 10) {
      setItems(e + 1);
    }
  };
  const subItem = (e) => {
    if (e > 1) {
      setItems(e - 1);
    }
  };

  const docRef = doc(db, "products", product.state.id);
  const soldDocRef = collection(db, "soldproducts");

  const buynow = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("user");

    updateDoc(docRef, {
      count: product.state.count - items,
    })
      .then((docRef) => {
        addDoc(soldDocRef, {
          userId: userId,
          count: items,
          pricePaid: product.state.price * items,
          productName: product.state.name,
          date: Date().toLocaleString(),
          productUrl: product.state.url,
        })
          .then((soldDocRef) => {
            console.log("Item Added");
          })
          .catch((err) => console.log(err));

        setItems(1);
        console.log("Item Sold");
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="product flex flex-row mt-14 gap-12 ">
      <div className="bg-cardColor w-[50%] relative  rounded-3xl ">
        <img
          src={product.state.url}
          alt=""
          className=" mx-auto   w-[50%]  mt-5 "
        />
      </div>
      <div className="flex flex-col text-left ml-7  justify-evenly">
        <h1 className="font-poppins font-semibold text-[52px] mb-5">
          {product.state.name}
        </h1>
        <span className="font-poppins text-gray-500">
          a perfect balance of exhilarating high-fidelity audio and the
        </span>

        <span className="font-poppins text-gray-500">
          effortless magic of AirPods
        </span>
        <div className="flex flex-row items-center mt-4">
          ⭐⭐⭐⭐<div className="text-[20px]">☆</div> <div>(121)</div>
        </div>
        <div className="bg-cardColor h-1 my-3 w-[150%]"></div>
        <div className="font-poppins flex flex-col text-left">
          <h1 className=" text-[42px]">
            $ {`${product.state.price * items}`} or $99.00/month
          </h1>
          <span className="text-gray-500">
            Suggested payments with 6 months special financing
          </span>
        </div>
        <div className="bg-cardColor h-1 my-4 w-[135%]"></div>
        <div className="flex flex-row text-primary rounded-xl bg-cardColor w-[30%] text-[30px] justify-evenly p-1 ">
          <button onClick={(e) => subItem(items)}>-</button>
          {items}
          <button onClick={(e) => addItem(items)} className="text-primary ">
            +
          </button>
        </div>
        <div className="font-poppins flex flex-col text-left gap-1 mt-1 mx-1">
          <h1 className=" text-[18px]">
            Only <span className="text-yellow-500">{product.state.count} Items</span> left
          </h1>
          <span className="text-gray-500">Don't Miss It</span>
        </div>
        <div className="bg-cardColor h-1 mt-3 w-[150%]"></div>
        <div className="flex flex-row justify-evenly items-center my-9 gap-2">
          <button
            className="font-poppins bg-primary text-white hover:bg-black border-2  border-black rounded-xl p-3 px-20"
            onClick={(e) => buynow(e)}
          >
            Buy Now
          </button>
          <button className="font-poppins hover:bg-cardColor border-2 hover:text-gray-500 border-black rounded-xl p-3 px-20">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
