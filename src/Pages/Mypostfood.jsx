// components/Mypostfood.jsx
import React from 'react';
import Mypostfoodtable from '../Components/Mypostfoodtable';
import useMypost from '../Hooks/Usemypost';

const Mypostfood = () => {
    const  [refetch ,foodItems] = useMypost();  

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Posted Food Items</h2>
            <Mypostfoodtable   />
        </div>
    );
};

export default Mypostfood;
