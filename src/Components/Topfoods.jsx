import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import Sectiontitle from "./SectionTitle";

const Topfoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('/topFoods.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            });
    }, []);

    return (
            <div>

               <Sectiontitle heading='top foods' subheading='bellow you see the top foods of our site '></Sectiontitle>      



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foods.map(food => <Foodcard key={food.id} food={food} />)}
        </div>

        </div>
    );
};

export default Topfoods;
