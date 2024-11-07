import React, { useState } from 'react';
import Rebanner from '../Components/Rebanner';
import Sectiontitle from '../Components/SectionTitle';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import UseAxiospublic from '../hooks/UseAxiospublic';
import Foodcard from '../Components/Foodcard';

const AllFoodPage = () => {
  const useAxiosPublic = UseAxiospublic();
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

 
  const { data, isLoading, error } = useQuery(
    ['allFoods', currentPage, itemsPerPage, search],
    async () => {
      try {
        const response = await useAxiosPublic.get(
          `/allFoods?page=${currentPage}&size=${itemsPerPage}&search=${search}`
        );
        return response.data;  
      } catch (err) {
        console.error('Error fetching foods:', err);
        return { foods: [], total: 0 }; 
      }
    }
  );

 
  const handleItems = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0); 
  };

  //   search  
  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };

  // pagination 
  const totalFoods = data?.total ;
  const numberOfPages = totalFoods > 0 ? Math.ceil(totalFoods / itemsPerPage) : 0;
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div>
      <Helmet>
        <title>All Food | Bite-Bazar</title>
      </Helmet>
      <Rebanner
        image="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="All Food Items 🥑"
        description="Discover a diverse range of cuisines and flavors, all curated to enhance your dining experience."
      />
      <Sectiontitle heading="All Foods" title="Here you see all our items" />

      <label className="input input-bordered flex items-center gap-2 w-52 mx-auto">
        <input
          type="text"
          name="search"
          className="grow"
          placeholder="Search"
          onChange={handleSearch}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {isLoading ? (
              <div className="text-center py-4 min-h-[30vh]">

          <span className="loading loading-spinner text-success"></span>
        </div>
      ) : error ? (
        <div className="text-center py-4">
          Error fetching data. Please try again later.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {data?.foods.map((food) => (
            <Foodcard key={food._id} food={food} />
          ))}
        </div>
      )}

      {numberOfPages > 0 && (
        <div className="flex justify-center gap-2 mt-4">
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`mx-2 px-4 py-2 border rounded ${
                currentPage === page ? 'bg-red-500 text-white' : 'bg-white text-black'
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFoodPage;
