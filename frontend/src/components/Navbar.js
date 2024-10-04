import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

  
  return (
    
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Sign In</Link>
      <Link to="/">My profile</Link>
      <Link to="/regles">Regles</Link>

      





    </nav>
  );
};

export default Navbar;