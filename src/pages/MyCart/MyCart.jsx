
import { useLoaderData } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Cart from "../../components/Cart";

const MyCart = () => {
    const myCart=useLoaderData()
    console.log(myCart);
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="my-16">
                <h1 className="text-5xl font-semibold  text-center">Add Products</h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 mt-16 space-y-7">
                    {
                        myCart.map(cart=><Cart
                        key={cart._id}
                        cart={cart}
                        ></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;