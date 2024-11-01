import React from 'react';
import { useLocation } from 'react-router-dom';

const SingleFoodPage = () => {
    const location = useLocation();
    console.log(location)
    const { food } = location.state;  
    console.log(food)

     
    if (!food) return <div>Food data not available.</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-6 bg-stone-100 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{food.name}</h1>
            <img src={food.image} alt={food.name} className="w-full h-72 object-cover rounded-md mb-4" />
            
            <div className="text-lg mb-2">
                <strong>Category:</strong> {food.category}
            </div>
            <div className="text-lg mb-2">
                <strong>Price:</strong> ${food.price}
            </div>
            <div className="text-lg mb-2">
                <strong>Made By:</strong> {food.madeBy}
            </div>
            <div className="text-lg mb-2">
                <strong>Food Origin:</strong> {food.origin}
            </div>
            <div className="text-lg mb-2">
                <strong>Description:</strong> {food.description}
            </div>
            <div className="mt-6 flex justify-end">
                <button className="btn hover:bg-[#574f17] bg-[#9a8c30] text-white font-semibold py-2">
                    Purchase
                </button>
            </div>
        </div>
    );
};

export default SingleFoodPage;
