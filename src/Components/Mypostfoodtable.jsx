// components/Mypostfoodtable.jsx
import React from 'react';
import { toast } from 'react-toastify';
import useMypost from '../Hooks/Usemypost';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import UseAxiospublic from '../hooks/UseAxiospublic';

const Mypostfoodtable = () => {
    const  [refetch ,foodItems] = useMypost();  

    const axiosPublic = UseAxiospublic();

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/myfoods/${id}`)
    .then(res => {
        
            
        if (res.data.deletedCount > 0) {
             refetch()
            toast.success('Deleted item');
        }
    })
    .catch(err => {
        toast.error('Failed to delete item');
        console.error('Error deleting item:', err);
    });
             
            }
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
                               <Link to={`/updateitem/${item._id}`}>
                               <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                    
                                >
                                    Update
                                </button>
                               </Link>
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
