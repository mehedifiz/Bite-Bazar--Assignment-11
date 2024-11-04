import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div
        className={`absolute transition-transform duration-500 ease-in-out transform ${
          showLogin ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <Login setShowLogin={setShowLogin} />
      </div>
      <div
        className={`absolute transition-transform duration-500 ease-in-out transform ${
          showLogin ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <Register setShowLogin={setShowLogin} />
      </div>
    </div>
  );
};

export default AuthPage;
