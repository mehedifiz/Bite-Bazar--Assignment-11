import axios from "axios";

const AxiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})


const UseAxiospublic = () => {
    return AxiosPublic
};

export default UseAxiospublic;