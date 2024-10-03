import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Autre from './pages/Autre';
import Signup from './components/SignupPage/Signup.js';
import Signin from './components/SigninPage/Signin.js';
import Dashboard from './components/DashBoard/Dashboard.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route exact path='/' element={<Dashboard/>} />


        <Route path="/home" element={<Home />} />
        <Route path="/autre" element={<Autre />} />
      </Routes>
    </div>
  );
};

export default App;