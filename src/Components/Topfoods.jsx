import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";

const Topfoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('/topFoods.json')
            .then(res => res.json())
            .then(data => {
                // Sort by purchaseCount and select top 6
                const topFoods = data.sort((a, b) => b.purchaseCount - a.purchaseCount).slice(0, 6);
                setFoods(topFoods);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {foods.map(food => (
                <Foodcard key={food.id} food={food} />
            ))}
        </div>
    );
};

export default Topfoods;
