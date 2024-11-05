// hooks/useMypost.js
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Auth/Useauth";
import UseAxiospublic from "./UseAxiospublic";

const useMypost = () => {
    const axiosPublic = UseAxiospublic();
    const { user } = useAuth();

    
    const { refetch, data: foodItems = [] } = useQuery({
        queryKey: ['myFoods', user?.email], 
        queryFn: async () => {
            const res = await axiosPublic.get(`/myfoods/${user.email}`); 
            return res.data; 
        },
        enabled: !!user?.email, 
    });

    return [refetch ,foodItems]; 
};

export default useMypost;
