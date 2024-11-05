import React from "react";
import useAuth from '../Auth/Useauth';
import { useQuery } from '@tanstack/react-query';
import UseAxiospublic from './UseAxiospublic';

const useMycart = () => {  // Add callerName parameter
    const { user } = useAuth();
    const axiosPublic = UseAxiospublic();


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                console.log("Skipping fetch: user email is undefined.");
                return [];
            }
            const result = await axiosPublic.get(`/purchase/${user.email}`);
            return result.data;
        },
         
    });

    return [refetch, cart];
};

export default useMycart;
