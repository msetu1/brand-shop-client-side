
import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import AppleCart from "./AppleCart";
import AppleSlider from "./AppleSlider";

const Apple = () => {
    const apples = useLoaderData()
    const filteredProducts = apples.filter(product => product.brandName === "Apple");
    return (

        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="mb-10">
               <AppleSlider></AppleSlider>
            </div>
            <div className="max-w-5xl my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    filteredProducts.map(apple => <AppleCart
                        key={apple._id}
                        apple={apple}
                    ></AppleCart>)
                }
            </div>
        </div>
    );
};

export default Apple;