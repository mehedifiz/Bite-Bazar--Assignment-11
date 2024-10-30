import { FaShoppingCart } from 'react-icons/fa';

const Foodcard = ({ food }) => {
    const { name, category, price, image, purchaseCount } = food; // Destructure the food object

    return (
        <div className="card bg-slate-200 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name}
                    className="h-48 w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary ml-2">NEW</div>
                </h2>
                <p>{category}</p>
                <div className="card-actions justify-between mt-4 items-center">
                    <div className="badge badge-outline">purchase Count: {purchaseCount}</div>
                    <div className="badge badge-primary bg-[#255441]">${price}</div>
                </div>
                <button className="btn bg-[#947542] btn-primary mt-4 flex items-center gap-2 rounded-2xl">
                    <FaShoppingCart />
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default Foodcard;
