import React, { useContext } from "react";
import { AuthContext } from "../../Auth/Authprovider";

const Login = ({ setShowLogin }) => {
    const {signInWithGoogle}=  useContext(AuthContext)

    const handlegoogle =()=>{
        signInWithGoogle()
    }



  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
        <div className='w-full px-6 py-8 md:px-8'>
          <p className='mt-3 text-xl text-center text-gray-600'>Welcome back!</p>

          {/* Google Sign-in Button */}
          <div className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50'>
            <div className='px-4 py-2'>
              {/* Google icon */}
              <svg className='w-6 h-6' viewBox='0 0 40 40'> {/* SVG paths here */}</svg>
            </div>
            <span onClick={()=> handlegoogle()} className='w-5/6 px-4 py-3 font-bold text-center'>Sign in with Google</span>
          </div>

          {/* Email Login Form */}
          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b lg:w-1/4'></span>
            <span className='text-xs text-center text-gray-500 uppercase hover:underline'>
              or login with email
            </span>
            <span className='w-1/5 border-b lg:w-1/4'></span>
          </div>

          <form>
            <div className='mt-4'>
              <label className='block mb-2 text-sm font-medium text-gray-600' htmlFor='loginEmail'>
                Email Address
              </label>
              <input id='loginEmail' className='w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400' type='email' />
            </div>

            <div className='mt-4'>
              <label className='block mb-2 text-sm font-medium text-gray-600' htmlFor='loginPassword'>
                Password
              </label>
              <input id='loginPassword' className='w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400' type='password' />
            </div>

            <button className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white bg-gray-800 rounded-lg hover:bg-gray-700'>Sign In</button>
          </form>

          {/* Register Link */}
          <div className='flex items-center justify-center mt-4'>
            <span>Don't have an account? </span>
            <button onClick={() => setShowLogin(false)} className="text-blue-600 ml-2 underline">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
