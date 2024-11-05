import React, { useContext } from "react";
import { AuthContext } from "../../Auth/Authprovider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setShowLogin }) => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        navigate('/');
        toast.success('Login Sussess')

      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  const login = (event) => {
    event.preventDefault();
    const email = event.target.email.value; 
    const password = event.target.password.value;  

    signIn(email, password)
      .then(() => {
        toast.success('Login Sussess')
        navigate('/');  
      })
      .catch((error) => {
        console.error("Error signing in:", error);
         
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
        <div className='w-full px-6 py-8 md:px-8'>
          <p className='mt-3 text-xl text-center text-gray-600'>Welcome back!</p>

           
          <div className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50'>
            <div className='px-4 py-2'>
               
              <svg className='w-6 h-6' viewBox='0 0 40 40'> {/* SVG paths here */}</svg>
            </div>
            <span onClick={handleGoogle} className='w-5/6 px-4 py-3 font-bold text-center'>Sign in with Google</span>
          </div>

          
          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b lg:w-1/4'></span>
            <span className='text-xs text-center text-gray-500 uppercase hover:underline'>
              or login with email
            </span>
            <span className='w-1/5 border-b lg:w-1/4'></span>
          </div>

          <form onSubmit={login}>
            <div className='mt-4'>
              <label className='block mb-2 text-sm font-medium text-gray-600' htmlFor='loginEmail'>
                Email Address
              </label>
              <input
                id='loginEmail'
                className='w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400'
                name="email"
                type='email'
                required  
              />
            </div>

            <div className='mt-4'>
              <label className='block mb-2 text-sm font-medium text-gray-600' htmlFor='loginPassword'>
                Password
              </label>
              <input
                id='loginPassword'
                name="password"
                className='w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400'
                type='password'
                required  
              />
            </div>

            <button type='submit' className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white bg-gray-800 rounded-lg hover:bg-gray-700'>Sign In</button>
          </form>

           
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
