import React from 'react';

const Top = () => {
    const { _id } = useParams();
    console.log(_id)
    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch('/topFoods.json')
            .then(res => res.json())
            .then(data => {
                const selectedFood = data.find(item => item._id === parseInt(_id));
                console.log(selectedFood)

                setFood(selectedFood);
            });
    }, [_id]);
    return (
        <div>

            {
                food.map
            }
            
        </div>
    );
};

export default Top;