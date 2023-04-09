import { headphone } from "../assets";

function Card(props){
return (
    <div className="card flex flex-col w-[354px] rounded-xl mt-7 gap-2">
        <div className="flex flex-col bg-cardColor rounded-xl">
            <img src="https://drive.google.com/uc?id=1ygs_YPKnTrYlWhNuENtsiSVpnX1HuLil" alt="" className=" scale-75 hover:scale-100"/>
        </div>
        <div className="flex flex-row justify-between mx-1 items-center mt-2 gap-3">
            <h1 className="font-poppins font-semibold text-[20px]">Gaming Headphones</h1>
            <h2 className="font-poppins font-semibold text-[22px]">$299</h2>

        </div>
        <div className="flex flex-col gap-3">

            <h2 className="font-poppins text-gray-500">Table with air purifier,stained veneer/black</h2>
            <button className=" font-poppins hover:bg-primary border-2 hover:text-white border-black rounded-xl p-3">Add to Cart</button>

        </div>


    </div>
)
}

export default Card