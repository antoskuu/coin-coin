import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeLogo from '../assets/home.png';
import rulesLogo from '../assets/rules.png';
import profileLogo from '../assets/profile.png';




const Navbar = () => {

  
  return (
    
    <nav>
      <Link to="/home">
      <img src={homeLogo} alt="Home" className="nav-logo"/></Link>
      <Link to="/regles"><img src={rulesLogo} alt="Rules" className="nav-logo"/></Link>
      <Link to="/"><img src={profileLogo} alt="Profile" className="nav-logo"/></Link>

    </nav>
  );
};

export default Navbar;