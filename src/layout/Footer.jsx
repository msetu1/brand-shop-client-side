
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiTwitterLogoBold } from "react-icons/pi";
const Footer = () => {
    return (
        <div>
            <div className="bg-black py-16">
                <footer className="footer max-w-7xl mx-auto text-white
                
                ">

                    <div>
                        <div >
                        <img className=" ml-24 w-[70px] h-[70px] rounded" src="https://i.ibb.co/qCD249w/electronic-logo-260nw-737605000.jpg" alt="" />
                        </div>
                        <div className="text-center text-white">
                            
                            <h1 className="ml-5 mb-6 font-bold text-4xl text-[#ea580c] font-berkshire">rf-Technology</h1>
                            <h1>---------msetu5763@gmail.com-----------</h1>
                        </div>
                    </div>
                    <nav>
                        <header className="text-2xl font-semibold">Our Service</header>
                        <a className="link link-hover">IT Management</a>
                        <a className="link link-hover">IT Solution</a>
                        <a className="link link-hover">Machine Learnng</a>
                        <a className="link link-hover">Product Design</a>
                    </nav>
                    <nav>
                        <header className="text-2xl font-semibold">Support</header>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Add Product</a>
                        <a className="link link-hover">My Cart</a>
                        <a className="link link-hover">Login</a>
                    </nav>
                    <nav>
                        <header className="text-2xl font-semibold">Contact</header>
                        <a className="link link-hover">Gopalpur Tangail</a>
                        <a className="link link-hover">017......</a>
                    </nav>

                </footer>
                <div className="divider">or</div>
                <div className="flex items-center space-x-5 justify-center mt-4">
                    <h1 className="text-3xl"><FcGoogle></FcGoogle>

                    </h1>
                    <h1 className="text-3xl text-white"><PiFacebookLogoBold>
                    </PiFacebookLogoBold>
                    </h1>
                    <h1 className="text-3xl text-white"><BsGithub></BsGithub>
                    </h1>
                    <h1 className="text-3xl text-white"><PiTwitterLogoBold></PiTwitterLogoBold></h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;