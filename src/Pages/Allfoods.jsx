import React, { useEffect, useState } from 'react';
import Rebanner from '../Components/Rebanner';
import Sectiontitle from '../Components/SectionTitle';
import UseAxiospublic from '../hooks/UseAxiospublic';
import Foodcard from '../Components/Foodcard';

const AllFoodPage = () => {
    const useAxiosPublic = UseAxiospublic();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await useAxiosPublic.get('/allFoods');
                setFoods(response.data);
            } catch (error) {
                console.error("Error fetching foods:", error);
            }
        };

        fetchFoods();
    }, [useAxiosPublic]);

    return (
        <div>
            <Rebanner
                image="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=600"
                title="All Food Items 🥑"
                description="Discover a diverse range of cuisines and flavors, all curated to enhance your dining experience."
            />
            <Sectiontitle heading='All Foods' title='Here you see our all items' />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {foods.map(food => (
                    <Foodcard key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default AllFoodPage;
