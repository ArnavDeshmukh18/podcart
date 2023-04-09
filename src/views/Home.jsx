import React from 'react'
import Menu from '../widgets/Menu'
import Banner from '../widgets/Banner'
import Products from '../widgets/Products'
import Navbar from '../widgets/Navbar'
const Home = () => {
 

  return (
    <div>
      <Navbar/>
      <div className='home mx-12 px-6 align-center '>
        <Menu/>
        <Banner/>


        <span className='font-poppins font-semibold text-[52px] mx-12 '> Headphones for You !</span>
          
          <Products/>
               
        
        

    </div>
    </div>
   
  )
}






export default Home