import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);  

  return (
    <div className="flex justify-center items-center min-h-screen">
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <Register setShowLogin={setShowLogin} />
      )}
    </div>
  );
};

export default AuthPage;
