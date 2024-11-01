import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Authprovider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-[100vh] min-w-full flex justify-center items-center"> <span className="loading loading-spinner text-neutral"></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/auth#login' state={{ from: location }} replace />;
};

export default PrivateRoute;
