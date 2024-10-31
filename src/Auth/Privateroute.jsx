import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Authprovider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner text-neutral"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/auth#login' state={{ from: location }} replace />;
};

export default PrivateRoute;
