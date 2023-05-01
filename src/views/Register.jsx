import React, { useState } from "react";
import { podcart } from "../assets";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../model/Firebase";
import { doc, setDoc } from "firebase/firestore";
const Register = () => {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
  };

  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setusername(e);
  };

  const onChangeEmail = (e) => {
    setEmail(e);
  };

  const onChangePassword = (e) => {
    setPassword(e);
  };

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.clear();
        localStorage.setItem("user", user.uid);
        
        const userDocRef = doc(db, "users", user.uid);
        const data = {
          username: username,
          email: email,
          cart: [],
          orders: [],
          data: Date().toLocaleString(),
        };
        setDoc(userDocRef, data)
          .then((userDocRef) => {
            console.log("User Added Succesfully");
          })
          .catch((err) => console.log(err));

        navigate("/");
      })
      .catch((err) => {console.log(err)});
  };

  return (
    <div className="register h-full">
      <div className="mt-48 flex flex-col md:flex-row mx-auto items-center justify-center gap-10 ">
        <div className="left">
          <img src={podcart} className="w-60" alt="" />
        </div>
        <div className="right bg-cardColor p-8 rounded-lg flex flex-col items-center justify-center">
          <form action="" className="flex flex-col" onSubmit={signup}>
            <input
              className="email px-6 h-10 my-2 border-2 rounded-[6px]"
              type="username"
              placeholder="Username"
              onChange={(e) => onChangeUsername(e.target.value)}
            />
            <input
              className="email px-6 h-10 my-2 border-2 rounded-[6px]"
              type="email"
              placeholder="Email"
              onChange={(e) => onChangeEmail(e.target.value)}
            />
            <input
              className="password px-6 h-10 my-2 border-2 rounded-[6px]"
              type="password"
              placeholder="Password"
              onChange={(e) => onChangePassword(e.target.value)}
            />
            <button
              className="login py-2 my-2 rounded-[6px] bg-primary text-white font-bold hover:bg-black"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <span className="text-blue-600 my-2 text-center cursor-pointer hover:underline ">
            Already Have Account ?
          </span>
          <hr className="bg-black " />
          <button
            className="bg-green-600 text-white my-2 py-3 px-6 font-bold w-fit  justify-center"
            onClick={Login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
