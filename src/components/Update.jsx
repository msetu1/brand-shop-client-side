import { useLoaderData } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Swal from "sweetalert2";

const Update = () => {
    const update = useLoaderData()
    const { brandName, name, type, img, rating, price, shortDescription, _id } = update;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const img = form.img.value;

        const updateProducts = { name, brandName, type, rating, price, shortDescription, img }
        console.log(updateProducts);

        fetch(`https://brand-shop-server-side-ruby.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div className="min-h-screen">
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="max-w-6xl mx-auto  bg-[#1e293b] rounded-lg  px-8">
                <div className="text-center mt-10 mb-5 pt-16">
                    <h1 className="text-4xl font-bold text-white">Add Product</h1>
                </div>
                <form onSubmit={handleUpdateProduct}>
                    <div className="flex gap-4 mb-6 flex-col md:flex-row">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white">Name :</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                defaultValue={name}
                                className="input input-bordered w-full bg-[#dbeafe]" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white">Brand Name :</span>
                            </label>
                            <input
                                type="text"
                                name="brandName"
                                placeholder="Brand Name"
                                defaultValue={brandName}
                                className="input input-bordered w-full bg-[#dbeafe]" />
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white">Type :</span>
                            </label>
                            <input
                                type="text"
                                name="type"
                                placeholder="Type"
                                defaultValue={type}
                                className="input input-bordered w-full bg-[#dbeafe]" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white">Rating :</span>
                            </label>
                            <input
                                type="text"
                                name="rating"
                                placeholder="Your Rating"
                                defaultValue={rating}
                                className="input input-bordered w-full bg-[#dbeafe]" />
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white">Price :</span>
                            </label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                defaultValue={price}
                                className="input input-bordered bg-[#dbeafe]" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white">Photo URL :</span>
                            </label>
                            <input
                                type="text"
                                name="img"
                                placeholder="Photo URL"
                                defaultValue={img}
                                className="input input-bordered w-full bg-[#dbeafe]" />
                        </div>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Short Description :</span>
                        </label>
                        <input
                            type="text"
                            name="shortDescription"
                            placeholder="Your description"
                            defaultValue={shortDescription}
                            className="input input-bordered w-full bg-[#dbeafe]" />
                    </div>
                    <div className=" pb-10 mb-10 w-full flex justify-center">
                        <input
                            type="submit" value="Submit"
                            className="text-2xl text-white px-7 font-bold bg-[#16a34a] hover:bg-black w-1/2 rounded my-10 py-3  " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;