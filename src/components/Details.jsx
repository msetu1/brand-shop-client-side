import { useLoaderData } from "react-router-dom";

const Details = () => {
    const loadedProduct=useLoaderData()
    console.log(loadedProduct);
    return (
        <div>
            <h1 className="text-5xl ">{loadedProduct.name}</h1>
        </div>
    );
};

export default Details;