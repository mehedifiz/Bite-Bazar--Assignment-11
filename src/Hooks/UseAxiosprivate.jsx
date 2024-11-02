import axios from "axios";
import useAuth from "../Auth/Useauth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AxiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const UseAxiosprivate = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const requestInterceptor = AxiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                console.log('Interceptor token:', token);

                if (token) {
                    config.headers.authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        const responseInterceptor = AxiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && error.response.status === 401) {
                    await logOut();
                    navigate('/auth#login');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            AxiosSecure.interceptors.request.eject(requestInterceptor);
            AxiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]);  

    return AxiosSecure;
};

export default UseAxiosprivate;
