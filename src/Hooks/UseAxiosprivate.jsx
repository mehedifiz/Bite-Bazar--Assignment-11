import axios from "axios";
import useAuth from "../Auth/Useauth";
import { useNavigate } from "react-router-dom";

export const AxiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const UseAxiosprivate = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    AxiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            console.log('Interceptor token:', token);

            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            // Handle request errors here
            return Promise.reject(error);
        }
    );

    AxiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && error.response.status === 401) {
                // Logout the user and navigate them away if they're unauthorized
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    return AxiosSecure;
};

export default UseAxiosprivate;
