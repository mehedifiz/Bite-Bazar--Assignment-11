import React, { useState } from 'react';
import useMycart from '../hooks/useMycart';

const Mycart = () => {
    const [refetch, cart] = useMycart();
    console.log(cart);
    
    return (
        <div className="overflow-x-auto">
            <table className="table-auto mx-auto w-[80vw] border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((food) => (
                        <tr key={food._id}>
                            <td className="px-4 py-2 border">
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-16 h-16 object-cover"
                                />
                            </td>
                            <td className="px-4 py-2 border">{food.name}</td>
                            <td className="px-4 py-2 border">${food.price}</td>
                            <td className="px-4 py-2 border">Purchased</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Mycart;
