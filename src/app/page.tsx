
// import MenuBar from "./components/category";
import PromotionalSection from "./components/Promotionalsection";
import MensShoesRow from "./components/Product1";
import LimitedOffer from "./components/Flashsales";
import Mensshirts from "./components/Maleshirts";
import Watches from "./components/Watches";
import ForTheLadies from "./components/Ladies";
import Topcategory from "./components/Topcategories";
import Recommend from "./components/Recommended";



export default function Home() {
  return (
    <>
     {/* <MenuBar /> */}
     <PromotionalSection />
     <MensShoesRow />
     <LimitedOffer />
     <Mensshirts />
     <Watches />
     <ForTheLadies />
     <Topcategory />
     <Recommend/>
    </>
  );
}
