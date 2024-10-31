// Mypostfood.jsx
import React, { useEffect, useState } from 'react';
import UseAxiosprivate from '../hooks/UseAxiosprivate';
import useAuth from '../Auth/Useauth';
import Mypostfoodtable from '../Components/Mypostfoodtable';

const Mypostfood = () => {
    const [foodItems, setFoodItems] = useState([]);
    const axiosPrivate = UseAxiosprivate();
    const{user} =useAuth()

   useEffect(()=>{
    axiosPrivate.get(`/myfoods/${user?.email}`)
    .then(res =>{
        setFoodItems(res.data)
    })

   } ,[])

   

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Posted Food Items</h2>
            <Mypostfoodtable foodItems={foodItems} />
        </div>
    );
};

export default Mypostfood;
