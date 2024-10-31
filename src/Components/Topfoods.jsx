import { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import Sectiontitle from "./SectionTitle";
import { Link } from "react-router-dom";
import UseAxiospublic from "../hooks/UseAxiospublic";

const Topfoods = () => {
    const [foods, setFoods] = useState([]);
        const axiospublic = UseAxiospublic()
        useEffect( ()=>{

            axiospublic.get('/topFoods')
            .then(data =>{
                setFoods(data.data)
            })
            
        },[])

    return ( <div className="flex flex-col items-cente">
        <Sectiontitle heading='top foods' subheading='bellow you see top foods of our site'></Sectiontitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {foods.map(food => (
                <Foodcard key={food._id} food={food} />
            ))}
        </div>

            <Link to='/allfoods' className=" mx-auto">
            <button className="btn my-10 bg-[#305a74] text-white w-36">All Foods</button>
            
            </Link>
        </div>
    );
};

export default Topfoods;
