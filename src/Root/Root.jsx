import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const Root = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("auth") ||
    location.pathname.includes("auth#signup");
  return (
    <div className="max-w-screen-xl mx-auto">
      {isLogin || <Navber></Navber>}

      <Outlet />

      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default Root;
