import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/Authprovider';
import { Helmet } from 'react-helmet';

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Access user data from AuthContext

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
         <Helmet>
        <title>Profile| Bite-Bazar  </title>
         
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
        <h2 className="text-xl font-semibold">User Information</h2>
        <div className="flex flex-col justify-center items-center mt-4">
          <img 
            src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}  // User image from AuthContext
            alt="User Profile"
            className="w-26 h-28 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold text-lg">{user?.displayName || 'User Name'}</p>
            <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Manage My Food Items</h2>
        <div className="flex flex-row gap-2">
          <Link
            to="/my-added-food-items"
            className=" link bg-[#d6f103] h-14 p text-center font-semibold  "
          >
            My Added Food 
          </Link>
          <Link
            to="/add-food-item"
            className=" link bg-[#d6f103] h-14 p text-center font-semibold "
          >
            Add a Food Item
          </Link>
          <Link
            to="/my-ordered-food-items"
            className="  link bg-[#d6f103] h-14 p text-center font-semibold"
          >
            My Ordered Food Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
