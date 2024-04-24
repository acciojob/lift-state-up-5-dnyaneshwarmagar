import React, { useState } from 'react';

const Child = ({ isLoggedIn, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin();
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">{isLoggedIn ? 'Logout' : 'Login'}</button>
    </form>
  );
};

export default Child;