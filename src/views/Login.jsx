import React,{useState} from 'react'
import { podcart } from '../assets'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router'
import { auth } from '../model/Firebase'
const Login = () => {
    const navigate=useNavigate();
    const Signup=()=>{
        navigate('/register');
    }


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const onChangeEmail=(e)=>{
        setEmail(e)
    }

    const onChangePassword=(e)=>{
        setPassword(e)
    }

  const loggedIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          localStorage.clear();
          localStorage.setItem("user",user.id);
        
          navigate("/");
      })
      .catch((error) => {
         console.log(err)
      });

  }

  return (
    <div className='login h-full'>
         <div className="mt-48 flex flex-col md:flex-row mx-auto items-center justify-center ">
        <div className="left">
          <img src={podcart} className="w-60" alt="" />
        </div>
        <div className="right bg-cardColor p-8 rounded-lg flex flex-col items-center justify-center">
          <form action="" className="flex flex-col "  onSubmit={loggedIn}>
            <input
              className="email px-6 h-10 my-2 border-2 rounded-[6px]"
              type="email"
              placeholder="Email"
              onChange={e=>onChangeEmail(e.target.value)}
            />
            <input
              className="password px-6 h-10 my-2 border-2 rounded-[6px]"
              type="password"
              placeholder="Password"
              onChange={e=>onChangePassword(e.target.value)}
            />
            <button className="login py-2 my-2 rounded-[6px] bg-primary text-white font-bold hover:bg-black" type='submit'>
              Log In
            </button>
          </form>
          <span className="text-blue-600 my-2 text-center cursor-pointer hover:underline ">
            Forgotten Password?
          </span>
          <hr className="bg-black " />
          <button className="bg-green-600 text-white my-2 py-3 px-6 font-bold w-fit  justify-center" onClick={Signup}>
            Create New Account
          </button>
        </div>
      </div>


    </div>
  )
}

export default Login