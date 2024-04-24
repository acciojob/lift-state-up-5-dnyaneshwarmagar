
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <p>{isLoggedIn ? 'You are logged in!' : 'Please log in'}</p>
      <Child isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        {/* Do not remove the main div */}
       
    </div>
  )
}

export default App
