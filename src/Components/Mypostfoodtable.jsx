// components/Mypostfoodtable.jsx
import React from 'react';
import UseAxiosprivate from '../hooks/UseAxiosprivate';
import { toast } from 'react-toastify';
import useMypost from '../Hooks/Usemypost';

const Mypostfoodtable = () => {
    const  [refetch ,foodItems] = useMypost();  

    const axiosPrivate = UseAxiosprivate();

    const handleDelete = id => {
        axiosPrivate.delete(`/myfoods/${id}`)
            .then(res => {
                
                    console.log( res.data.deletedCount >0)
                if (res.data.deletedCount) {
                     refetch()
                    toast.success('Deleted item');
                }
            })
            .catch(err => {
                toast.error('Failed to delete item');
                console.error('Error deleting item:', err);
            });
    };

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
                    {foodItems.map(item => (
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
