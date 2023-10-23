
import Swal from "sweetalert2";
import Navbar from "../../layout/Navbar";

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const img = form.img.value;

        const newProducts = { name, brandName, type, rating, price, shortDescription, img }
        console.log(newProducts);

        fetch('https://brand-shop-server-side-ruby.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: ' Product added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <div className="bg-[#1e293b]">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen mb-20">
                <div className="max-w-6xl mx-auto  bg-[#1e293b] rounded-lg  px-8">
                    <div className="text-center mt-10 mb-5 pt-16">
                        <h1 className="text-4xl font-bold text-white">Add Product</h1>
                    </div>
                    <form onSubmit={handleAddProduct}>
                        <div className="flex gap-4 mb-6 flex-col md:flex-row">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-white">Name :</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
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
                                className="input input-bordered w-full bg-[#dbeafe]" />
                        </div>
                        <div className=" pb-10 mb-10 w-full flex justify-center">
                            <input
                                type="submit" value="Add Product"
                                className="text-2xl text-white px-7 font-bold bg-[#16a34a] hover:bg-black w-1/2 rounded my-10 py-3  " />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;