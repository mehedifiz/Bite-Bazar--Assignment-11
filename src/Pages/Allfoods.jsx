import React, { useEffect, useState } from 'react';
import Rebanner from '../Components/Rebanner';
import Sectiontitle from '../Components/SectionTitle';
import UseAxiospublic from '../hooks/UseAxiospublic';
import Foodcard from '../Components/Foodcard';
import { Button } from '@material-tailwind/react';
import { Helmet } from 'react-helmet';

const AllFoodPage = () => {
    const useAxiosPublic = UseAxiospublic();
    const [itemsPerPage, setItemsPerPage] = useState(5);  
    const [foods, setFoods] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [Total, setTotal] = useState(0);
    const [search, setSearch] =useState('')

    const fetchFoods = async () => {
        try {
            const response = await useAxiosPublic.get(`/allFoods?page=${currentPage}&size=${itemsPerPage}&search=${search}`);
            setFoods(response.data.foods); 
            setTotal(response.data.total);
            // alert(response.data.total)
        } catch (error) {
            console.error("Error fetching foods:", error);
        }
    };

    const handleItems = (e) => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    };

    useEffect(() => {
        fetchFoods();
    }, [currentPage, itemsPerPage , search]);

    const numberOfPages = Math.ceil(Total / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];  


    const handleSearch = e=>{

        const searchText = e.target.value;
        setSearch(searchText);



        
    }

    return (
        <div>
             <Helmet>
        <title>All Food| Bite-Bazar  </title>
         
      </Helmet>
            <Rebanner
                image="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=600"
                title="All Food Items 🥑"
                description="Discover a diverse range of cuisines and flavors, all curated to enhance your dining experience."
            />
            <Sectiontitle heading="All Foods" title="Here you see our all items" />

            
      <label className="input input-bordered flex items-center gap-2 w-52 mx-auto">
  <input type="text" name='search' className="grow" placeholder="Search"  onChange={handleSearch} />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {foods.map(food => (
                    <Foodcard key={food._id} food={food} />
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {pages.map(page => (
                    <button
                        onClick={() => setCurrentPage(page)}
                        key={page}
                        className={`mx-2 px-4 py-2 border rounded ${currentPage === page ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
                    >
                        {page + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllFoodPage;
