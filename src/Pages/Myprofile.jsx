import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/Authprovider';

const MyProfile = () => {
  const { user } = useContext(AuthContext); // Access user data from AuthContext

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
        <h2 className="text-xl font-semibold">User Information</h2>
        <div className="flex items-center mt-4">
          <img 
            src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}  // User image from AuthContext
            alt="User Profile"
            className="w-16 h-16 rounded-full mr-4"
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
        <div className="flex flex-col gap-2">
          <Link
            to="/my-added-food-items"
            className="btn btn-primary w-full"
          >
            My Added Food Items
          </Link>
          <Link
            to="/add-food-item"
            className="btn btn-primary w-full"
          >
            Add a Food Item
          </Link>
          <Link
            to="/my-ordered-food-items"
            className="btn btn-primary w-full"
          >
            My Ordered Food Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
