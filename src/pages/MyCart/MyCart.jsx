
import Navbar from "../../layout/Navbar";

const MyCart = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="my-16">
                <h1 className="text-5xl font-semibold  text-center">Add Products</h1>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 mt-16 space-y-7">
                    {/* {
                        products.map(product=><Cart
                        key={product._id}
                        product={product}
                        ></Cart>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default MyCart;