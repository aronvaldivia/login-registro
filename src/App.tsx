import React, { useState } from 'react';
import { Login } from './components/Login';
import { PersonList } from './components/PersonList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <Login onLogin={setIsLoggedIn} />
      ) : (
        <PersonList />
      )}
    </div>
  );
}

export default App;