import React, { useState, useEffect } from 'react'
import { db } from '../model/Firebase'
import { getDocs, collection,getDoc,doc, arrayRemove,updateDoc } from "firebase/firestore";


const CartProduct = () => {
    
    const [loading, setLoading] = useState(false);
    const userId=localStorage.getItem('user')
   
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProductList();
    }, []);
    const getProductList = async () => {
      setLoading(true);
      const docRef=doc(db,"users",userId);
      const docSnap=await getDoc(docRef);
    //  console.log(docSnap.data().cart);
      setProducts(docSnap.data().cart)
      setLoading(false)
    };
 

    const getProduct = async(e,product) => {
      try{
          
          e.preventDefault();
          const userId=localStorage.getItem("user")
          const productRef=doc(db,"users",userId);
          await updateDoc(productRef,{
          cart:arrayRemove(product)                
          })
        
          window.location.reload(false);
         
          
      }catch(err)
      {
          console.log(err)
      }
  }
    
    const results = [];
    products.forEach((product, index) => {
        results.push(

            <div className="card flex flex-col  rounded-xl  gap-2" key={product.name}>
                <div className="flex flex-col  bg-cardColor rounded-xl" >
                    <img src={product.url} alt="" className="object-contain h-[300px] scale-75 hover:scale-90" />
                </div>
                <div className="flex flex-row justify-between mx-1 items-center mt-2 gap-3">
                    <h1 className="font-poppins font-semibold text-[20px]">{product.name}</h1>
                    <h2 className="font-poppins font-semibold text-[22px]">${product.price}</h2>

                </div>
                <div className="flex flex-col gap-3">

                    <h2 className="font-poppins text-gray-500">Table with air purifier,stained veneer/black</h2>
                    <button className=" font-poppins hover:bg-primary border-2 hover:text-white border-black rounded-xl p-3" onClick={e => getProduct(e,product)}>Remove to Cart</button>
                  

                </div>


            </div>

        );
    });



  return <div>{loading ? <div>Loading</div> : <div className='grid grid-cols-4 gap-9 py-10 my-8 mx-9 px-9'>{results}</div>}</div>;
}

export default CartProduct