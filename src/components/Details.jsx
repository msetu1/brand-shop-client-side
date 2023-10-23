import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Details = () => {
  const loadedProduct = useLoaderData()
  const handleAddToCard = () => {
    fetch('https://brand-shop-server-side-ruby.vercel.app/cart', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(loadedProduct)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Good Job',
            text: 'Product added successful',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        }
        console.log(data);
      })
  }
  return (
    <div>
      <div className="bg-[#1e293b]">
        <Navbar></Navbar>
      </div>
      <div className="max-w-5xl mx-auto my-16">
        <div className="card card-side bg-base-100 shadow-xl  flex-col lg:flex-row mx-10 lg:mx-0">
          <figure><img className="h-[250px] lg:h-[400px]" src={loadedProduct.img} alt="Movie" /></figure>
          <div className="card-body lg:mt-10 mt-0">

            <h2 className="card-title">{loadedProduct.name
            }</h2>
            <h2>Type: {loadedProduct.type}</h2>
            <div className="flex items-center justify-between mx-2">
              <h1 className="text-xl font-bold">Price: <span className="text-[#ea580c]">${loadedProduct.price}</span></h1>
              <h1 className="text-xl font-bold">Rating:<span className="text-[#ea580c]">{loadedProduct.rating}</span></h1>

            </div>
            <h2 className="card-title text-2xl">Brand: <span className="text-[#ea580c] font-bold">{loadedProduct.brandName}</span></h2>
            <p>{loadedProduct.shortDescription}</p>
            <div className="card-actions justify-end">
              <div className="form-control mt-6">
                <button onClick={handleAddToCard} className="text-xl text-white px-7 py-2 font-bold bg-[#16a34a] hover:bg-black  rounded">Add to Cart </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;