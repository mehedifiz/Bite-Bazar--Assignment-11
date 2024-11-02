import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/Authprovider";
import useMycart from "../hooks/useMycart";
import { FaCartShopping, FaCarTunnel } from "react-icons/fa6";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
const [ refetch, cart ] = useMycart();
  console.log(cart.length)

  const handleLogout = () => {
    logOut().then(() => {
      console.log("User logged out");
    }).catch((error) => console.error("Error logging out:", error));
  };

  return (
    <div className="navbar bg-slate-200 shadow-md flex justify-between">

      <div>
        <a className="btn btn-ghost text-sm md:text-xl">Bite-Bazar</a>
      </div>

      <div>
        <ul className="flex gap-1 md:gap-4 text-sm md:text-xl">
          <li>
            <NavLink 
              className="link no-underline hover:border-b-2 hover:border-b-blue-500 transition-all duration-300 ease-in-out" 
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="link no-underline hover:border-b-2 hover:border-b-blue-500 transition-all duration-300 ease-in-out" 
              to='/allfoods'
            >
              All Foods
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="link no-underline hover:border-b-2 hover:border-b-blue-500 transition-all duration-300 ease-in-out" 
              to='/gallery'
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-none">
        {/* Conditional Rendering for Cart Icon */}
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">{cart.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <p>Your Cart Here : </p>
                    <span className="text-lg font-bold flex items-center gap-2"> <FaCartShopping/> {cart.length}</span>
                <div className="card-actions">
                  <Link to='/my-ordered-food-items' className="btn btn-primary btn-block">View cart</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user ? (
                <img
                  alt="User Avatar"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              ) : (
                <img
                  alt="Default Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {user ? (
              <>
                <li>
                  <Link to="/myprofile" className="justify-between">
                    My Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="justify-between">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/auth#login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navber;
