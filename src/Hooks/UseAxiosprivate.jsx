import axios from "axios";
import useAuth from "../Auth/Useauth";
import { useNavigate } from "react-router-dom";



export const AxiosSecure =axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true
})
const UseAxiosprivate = () => {

    // const {logOut} = useAuth();
    // const navigate = useNavigate()
    AxiosSecure.interceptors.request.use(function(config){
        return config;
    }), 
    

    return AxiosSecure
};

export default UseAxiosprivate;