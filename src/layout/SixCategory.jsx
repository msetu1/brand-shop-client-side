import { useEffect, useState } from "react";
import Brand from "../components/Brand";

const SixCategory = () => {
    const [brands,setbrands]=useState([]);

    useEffect(()=>{
        fetch('brandData.json')
        .then(res=>res.json())
        .then(data=>setbrands(data))
    },[])
    return (
        <div className="my-24 max-w-6xl mx-auto">
           <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">Our Populer <span className="text-[#ea580c]">Brand</span></h1>
           </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {
            brands.map(brand=><Brand
            key={brand.id}
            brand={brand}
            ></Brand>)
        }
          </div>
        </div>
    );
};

export default SixCategory;