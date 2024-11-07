import { useQuery } from '@tanstack/react-query'; // TanStack Query
import Foodcard from "./Foodcard";
import Sectiontitle from "./SectionTitle";
import { Link } from "react-router-dom";
import UseAxiospublic from "../hooks/UseAxiospublic";

const Topfoods = () => {
  const axiospublic = UseAxiospublic();

  const { data, isLoading, error } = useQuery(
    ['topFoods'],
    async () => {
      try {
        const response = await axiospublic.get('/topFoods');
        return response.data;
      } catch (err) {
        console.error('Error fetching top foods:', err);
        return [];
      }
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 300000, // 5 minutes to avoid frequent re-fetching
    }
  );

  if (isLoading) {
    return (
       <div className="text-center py-4 min-h-[30vh]">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-4">Error fetching data. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <Sectiontitle heading="Top Foods" subheading="Below you see top foods of our site" />

      {data && Array.isArray(data) && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {data.map((food) => (
            <Foodcard key={food._id} food={food} />
          ))}
        </div>
      ) : (
        <div>No top foods available</div>
      )}

      <Link to='/allfoods' className="mx-auto">
        <button className="btn my-10 bg-[#305a74] text-white w-36">All Foods</button>
      </Link>
    </div>
  );
};

export default Topfoods;
