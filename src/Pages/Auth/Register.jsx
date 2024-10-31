import React, { useContext, useState } from "react";
import { AuthContext } from "../../Auth/Authprovider";
import { useNavigate } from "react-router-dom";

const Register = ({ setShowLogin }) => {
  const { signInWithGoogle, setUser, createUser, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handlegoogle = () => {
    signInWithGoogle().then((result) => {
      setUser(result.user);
    });
  };

  const register = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate('/')
        updateUserProfile(name ).then(() => {
          
        });
      })
      .catch((error) => console.error("Error registering:", error));
  };

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-xl text-center text-gray-600">Create an account</h2>

      <form className="mt-4" onSubmit={register}>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="registerName">
            Name
          </label>
          <input
            id="registerName"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="registerEmail">
            Email Address
          </label>
          <input
            id="registerEmail"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor="registerPassword">
            Password
          </label>
          <input
            id="registerPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white bg-gray-800 rounded-lg hover:bg-gray-700">
          Register
        </button>
      </form>

      <button onClick={handlegoogle} className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-gray-600 bg-white border rounded-lg hover:bg-gray-200">
        Sign up with Google
      </button>

      <div className="flex items-center justify-center mt-4">
        <span>Already have an account?</span>
        <button onClick={() => setShowLogin(true)} className="text-blue-600 ml-2 underline">
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
