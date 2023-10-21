import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import SamsungCard from "./SamsungCard";

const Samsung = () => {
    const samsungs=useLoaderData()
    const filteredProducts = samsungs.filter(product => product.brandName === "Samsung");
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="">

            </div>
            <div className="max-w-5xl my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                filteredProducts.map(samsung=><SamsungCard
                    key={samsung._id}
                    samsung={samsung}
                ></SamsungCard>)
            }
            </div>
        </div>
    );
};

export default Samsung;