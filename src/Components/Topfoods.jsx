import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import Sectiontitle from "./SectionTitle";
import { Link } from "react-router-dom";

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

    return ( <div className="flex flex-col items-cente">
        <Sectiontitle heading='top foods' subheading='bellow you see top foods of our site'></Sectiontitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {foods.map(food => (
                <Foodcard key={food.id} food={food} />
            ))}
        </div>

            <Link to='/allfoods' className=" mx-auto">
            <button className="btn my-10 bg-[#305a74] text-white w-36">All Foods</button>
            
            </Link>
        </div>
    );
};

export default Topfoods;
