import React, { useState, useEffect } from 'react'
import { db } from '../model/Firebase'
import { addDoc,getDocs, collection,arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router';

const Products = () => {

    const [loading, setLoading] = useState(false);
    const productCollectionRef = collection(db, "products");
    useEffect(() => {
        getProductList();
    }, []);

    const cartCollectionRef=collection(db,"cart");
    const [products, setProducts] = useState([]);
    const getProductList = async () => {
        try {
            const data = await getDocs(productCollectionRef);
            setLoading(true);

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
           console.log(filteredData);

            setProducts(filteredData);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };
    const getProduct = async(e,product) => {
        try{
            
            e.preventDefault();
            const userId=localStorage.getItem("user")
            const productRef=doc(db,"users",userId);
            await updateDoc(productRef,{
            cart:arrayUnion(product)                
            })
            

           
            
        }catch(err)
        {
            console.log(err)
        }
    }
    const navigate=useNavigate();

    const getPro=(product)=>{
        
        navigate(`/product/${product.id}`,{state: product})
    }

    const results = [];
    products.forEach((product, index) => {
        results.push(

            <div className="card flex flex-col  rounded-xl  gap-2">
                <div className="flex flex-col  bg-cardColor rounded-xl" onClick={e=>getPro(product)}>
                    <img src={product.url} alt="" className="object-contain h-[300px] scale-75 hover:scale-90" />
                </div>
                <div className="flex flex-row justify-between mx-1 items-center mt-2 gap-3">
                    <h1 className="font-poppins font-semibold text-[20px]">{product.name}</h1>
                    <h2 className="font-poppins font-semibold text-[22px]">${product.price}</h2>

                </div>
                <div className="flex flex-col gap-3">

                    <h2 className="font-poppins text-gray-500">Table with air purifier,stained veneer/black</h2>
                    <button className=" font-poppins hover:bg-primary border-2 hover:text-white border-black rounded-xl p-3" onClick={e => getProduct(e,product)}>Add to Cart</button>

                </div>


            </div>

        );
    });



    return <div>{loading ? <div>Loading</div> : <div className='grid grid-cols-4 gap-9 py-10 my-8 mx-9 px-9'>{results}</div>}</div>;
}

export default Products