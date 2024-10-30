import { Helmet } from "react-helmet";
import Banner from "../Components/Banner";
import Topfoods from "../Components/Topfoods";
import About from "../Components/About";

const Home = () => {
    return (
        <div><Helmet>
        <title>Home| Bite-Bazar - Discover Fresh, Delicious Food Online</title>
        <meta name="description" content="Explore Bite-Bazar, your go-to destination for fresh, high-quality food options. Learn about our commitment to culinary excellence, variety, and providing an outstanding user experience in online food shopping." />
        <meta name="keywords" content="Bite-Bazar, food delivery, online food shopping, fresh food, top quality food, culinary excellence, food variety, food website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>
      

               <Banner/>

               <Topfoods/>
      <About/>




        </div>
    );
};

export default Home;