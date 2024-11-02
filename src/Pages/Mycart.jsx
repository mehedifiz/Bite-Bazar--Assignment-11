import React, { useState } from 'react';
import useMycart from '../hooks/useMycart';
import { FaTrash } from 'react-icons/fa6';
import UseAxiosprivate from '../hooks/UseAxiosprivate';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Mycart = () => {
    const [refetch, cart] = useMycart();
    const axiosPrivate = UseAxiosprivate()
    console.log(cart);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPrivate.delete(`/purchase/${id}`)
                    .then(res => {
                        if (res.status === 200) { 
                            refetch(); 
                            toast.success('Item successfully deleted from your cart!'); 
                        }
                    })
                    .catch(err => {
                        toast.error('Failed to delete the item. Please try again.');  
                        console.error(err); 
                    });
            }
        });
    };
    
    return (
        <div className="overflow-x-auto">
            <table className="table-auto mx-auto w-[80vw] border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Action</th>
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
                            <td className="px-4 py-2 border"><FaTrash onClick={()=>handleDelete(food._id)} className='text-orange-500 text-2xl'/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Mycart;
