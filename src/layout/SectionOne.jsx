import { AiOutlineArrowRight } from "react-icons/ai";
const SectionOne = () => {
    return (
        <div className=" my-24 max-w-7xl mx-auto">
            <div className="mb-5 lg:text-left text-center">
                <h1 className="mb-5  text-4xl font-bold">Apple Company Stock Photos <br /> and Electronics Device</h1>
                <p className="lg:w-1/2 ">Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets, personal computers, and wearable devices. </p>
            </div>

            <div className="flex gap-4 flex-col lg:flex-row">
                <div className=" lg:w-[75%] w-full">
                    <div className="relative">
                        <img className="rounded-lg lg:w-[600px] w-full lg:h-[600px] h-[500px]" src="https://i.ibb.co/JsfV6F2/apple-company.webp" alt="" />

                    </div>
                    <div className="absolute -mt-[480px] ml-[470px]">
                        <img className=" lg:block hidden h-[400px] w-[400px]" src="https://i.ibb.co/sqpb23H/apple-product.webp" alt="" />
                    </div>
                </div>
                <div className="lg:w-1/3 w-full lg:px-0 px-5">
<h1 className="text-4xl mb-5 font-bold lg:text-left text-center">Apple <span className="text-[#ea580c]">Electronics </span> <br /> Template</h1>
<p className="text-gray-500">The multinational company Apple Inc. is one of the most important in the world of technology today, it is responsible for the design and marketing of software and intelligent equipment. Among its best known products are computers, laptops, smart watches, AirPods and the various presentations of iPhone cell phones. Let us tell you that our Apple Company template is in charge of gathering each of the features of the brand, so we recommend you to use it in commercial presentations of technology.
<br /><br />
The professional design of Apple Company template for PowerPoint and Google Slides allows you immediate interaction with information graphics, animations and site maps 100% editable. In its 30 slides you will find a varied list of vectors, text boxes, icons and high quality images inspired by technology.</p>
<div className="flex justify-center">
<button className="text-2xl mt-5 text-white px-7 py-3 font-bold bg-[#16a34a] hover:bg-gray-500 hover:rounded-full rounded flex items-center gap-4">Read more <AiOutlineArrowRight></AiOutlineArrowRight></button>
</div>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;