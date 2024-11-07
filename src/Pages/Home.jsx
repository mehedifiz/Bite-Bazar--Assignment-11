import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Topfoods from "../Components/Topfoods";
import About from "../Components/About";
import ProfileDropdown from "./Myprofile";
import Reviews from "../Components/Review";
import LocationSection from "../Components/LocationSection ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home| Bite-Bazar - Discover Fresh </title>
      </Helmet>

      <Banner />

      <Topfoods />

      <About />

      <LocationSection />
      <Reviews />
    </div>
  );
};

export default Home;
