import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../../layout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className=" lg:w-1/3 md:w-7/12 mx-auto py-12 text-white ">
                    <div className="">
                        <div className=" bg-[#1e293b]  px-10 rounded">
                            <div className="text-center ">
                                <h1 className="text-5xl pt-8 font-bold"> Please Login <span className="text-[#ea580c]">now</span></h1>
                            </div>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold text-xl">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="email"
                                        name="email"
                                        className="input input-bordered bg-[#dbeafe]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold text-xl">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password" className="input input-bordered bg-[#dbeafe] text-black" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="text-2xl text-white px-7 py-2 font-bold bg-[#16a34a] hover:bg-black  rounded">Login</button>
                                </div>
                                <NavLink>
                                    <div className="mt-3 flex justify-center border border-[#ea580c] rounded-full py-3">
                                        <h1 className="text-2xl font-semibold flex items-center gap-5 "><FcGoogle></FcGoogle> Google</h1>
                                    </div>
                                </NavLink>
                                <div>
                                    <h1 className=" font-semibold mb-3 text-base">Don't have an account ? <NavLink
                                        to="/register"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "" : "underline underline-offset-2  text-[#ea580c] font-bold text-2xl"
                                        }
                                    >
                                        Register
                                    </NavLink></h1>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;