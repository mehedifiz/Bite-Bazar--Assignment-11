import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navber/>
            <Outlet/>
            
        </div>
    );
};

export default Root;