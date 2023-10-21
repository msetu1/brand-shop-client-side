import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <div className="md:block hidden">
            <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;