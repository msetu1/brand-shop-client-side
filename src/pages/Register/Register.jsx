import Navbar from "../../layout/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from =location.state?.from?.pathname || '/'

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        if (password.length < 6) {
            toast.error('Please password must be at least 6 caracters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password have at least one uper case charecters');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password have at least one lower case charecters')
            return
        }
        // create user 
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('user created successfully')
                navigate(from,{replace:true})
            })
            .catch(error => {
                toast.error(error.message)
            })

    }
    return (
        <div>
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className=" lg:w-5/12 mx-auto md:w-8/12 py-12 text-white">
                    <div className="">
                        <div className=" bg-[#1e293b]  px-10 rounded-lg">
                            <div className="text-center ">
                                <h1 className="text-5xl pt-8 font-bold"> Please Register <span className="text-[#ea580c]">now</span></h1>
                            </div>
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold text-xl">User Name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Your Name"
                                        name="name"
                                        className="input input-bordered bg-[#dbeafe]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold text-xl">Photo URL</span>
                                    </label>
                                    <input type="photo"
                                        placeholder="photo URL"
                                        name="photo"
                                        className="input input-bordered bg-[#dbeafe]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold text-xl">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="Your Email Address"
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
                                        placeholder="Your Password" className="input input-bordered bg-[#dbeafe] text-black" />

                                    <div className="-ml-2.5">

                                    </div>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="text-2xl text-white px-7 py-2 font-bold bg-[#16a34a]   rounded hover:bg-black">Register</button>
                                </div>
                                <div>
                                    <h1 className=" font-semibold mb-3  mt-2 text-2xl">Already have an account ? <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "" : "underline underline-offset-2 text-[#ea580c] font-bold text-2xl"
                                        }
                                    >
                                        Login
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

export default Register;