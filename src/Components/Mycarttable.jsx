import React from 'react';
import Sectiontitle from './SectionTitle';

const MyCartTable = ({name , image ,price}) => {
    // const 

    console.log( foods)

    return (
        <div className="overflow-x-auto">

            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Image</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food) => (
                        <tr key={item._id}>
                            <td className="px-4 py-2 border">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-16 h-16 object-cover"
                                />
                            </td>
                            <td className="px-4 py-2 border">{name}</td>
                            <td className="px-4 py-2 border">{price}</td>
                            <td className="px-4 py-2 border">Purchased</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    );
};

export default MyCartTable;
