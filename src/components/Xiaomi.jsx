import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import XiaomiCard from "./XiaomiCard";
import XiaomiSlider from "./XiaomiSlider";

const Xiaomi = () => {
    const xiaomis = useLoaderData()
    const filteredProducts = xiaomis.filter(product => product.brandName === "Xiaomi");
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="mb-10">
                <XiaomiSlider></XiaomiSlider>
            </div>
            <div className="max-w-5xl my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    filteredProducts.map(xiaomi => <XiaomiCard
                        key={xiaomi._id}
                        xiaomi={xiaomi}
                    ></XiaomiCard>)
                }
            </div>
        </div>
    );
};

export default Xiaomi;