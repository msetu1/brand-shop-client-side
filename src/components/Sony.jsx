import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import SonyCard from "./SonyCard";
import SonySlider from "./SonySlider";

const Sony = () => {
    const sonys=useLoaderData()
    const filteredProducts = sonys.filter(product => product.brandName === "Sony");
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="mb-10">
<SonySlider></SonySlider>
            </div>
            <div className="max-w-5xl my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                filteredProducts.map(sony=><SonyCard
                    key={sony._id}
                    sony={sony}
                ></SonyCard>)
            }
            </div>
        </div>
    );
};

export default Sony;