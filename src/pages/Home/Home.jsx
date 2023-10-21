
import Banner from "../../layout/Banner";
import SectionOne from "../../layout/SectionOne";
import SectionTwo from "../../layout/SectionTwo";
import SixCategory from "../../layout/SixCategory";

const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner></Banner> 
           <SectionOne></SectionOne>
           <SixCategory></SixCategory>
           <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;