import Navbar from "../../layout/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
    const loadedProduct = useLoaderData()
    const [products, setProducts] = useState(loadedProduct)
    const handleDeleted = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-side-ruby.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingCartProduct = products.filter(p => p._id !== _id)
                            setProducts(remainingCartProduct)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        console.log(data);
                    })

            }
        })
    }
    // toast.success('product deleted successful')
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="my-16">

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16 space-y-4">
                    {
                        products.map(cart =>

                            <div key={cart._id} className="max-w-5xl mx-auto my-16">
                                <div className="card card-side bg-base-100 shadow-xl">
                                    <figure><img className="h-[400px]" src={cart.img} alt="Movie" /></figure>
                                    <div className="card-body mt-10">

                                        <h2 className="card-title">{cart.name
                                        }</h2>
                                        <h2>Type: {cart.type}</h2>
                                        <div className="flex items-center justify-between mx-2">
                                            <h1 className="text-xl font-bold">Price: <span className="text-[#ea580c]">${cart.price}</span></h1>
                                            <h1 className="text-xl font-bold">Rating:<span className="text-[#ea580c]">{cart.rating}</span></h1>
                                        </div>
                                        <h2 className="card-title text-2xl">Brand: <span className="text-[#ea580c] font-bold">{cart.brandName}</span></h2>
                                        <p>{cart.shortDescription}</p>
                                        <div className="form-control">
                                            <button onClick={() => handleDeleted(cart._id)} className="text-xl text-white px-7 py-2 font-bold bg-[#16a34a] hover:bg-black  rounded">Deletet </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;