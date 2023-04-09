import React from 'react'
import { BsTelephone } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className='navbar bg-primary text-white gap-12 py-2 flex flex-row justify-evenly '>
        <div className='flex flex-row items-center gap-3'>
            <BsTelephone/>
         +91-1234567890
        </div>
        <div className='flex flex-row items-center gap-4'>
            <div>Get 50% Off on Selected Items</div>
            <div> | </div>
            <div>Shop Now</div>

        </div>
        <div className='flex flex-row items-center gap-2'>
            <div>12 March 2023</div>
            
        </div>

    </div>
  )
}

export default Navbar