import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Root = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <div className="md:block hidden">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;