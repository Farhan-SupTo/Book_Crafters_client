import Banner from "../Banner/Banner";
import BestSellerBooks from "./BestSellerBooks";
import Favbook from "./Favbook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks"
import Reviews from "./Reviews";


const Home = () => {
    return (
        <div> 
          <Banner></Banner>
          <BestSellerBooks></BestSellerBooks>
        <Favbook></Favbook>
        <PromoBanner></PromoBanner>
        <OtherBooks></OtherBooks>
        <Reviews></Reviews>
        
        
        </div>
    );
};

export default Home;