// hooks/useMypost.js
import { useQuery } from "@tanstack/react-query";
import UseAxiosprivate from "./UseAxiosprivate";  
import useAuth from "../Auth/Useauth";

const useMypost = () => {
    const axiosPrivate = UseAxiosprivate();
    const { user } = useAuth();

    
    const { refetch, data: foodItems = [] } = useQuery({
        queryKey: ['myFoods', user?.email], // 
        queryFn: async () => {
            const res = await axiosPrivate.get(`/myfoods/${user.email}`); 
            return res.data; 
        },
        enabled: !!user?.email, 
    });

    return [refetch ,foodItems]; 
};

export default useMypost;
