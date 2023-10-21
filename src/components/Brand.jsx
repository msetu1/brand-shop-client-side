import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { name, id, image } = brand;
    return (
       <Link to={`/${name.toLowerCase()}`}>
        <div>
            <div className="relative">
                <img className="h-[300px] lg:w-[350px] w-full rounded-lg" src={image} alt="" />
            </div>
            <div className="absolute -mt-12 ml-5">
                <h1 className="text-2xl text-[#ea580c] font-semibold  ">{name}</h1>
            </div>
            
        </div>
       </Link>
    );
};

export default Brand;