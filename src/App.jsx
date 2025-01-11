import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import LandingPage from './Component/LandingPage/Landingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />

        <Route 
          path="/signup" 
          element={<Signup setIsLoggedIn={setIsLoggedIn} />} 
        />
        
        <Route
          path="/landing" 
          element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/landing" /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
