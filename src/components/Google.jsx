import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import GoogleCart from "./GoogleCart";
import GoogleSlider from "./GoogleSlider";

const Google = () => {
    const googles = useLoaderData()
    const filteredProducts = googles.filter(product => product.brandName === "Google");

    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="mb-10">
                <GoogleSlider></GoogleSlider>
            </div>
            <div className="max-w-5xl my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    filteredProducts.map(google => <GoogleCart
                        key={google._id}
                        google={google}
                    ></GoogleCart>)
                }
            </div>
        </div>
    );
};

export default Google;