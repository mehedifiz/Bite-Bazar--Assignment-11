import axios from "axios";

const AxiosPublic = axios.create({
    baseURL: 'https://bite-bazar-server.vercel.app'
})


const UseAxiospublic = () => {
    return AxiosPublic
};

export default UseAxiospublic;