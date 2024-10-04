import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './components/SignupPage/Signup.js';
import Signin from './components/SigninPage/Signin.js';
import Dashboard from './components/DashBoard/Dashboard.js';
import Regles from './pages/Regles.js';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route exact path='/' element={<Dashboard/>} />
        <Route exact path='/regles' element={<Regles/>} />


        <Route path="/home" element={<Home />} />
      </Routes>
      <Navbar />

    </div>
  );
};

export default App;