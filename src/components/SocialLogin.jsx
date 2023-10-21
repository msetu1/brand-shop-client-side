
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
const SocialLogin = () => {
    const {user,googleLogin}=useContext(AuthContext);
    
    const handleGoogle = (media) => {
        media()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <>
            <div className='flex my-3 justify-center'>
                <button 
                onClick={() => handleGoogle(googleLogin)} className='text-xl py-3 w-full flex items-center justify-center border  border-[#ea580c] rounded-full  gap-3 font-bold'> <FcGoogle className='text-3xl'></FcGoogle> Google</button>
            </div>
        </>
    );
};

export default SocialLogin;