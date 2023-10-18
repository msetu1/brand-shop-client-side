import Banner from "../../layout/Banner";
import SectionOne from "../../layout/SectionOne";
import SectionTwo from "../../layout/SectionTwo";

const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner></Banner> 
           <SectionOne></SectionOne>
           <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;