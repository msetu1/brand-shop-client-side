import Navbar from './Navbar';
import { AiOutlineArrowRight } from "react-icons/ai";
import './banner.css'
const Banner = () => {
    return (
        <div className='bg-img mb-10 '>

            <div className='opacity-80  bg-[#111827] h-full w-full'>
                <div className='bg-[#1e293b]'>
                    <Navbar></Navbar>
                </div>
                <div className='flex  gap-5 max-w-6xl mx-auto mt-16 flex-col lg:flex-row'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='mt-16'>
                            <h1 className="lg:text-7xl text-4xl text-center lg:text-left font-bold text-white ">Technology and <span className=' text-[#ea580c]'>Electronics</span></h1>
                            <p className='text-white text-center lg:text-left mt-5 mb-10 lg:mr-16 mr-0'>Electronic and information technology includes computer hardware and software, operating systems, web-based information and applications, telephones and other telecommunications products, video equipment and multimedia products, information kiosks, and office products such as photocopiers and fax machines.</p>
                            <div className='flex justify-center lg:justify-start'>
                            <button className="text-2xl text-white px-7 py-3 font-bold bg-[#16a34a] hover:bg-gray-500 hover:rounded-full rounded flex items-center gap-4">Explore Now <AiOutlineArrowRight></AiOutlineArrowRight></button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 lg:block hidden ml-10'>
                        <img className='h-[500px] rounded-lg  w-[500px]' src="https://i.ibb.co/pywWtTd/Getty-Images-1410837234-466c1851bcb946a6a89e532ab6e9dc29.jpg" alt="" />
                      

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;