
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
      <h1>Parent Component</h1>
      <h1>{isLoggedIn ? 'You are logged in!' : 'Please log in'}</h1>
      {isLoggedIn ? 'You are logged in!' : <Child isLoggedIn={isLoggedIn} onLogin={handleLogin} />}
      
        {/* Do not remove the main div */}
       
    </div>
  )
}

export default App
