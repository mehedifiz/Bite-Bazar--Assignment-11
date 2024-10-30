import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

const Foodcard = ({ food }) => {
    const { id, name, category, price, image } = food;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={name} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Category: {category}</p>
                <p>Price: ${price.toFixed(2)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/food/${id}`} className="badge badge-outline flex items-center gap-1">
                        <FaInfoCircle /> Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;