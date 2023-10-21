
const SonyCard = ({sony}) => {
    const {brandName,name,type,img,rating,price,shortDescription}=sony;
    return (
        <div>
            <div  className="card  bg-base-100 shadow-xl">
            <div className="relative">
                    <figure><img className="h-[270px] rounded w-full" src={img} alt="Shoes" /></figure>
                </div>
                <div className="absolute mt-52 ml-80">
                    <h2 className="card-title text-2xl">Brand: <span className="text-[#ea580c] font-bold">{brandName}</span></h2>
                </div>
                <div className="card-body">
                  
                  <h2 className="card-title">{name
}</h2>
<h2>Type: {type}</h2>
                  <div className="flex items-center justify-between mx-2">
                    <h1 className="text-xl font-bold">Price: <span className="text-[#ea580c]">${price}</span></h1>
                    <h1 className="text-xl font-bold">Rating:<span className="text-[#ea580c]">{rating}</span></h1>
                  </div>
                  <p>{shortDescription}</p>
                  <div className="flex items-center justify-between mb-3">
                        <div className="form-control mt-6">
                            <button className="text-xl text-white px-7 py-2 font-bold bg-[#16a34a] hover:bg-black  rounded">Details button</button>
                        </div>
                        <div>
                            <div className="form-control mt-6">
                                <button className="text-xl text-white px-7 py-2 font-bold bg-[#16a34a] hover:bg-black  rounded">Update button</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
    );
};

export default SonyCard;