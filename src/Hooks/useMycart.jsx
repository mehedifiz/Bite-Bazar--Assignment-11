import React from 'react';
import useAuth from '../Auth/Useauth';
import UseAxiosprivate from './UseAxiosprivate';
import { useQuery } from '@tanstack/react-query';

const useMycart = () => {
    const {user} = useAuth();
    const axiosPrivate = UseAxiosprivate();

    const {refetch,  data:cart= []}= useQuery({
        queryKey:['cart' , user?.email],
        queryFn: async()=>{
            const result = await axiosPrivate.get(`/purchase/${user?.email}`)
            return result.data;
        }
    })


    return [refetch , cart] 
    
};

export default useMycart;