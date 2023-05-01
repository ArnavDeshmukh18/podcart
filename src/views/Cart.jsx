import React from 'react'
import Menu from '../widgets/Menu'
import Banner from '../widgets/Banner'
import Products from '../widgets/Products'
import Navbar from '../widgets/Navbar'
import CartProduct from '../widgets/CartProduct'
const Cart = () => {
  return (
    <div>
      <Navbar/>
      <div className='home mx-12 px-6 align-center '>
        <Menu/>
        <div className='bg-cardColor h-1' ></div>
        <span className='font-poppins font-semibold text-[52px] mx-12 '> Your Cart !</span>
          
            <CartProduct/>
        
        

    </div>
    </div>
    
  )
}

export default Cart