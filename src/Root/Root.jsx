import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navber/>
            <Outlet/>

            <Footer/>
            
        </div>
    );
};

export default Root;