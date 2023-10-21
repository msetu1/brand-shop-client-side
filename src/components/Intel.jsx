import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import IntelCard from "./IntelCard";

const Intel = () => {
    const intels=useLoaderData()
    const filteredProducts = intels.filter(product => product.brandName === "Intel");
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="">

            </div>
            <div className="max-w-5xl my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                filteredProducts.map(intel=><IntelCard
                    key={intel._id}
                    intel={intel}
                ></IntelCard>)
            }
            </div>
        </div>
    );
};

export default Intel;