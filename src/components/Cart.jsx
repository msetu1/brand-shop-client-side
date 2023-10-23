import toast from "react-hot-toast";

const Cart = ({ cart,handleDeleted }) => {
    const { brandName, name, _id, type, img, rating, price, shortDescription } = cart;
console.log(_id);
    return (
        <div>
            <div className="max-w-5xl mx-auto my-16">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img className="h-[400px]" src={img} alt="Movie" /></figure>
                    <div className="card-body mt-10">

                        <h2 className="card-title">{name
                        }</h2>
                        <h2>Type: {type}</h2>
                        <div className="flex items-center justify-between mx-2">
                            <h1 className="text-xl font-bold">Price: <span className="text-[#ea580c]">${price}</span></h1>
                            <h1 className="text-xl font-bold">Rating:<span className="text-[#ea580c]">{rating}</span></h1>

                        </div>
                        <h2 className="card-title text-2xl">Brand: <span className="text-[#ea580c] font-bold">{brandName}</span></h2>
                        <p>{shortDescription}</p>

                        <div className="form-control">
                            <button onClick={()=>handleDeleted(_id)} className="text-xl text-white px-7 py-2 font-bold bg-[#16a34a] hover:bg-black  rounded">Deletet </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;