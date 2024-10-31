// Mypostfoodtable.jsx
import React from 'react';

const Mypostfoodtable = ({ foodItems }) => {

    const
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foodItems.map((item) => (
                        <tr key={item._id} className="border-t">
                            <td className="px-4 py-2">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                            </td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">${item.price}</td>
                            <td className="px-4 py-2">
                                <button 
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2" 
                                    onClick={() => handleUpdate(item)}
                                >
                                    Update
                                </button>
                                <button 
                                    className="bg-red-500 text-white px-2 py-1 rounded" 
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Mypostfoodtable;
